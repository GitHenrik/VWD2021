class Wall {
  constructor(x, width, holeStart, holeSize, solid = false) {
    this.x = x
    this.width = width
    this.holeStart = holeStart
    this.holeSize = holeSize
    this.solid = solid
    this.corners = new Corners(x, width, holeStart, holeSize)
  }
  draw(ctx) {
    if (!this.solid) {
      ctx.save()
      ctx.beginPath()
      ctx.fillStyle = "green"
      ctx.rect(this.x, 0, this.width, this.holeStart)
      ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
      ctx.fill()
      ctx.lineWidth = 0.01
      ctx.stroke()

      ctx.restore()
    } else {
      ctx.save()
      ctx.beginPath()
      ctx.fillStyle = "green"
      ctx.rect(this.x, 0, this.width, this.holeStart)
      ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
      ctx.fill()
      ctx.lineWidth = 0.01
      ctx.stroke()

      //middle block
      ctx.beginPath()
      ctx.fillStyle = "gray"
      ctx.rect(this.x, this.holeStart, this.width, this.holeSize)
      ctx.fill()
      ctx.lineWidth = 0.015
      ctx.stroke()


      ctx.restore()
    }

  }

}

function generateWall() {
  //Generates a wall object with randomized hole position and width
  let start = Math.random();
  if (start > 0.8) { //start of the wall cannot be at the bottom
    start -= 0.2;
  }
  let holeSize = 0.25 + Math.random() / 10;
  let holeWidth = 0.1 + Math.random() / 10;
  let solid = Math.random() < 0.5 ? true : false
  let wall = new Wall(1, holeWidth, start, holeSize, solid);
  return wall
}


function hitWall() {
  if (!Settings.DRAW_BIRD || !Settings.DRAW_WALLS) {
    return false
  }

  if (BIRD[0].x + BIRD[0].radius >= WALLS[0].x && (WALLS[0].holeStart - BIRD[0].radius) >= BIRD[0].y - BIRD[0].radius) {          //osuminen yläetuseinään
    if (Settings.SOUND_ON)
      hitWallSound.play()
    return true
  }

  if (BIRD[0].x + BIRD[0].radius >= WALLS[0].x && WALLS[0].holeStart + WALLS[0].holeSize + BIRD[0].radius <= BIRD[0].y + BIRD[0].radius) {        //osuminen alaetuseinään
    if (Settings.SOUND_ON)
      hitWallSound.play()
    return true
  }

  if (distance([BIRD[0].x, BIRD[0].y], WALLS[0].corners.leftUpper) < BIRD[0].radius) {
    if (Settings.SOUND_ON)
      hitWallSound.play()
    return true
  }
  if (distance([BIRD[0].x, BIRD[0].y], WALLS[0].corners.rightUpper) < BIRD[0].radius) {
    if (Settings.SOUND_ON)
      hitWallSound.play()
    return true
  }
  if (distance([BIRD[0].x, BIRD[0].y], WALLS[0].corners.leftBottom) < BIRD[0].radius) {
    if (Settings.SOUND_ON)
      hitWallSound.play()
    return true
  }
  if (distance([BIRD[0].x, BIRD[0].y], WALLS[0].corners.rightBottom) < BIRD[0].radius) {
    if (Settings.SOUND_ON)
      hitWallSound.play()
    return true
  }

  //keskiosan ylälaita
  let midpoint = [WALLS[0].corners.leftUpper[0] + (WALLS[0].corners.rightUpper[0] - WALLS[0].corners.leftUpper[0]) / 2, WALLS[0].corners.leftUpper[1]]
  if (distance([BIRD[0].x, BIRD[0].y], midpoint) < BIRD[0].radius) {
    if (Settings.SOUND_ON)
      hitWallSound.play()
    return true
  }

  midpoint = [midpoint[0], WALLS[0].corners.leftBottom[1]]
  if (distance([BIRD[0].x, BIRD[0].y], midpoint) < BIRD[0].radius) {
    if (Settings.SOUND_ON)
      hitWallSound.play()
    return true
  }


  else {
    return false
  }

}

function hitSolidWall() {
  if (WALLS[0].solid && BIRD[0].x + BIRD[0].radius >= WALLS[0].x) {
    if (Settings.SOUND_ON)
      hitWallSound.play()
    return true
  }
  return false
}
