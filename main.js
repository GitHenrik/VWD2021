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
	while (Settings.themeSets.length > 0) {
		Settings.themeSets.pop()
	}
	while (Settings.BIRD.length > 0) {
		Settings.BIRD.pop()
	}
	while (Settings.WALLS.length > 0) {
		Settings.WALLS.pop()
	}
	initializeElements()
	animate()
}

//looppi, missä tehdään THEME SETS määrä eri juttuja. Ei tarvii sisäisiä looppeja. Nämä sitten talle netaan johonkin bg-set-olioon ehkä
function initializeElements() {
	//initialize themed background sets
	for (let i = 0; i < Settings.THEME_COUNT; i++) {
		Settings.currentTheme = Settings.THEMES[Math.floor(Math.random() * Settings.THEMES.length)]
		Settings.currentColors = Colors.createColorPalette(Settings.currentTheme)
		let background = Background.createBackground(Settings.currentTheme)
		let backgroundElements = BackgroundElement.createBackgroundElement(Settings.currentTheme)
		Settings.themeSets.push(new ThemeSet(background, backgroundElements))

	}

	//initialize bird
	if (Settings.DRAW_BIRD) {
		Settings.BIRD.push(new Bird(0.1, 0.5, Settings.birdSpeed, Settings.birdRadius))
	}

	//initialize walls
	if (Settings.DRAW_WALLS) {
		Settings.WALLS.push(generateWall())
	}


	GlobalVariables.currentScore = 1

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
Drawing order:
1. background
2. background elements
3. bird and obstacles
4. border
5. score board
6. cursor 
*/
	let canvas = document.getElementById("main-canvas")
	let ctx = canvas.getContext("2d")

	Settings.themeSets[Settings.themeIndex].draw(ctx)

	//change theme every now and then
	if (GlobalVariables.currentScore % Settings.CHANGE_THEME_INTERVAL === 0) {
		if (Settings.themeIndex + 1 >= Settings.themeSets.length) {
			Settings.themeIndex = 0
		} else {
			Settings.themeIndex++
		}
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
