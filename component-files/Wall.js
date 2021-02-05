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


function moveWall(i) {
  Settings.WALLS[i].x -= Settings.WALL_SPEED
  Settings.WALLS[i].corners.leftUpper = [Settings.WALLS[i].x - Settings.WALL_SPEED, Settings.WALLS[i].holeStart]
  Settings.WALLS[i].corners.rightUpper = [Settings.WALLS[i].x + Settings.WALLS[i].width - Settings.WALL_SPEED, Settings.WALLS[i].holeStart]
  Settings.WALLS[i].corners.leftBottom = [Settings.WALLS[i].x - Settings.WALL_SPEED, Settings.WALLS[i].holeStart + Settings.WALLS[i].holeSize]
  Settings.WALLS[i].corners.rightBottom = [Settings.WALLS[i].x + Settings.WALLS[i].width - Settings.WALL_SPEED, Settings.WALLS[i].holeStart + Settings.WALLS[i].holeSize]

}

function hitWall() {
  if (!Settings.DRAW_BIRD || !Settings.DRAW_WALLS) {
    return false
  }

  if (Settings.BIRD[0].x + Settings.BIRD[0].radius >= Settings.WALLS[0].x && (Settings.WALLS[0].holeStart - Settings.BIRD[0].radius) >= Settings.BIRD[0].y - Settings.BIRD[0].radius && Settings.BIRD[0].x - Settings.BIRD[0].radius <= Settings.WALLS[0].x + Settings.WALLS[0].width) {
    console.log("Hit top vertical wall")
    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }
  if (Settings.BIRD[0].x + Settings.BIRD[0].radius >= Settings.WALLS[0].x) {
    if (Settings.WALLS[0].holeStart + Settings.WALLS[0].holeSize <= Settings.BIRD[0].y + Settings.BIRD[0].radius) {
      if (Settings.BIRD[0].x <= Settings.WALLS[0].x + Settings.WALLS[0].width) {
        console.log("Hit bottom vertical wall")
        if (Settings.SOUND_ON) {
          Sounds.hitWallSound.play()
        }
        return true
      }
    }

  }



  if (distance([Settings.BIRD[0].x, Settings.BIRD[0].y], Settings.WALLS[0].corners.leftUpper) < Settings.BIRD[0].radius) {
    console.log("Hit top-left corner")
    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }
  if (distance([Settings.BIRD[0].x, Settings.BIRD[0].y], Settings.WALLS[0].corners.rightUpper) < Settings.BIRD[0].radius) {
    console.log("Hit top-right corner")
    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }
  if (distance([Settings.BIRD[0].x, Settings.BIRD[0].y], Settings.WALLS[0].corners.leftBottom) < Settings.BIRD[0].radius) {
    console.log("Hit bottom-left corner")
    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }
  if (distance([Settings.BIRD[0].x, Settings.BIRD[0].y], Settings.WALLS[0].corners.rightBottom) < Settings.BIRD[0].radius) {
    console.log("Hit bottom-right corner")
    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }

  let midpoint = [Settings.WALLS[0].corners.leftUpper[0] + (Settings.WALLS[0].corners.rightUpper[0] - Settings.WALLS[0].corners.leftUpper[0]) / 2, Settings.WALLS[0].corners.leftUpper[1]]
  if (distance([Settings.BIRD[0].x, Settings.BIRD[0].y], midpoint) < Settings.BIRD[0].radius) {
    console.log("Hit top horizontal wall")
    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }

  midpoint = [midpoint[0], Settings.WALLS[0].corners.leftBottom[1]]
  if (distance([Settings.BIRD[0].x, Settings.BIRD[0].y], midpoint) < Settings.BIRD[0].radius) {
    console.log("Hit bottom horizontal wall")
    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }


  else {
    return false
  }

}

function hitSolidWall() {
  if (!Settings.DRAW_BIRD) {
    return false
  }
  if (Settings.WALLS[0].solid && Settings.BIRD[0].x + Settings.BIRD[0].radius >= Settings.WALLS[0].x) {
    if (Settings.SOUND_ON)
      Sounds.hitWallSound.play()
    return true
  }
  return false
}
