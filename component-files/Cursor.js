

function clickedWall(wall, mouseX, mouseY) {
  let leftUpper = wall.corners.leftUpper
  let rightBottom = wall.corners.rightBottom

  if (mouseX > leftUpper[0] && mouseX < rightBottom[0]) {
    if (mouseY > leftUpper[1] && mouseY < rightBottom[1]) {
      return true
    }
  }
}

function mouseMoved(event) {
  let canvas = document.getElementById("main-canvas")
  mouseCoordinates = getMousePos(canvas, event)
  mouseX = mouseCoordinates.x
  mouseY = mouseCoordinates.y
}

function getMousePos(canvas, evt) {
  // SOURCE for this snippet to get mouse coordinates: https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
  let rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}

function drawCursor(ctx) {
  ctx.save()

  ctx.translate(mouseX / 1000, mouseY / 1000)
  ctx.lineWidth = 0.01
  //crosshairs
  ctx.strokeStyle = "crimson"
  ctx.beginPath()
  ctx.moveTo(-0.05, 0)
  ctx.lineTo(0.05, 0)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(0, -0.05)
  ctx.lineTo(0, 0.05)
  ctx.stroke()
  ctx.strokeStyle = "black"

  ctx.beginPath()
  ctx.arc(0, 0, 0.025, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(0, 0, 0.005, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.restore()
}

function clicked(event) {
  let canvas = document.getElementById("main-canvas")
  mouseCoordinates = getMousePos(canvas, event)
  mouseX = mouseCoordinates.x / 1000
  mouseY = mouseCoordinates.y / 1000

  for (let i = 0; i < WALLS.length; i++) {
    if (clickedWall(WALLS[i], mouseX, mouseY) == true) {
      WALLS[i].solid = false
    }
  }
}
