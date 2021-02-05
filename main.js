function main() {
	let canvas = document.getElementById("main-canvas")
	let ctx = canvas.getContext("2d")
	canvas.width = Settings.SIZE
	canvas.height = Settings.SIZE
	ctx.scale(Settings.SIZE, Settings.SIZE)
	canvas.onmousemove = event => mouseMoved(event)
	canvas.onclick = event => clicked(event)
	document.addEventListener('keydown', KeyboardListener.keyPressed)
	initializeElements()
	animate()
}

function resetGame() {
	window.cancelAnimationFrame(GlobalVariables.animationId)
	//destroy all existing objects, initialize them and start over
	while (Settings.BIRD.length > 0) {
		Settings.BIRD.pop();
	}
	while (Settings.WALLS.length > 0) {
		Settings.WALLS.pop();
	}
	while (Settings.BACKGROUNDS.length > 0) {
		Settings.BACKGROUNDS.pop();
	}
	while (Settings.BG_ELEMENTS.length > 0) {
		Settings.BG_ELEMENTS.pop();
	}
	initializeElements()
	animate()
}

function initializeElements() {
	Settings.currentColors = Colors.createColorPalette()
	// creates an array that contains different hues of a single color, then creates elements with those hues
	if (Settings.DRAW_BIRD) {
		Settings.BIRD.push(new Bird(0.1, 0.5, Settings.birdSpeed, Settings.birdRadius))
	}
	if (Settings.DRAW_WALLS) {
		Settings.WALLS.push(generateWall())
	}
	if (Settings.DRAW_BACKGROUND) {
		Settings.BACKGROUNDS.push(new Background(Settings.currentColors[0], Settings.currentColors[Settings.currentColors.length - 1]))
	}

	GlobalVariables.currentScore = 1

	if (Settings.DRAW_BG_ELEMENTS) {
		// create random sets of background elements (should provide enough variation)
		for (let i = 0; i < Settings.BG_ELEMENT_SETS; i++) {
			createBackgroundElement()
		}
	}

}

/**
 * Returns an array of random Boolean values
 * @param {Number} length Length of the desired array
 */
function arrayOfTruths(length) {
	let array = []
	for (let i = 0; i < length; i++) {
		array.push(Math.random() < 0.5 ? true : false)
	}
	return array
}

function animate() {
	/**
		* 1. draws everything
	* 2. moves stuff around
		* 3. recursive call
		*/
	drawGame()

	if (GlobalVariables.currentScore % 150 === 0 && Settings.DRAW_WALLS) {
		Settings.WALLS.push(generateWall())
	}

	//bird tippuu painovoiman mukaisesti kiihtyen
	if (Settings.DRAW_BIRD) {
		Settings.BIRD[0].speed += Settings.GRAVITY
		if (Settings.BIRD[0].speed > 0.02) {
			Settings.BIRD[0].speed = 0.02
		}
		Settings.BIRD[0].y += Settings.BIRD[0].speed
	}

	if (Settings.DRAW_WALLS) {
		for (let i = 0; i < Settings.WALLS.length; i++) {
			moveWall(i)
			if (Settings.WALLS[i].x + Settings.WALLS[i].width < 0) {
				Settings.WALLS.shift()
			}
		}
	}


	if (Settings.DEATH_ON && (checkDeath() || hitWall() || hitSolidWall())) {
		endGame()
	} else {
		GlobalVariables.currentScore++
		GlobalVariables.animationId = window.requestAnimationFrame(animate)
	}
}


function endGame() {
	window.cancelAnimationFrame(GlobalVariables.animationId)
}


// source https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas
function distance(location1, location2) {
	let a = location1[0] - location2[0]
	let b = location1[1] - location2[1]
	let c = Math.sqrt(a * a + b * b)
	return c
}

function checkDeath() {
	if (!Settings.DRAW_BIRD || !Settings.DEATH_ON) {
		return false
	}
	if (Settings.BIRD[0].y > 1 - Settings.BIRD[0].radius || Settings.BIRD[0].y < Settings.BIRD[0].radius) {
		if (Settings.SOUND_ON)
			Sounds.hitFloorSound.play()
		return true
	}
	return false
}

function drawGame() {
	/*
***** tässä vain piirtäminen , tavaroiden siirtely jne. "animate"-funktiossa
Drawing order:
1. background
1.5 decorations
2. bird and obstacles
3. border
4. score board
5. cursor 
*/
	let canvas = document.getElementById("main-canvas")
	let ctx = canvas.getContext("2d")
	//Piirretään tausta ja elementit, mitkä vaihtuvat X pisteen välein
	if (Settings.DRAW_BACKGROUND) {
		Settings.BACKGROUNDS[Settings.bgIndex].draw(ctx)
	}
	if (Settings.DRAW_BG_ELEMENTS) {
		//BG-elementtien siirto hoidetaan sen luokan sisällä.
		Settings.BG_ELEMENTS[Settings.bgElementIndex].draw(ctx)
	}

	//change background, background elements etc. every now and then
	if (GlobalVariables.currentScore % Settings.CHANGE_BACKGROUND_INTERVAL === 0) {
		Settings.bgIndex = Math.floor(Math.random() * Settings.BACKGROUNDS.length)
		Settings.bgElementIndex = Math.floor(Math.random() * Settings.BG_ELEMENTS.length)
	}

	if (Settings.DRAW_BIRD) {
		Settings.BIRD[0].draw(ctx)
	}
	if (Settings.DRAW_WALLS) {
		for (let i = 0; i < Settings.WALLS.length; i++) {
			Settings.WALLS[i].draw(ctx)
		}
	}
	if (Settings.DRAW_BORDER) {
		Border.drawBorder(ctx)
	}
	if (Settings.DRAW_SCORE) {
		ScoreCounter.drawScorecounter(ctx)
	}
	if (Settings.DRAW_CURSOR) {
		drawCursor(ctx)
	}


}



function fillCanvas(color = "#43c499") {
	//fills the entire canvas with a single color
	let canvas = document.getElementById("main-canvas")
	let ctx = canvas.getContext("2d")
	ctx.save()
	ctx.fillStyle = color
	ctx.fillRect(0, 0, 1, 1)
	ctx.restore()
}
