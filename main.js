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
	window.cancelAnimationFrame(animationId)
	//destroy all existing objects, initialize them and start over
	while (BIRD.length > 0) {
		BIRD.pop();
	}
	while (WALLS.length > 0) {
		WALLS.pop();
	}
	while (BACKGROUNDS.length > 0) {
		BACKGROUNDS.pop();
	}
	while (BG_ELEMENTS.length > 0) {
		BG_ELEMENTS.pop();
	}
	initializeElements()
	animate()
}

function initializeElements() {
	currentColors = Colors.createColorPalette()
	if (Settings.DRAW_BIRD) {
		BIRD.push(new Bird(0.1, 0.5, birdSpeed, birdRadius))
	}
	if (Settings.DRAW_WALLS) {
		WALLS.push(generateWall())
	}
	if (Settings.DRAW_BACKGROUND) {
		BACKGROUNDS.push(new Background(currentColors[0], currentColors[currentColors.length - 1]))
		BACKGROUNDS.push(new Background("rgba(91, 91, 91, 1)", "rgba(153, 51, 51, 1)"))
		BACKGROUNDS.push(new Background("rgba(153, 51, 153, 1)", "rgba(153, 153, 51, 1)"))
	}

	//60hz
	wallSpeed = 0.003
	//144hz
	//wallSpeed = 0.003 * 0.416
	points = 1

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

function createBackgroundElement() {

	const includeRocks = Math.random() < 0.5 ? true : false
	const includePlants = Math.random() < 0.5 ? true : false
	let rockList = []
	let plantList = []

	if (includeRocks) {
		let rockCount = 8 + Math.ceil(Math.random() * 12) // random amount of rocks, at least 20
		const types = ["arced", "bumpy", "irregular"]
		let points = []
		let edges = 5 + Math.ceil(Math.random() * 7)
		let size = 0.01 + Math.random() / 33
		// let	x = 1 + radius + Math.random() // Rocks appear from outside the canvas
		// let y = (Math.random() / 2) + 0.6 //  0.6 < y < 1.1 
		for (let i = 0; i < rockCount; i++) {

			let type = types[Math.floor(Math.random() * types.length)]
			if (type === "arced") {
				points = null
			}
			if (type === "bumpy") {
				points = Polygons.createPolygonPoints(edges, size, true)
			}
			if (type === "irregular") {
				points = Polygons.createPolygonPoints(edges, size, true, true)
			}

			rockList.push(new Rock(Colors.randomGrayColor(), points, size))
			//randomize properties for the next rock
			edges = 5 + Math.ceil(Math.random() * 7)
			size = 0.01 + Math.random() / 33
			// x = 1 + radius + Math.random() 
			// y = (Math.random() / 2) + 0.6
		}
	}
	if (includePlants) {
		let plantCount = 20 + Math.ceil(Math.random() * 20) // // random amount of rocks, at least 20
		//const colors = ["#42f548", "#107813", "#fabe32", "#96fa6e", "#fff421"]
		const types = ["dead", "round", "triangular", "bush", "grass"]
		for (let i = 0; i < plantCount; i++) {
			let nextColor = currentColors[Math.floor(Math.random() * currentColors.length)]
			let type = types[Math.floor(Math.random() * types.length)]
			plantList.push(new Plant(nextColor, type))
		}
	}

	//combine all elements for this backgroundElement object, and sort them to render correctly
	let elementList = rockList.concat(plantList)
	elementList.sort((current, next) => current.y - next.y)

	BG_ELEMENTS.push(new BackgroundElement(elementList))
}

function animate() {
	/**
		* 1. draws everything
	* 2. moves stuff around
		* 3. recursive call
		*/
	drawGame()

	if (points % 150 === 0 && Settings.DRAW_WALLS) {
		WALLS.push(generateWall())
	}

	//bird tippuu painovoiman mukaisesti kiihtyen
	if (Settings.DRAW_BIRD) {
		BIRD[0].speed += gravity
		if (BIRD[0].speed > 0.02) {
			BIRD[0].speed = 0.02
		}
		BIRD[0].y += BIRD[0].speed
	}

	if (Settings.DRAW_WALLS) {
		for (let i = 0; i < WALLS.length; i++) {
			moveWall(i)
			if (WALLS[i].x + WALLS[i].width < 0) {
				WALLS.shift()
			}
		}
	}


	if (Settings.DEATH_ON && (checkDeath() || hitWall() || hitSolidWall())) {
		endGame()
	} else {
		points++
		animationId = window.requestAnimationFrame(animate)
	}
}
function moveWall(i) {
	WALLS[i].x -= wallSpeed
	WALLS[i].corners.leftUpper = [WALLS[i].x - wallSpeed, WALLS[i].holeStart]
	WALLS[i].corners.rightUpper = [WALLS[i].x + WALLS[i].width - wallSpeed, WALLS[i].holeStart]
	WALLS[i].corners.leftBottom = [WALLS[i].x - wallSpeed, WALLS[i].holeStart + WALLS[i].holeSize]
	WALLS[i].corners.rightBottom = [WALLS[i].x + WALLS[i].width - wallSpeed, WALLS[i].holeStart + WALLS[i].holeSize]

}





function endGame() {
	window.cancelAnimationFrame(animationId)
}

function fly() {
	if (!Settings.DRAW_BIRD)
		return null
	BIRD[0].speed = -0.01
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
	if (BIRD[0].y > 1 - BIRD[0].radius || BIRD[0].y < BIRD[0].radius) {
		if (Settings.SOUND_ON)
			hitFloorSound.play()
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
		BACKGROUNDS[bgIndex].draw(ctx)
	}
	if (Settings.DRAW_BG_ELEMENTS) {
		//BG-elementtien siirto hoidetaan sen luokan sisällä.
		BG_ELEMENTS[bgElementIndex].draw(ctx)
	}

	//change background, background elements etc. every now and then
	if (points % Settings.CHANGE_BACKGROUND === 0) {
		bgIndex++
		if (bgIndex >= BACKGROUNDS.length) {
			bgIndex = 0
		}
		bgElementIndex++
		if (bgElementIndex >= BG_ELEMENTS.length) {
			bgElementIndex = 0
		}
	}

	if (Settings.DRAW_BIRD) {
		BIRD[0].draw(ctx)
	}
	if (Settings.DRAW_WALLS) {
		for (let i = 0; i < WALLS.length; i++) {
			WALLS[i].draw(ctx)
		}
	}
	if (Settings.DRAW_BORDER) {
		Border.drawBorder(ctx)
	}
	if (Settings.DRAW_SCORE) {
		ScoreCounter.drawScorecounter(ctx, points)
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
