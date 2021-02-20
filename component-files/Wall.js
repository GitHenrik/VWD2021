class Wall {
  //available wall types: pipe, city, beach, icy
  constructor(x, width, holeStart, holeSize, solid = false, type = "flatlands") {
    this.x = x
    this.width = width
    this.holeStart = holeStart
    this.holeSize = holeSize
    this.solid = solid
    this.corners = new Corners(x, width, holeStart, holeSize)
    this.type = type
  }


  draw(ctx) {
    if (this.type === "flatlands") {
      if (!this.solid) {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Decoration
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.rect(this.x - 0.02, this.holeStart - 0.03, this.width + 0.04, 0.03)
        ctx.rect(this.x - 0.02, this.holeStart + this.holeSize, this.width + 0.04, 0.03)
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

        //Decoration
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.rect(this.x - 0.02, this.holeStart - 0.03, this.width + 0.04, 0.03)
        ctx.rect(this.x - 0.02, this.holeStart + this.holeSize, this.width + 0.04, 0.03)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //middle block
        ctx.beginPath()
        ctx.fillStyle = "gray"
        ctx.rect(this.x, this.holeStart + 0.01, this.width, this.holeSize - 0.02)
        ctx.fill()
        ctx.lineWidth = 0.015
        ctx.stroke()


        ctx.restore()
      }
    }

    if (this.type === "icy") {
      if (!this.solid) {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#99FFFF"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Decoration


        ctx.restore()
      } else {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#99FFFF"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //middle block
        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.rect(this.x, this.holeStart, this.width, this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.015
        ctx.stroke()


        ctx.restore()
      }
    }

    if (this.type === "city") {
      let yTop = this.holeStart
      let yBottom = this.holeStart + this.holeSize

      if (!this.solid) {

        //Stacked traffic cones top obstacle
        for (let i = 0; i < 10; i++) {

          //bottom of the traffic cone
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#FF8000"
          ctx.rect(this.x, yTop - 0.03, this.width, 0.03)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()

          //Top of the traffic cone
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 8), yTop - 0.03)
          ctx.lineTo(this.x + (this.width / 2), yTop - 0.2)
          ctx.lineTo(this.x - (this.width / 8) + this.width, yTop - 0.03)
          ctx.lineWidth = 0.01
          ctx.fillStyle = "#FF8000"
          ctx.fill()
          ctx.stroke()

          //decoration white line
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 5), yTop - 0.05)
          ctx.lineTo(this.x + this.width - this.width / 5, yTop - 0.05)
          ctx.lineWidth = 0.015
          ctx.strokeStyle = "#E0E0E0"
          ctx.stroke()
          ctx.restore()

          yTop -= 0.075
        }

        //obstacle bottom traffic cone single

        //Bottom of the traffic cone
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#FF8000"
        ctx.rect(this.x, yBottom + 0.2, this.width, 0.03)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Top of the traffic cone
        ctx.beginPath()
        ctx.moveTo(this.x + (this.width / 8), yBottom + 0.2)
        ctx.lineTo(this.x + (this.width / 2), yBottom + 0.01)
        ctx.lineTo(this.x - (this.width / 8) + this.width, yBottom + 0.2)
        ctx.lineWidth = 0.01
        ctx.fillStyle = "#FF8000"
        ctx.fill()
        ctx.stroke()

        //decoration white line
        ctx.beginPath()
        ctx.moveTo(this.x + (this.width / 5), yBottom + 0.18)
        ctx.lineTo(this.x + this.width - this.width / 5, yBottom + 0.18)
        ctx.lineWidth = 0.015
        ctx.strokeStyle = "#E0E0E0"
        ctx.stroke()
        ctx.restore()

        yBottom += 0.075

        //Stacked traffic cones bottom part
        for (let i = 0; i < 10; i++) {

          //bottom of the traffic cone
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#FF8000"
          ctx.rect(this.x, yBottom + 0.2, this.width, 0.03)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()

          //Top of the traffic cone stack
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 8), yBottom + 0.2)
          ctx.lineTo(this.x + (this.width / 4), yBottom + 0.16)
          ctx.lineTo(this.x - (this.width / 4) + this.width, yBottom + 0.16)
          ctx.lineTo(this.x - (this.width / 8) + this.width, yBottom + 0.2)
          ctx.lineWidth = 0.01
          ctx.fillStyle = "#FF8000"
          ctx.fill()
          ctx.stroke()

          //decoration white line
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 5), yBottom + 0.18)
          ctx.lineTo(this.x + this.width - this.width / 5, yBottom + 0.18)
          ctx.lineWidth = 0.015
          ctx.strokeStyle = "#E0E0E0"
          ctx.stroke()
          ctx.restore()

          yBottom += 0.075
        }

      } else {
        //Stacked traffic cones top obstacle
        for (let i = 0; i < 10; i++) {

          //bottom of the traffic cone
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#FF8000"
          ctx.rect(this.x, yTop - 0.03, this.width, 0.03)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()

          //Top of the traffic cone
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 8), yTop - 0.03)
          ctx.lineTo(this.x + (this.width / 2), yTop - 0.2)
          ctx.lineTo(this.x - (this.width / 8) + this.width, yTop - 0.03)
          ctx.lineWidth = 0.01
          ctx.fillStyle = "#FF8000"
          ctx.fill()
          ctx.stroke()

          //decoration white line
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 5), yTop - 0.05)
          ctx.lineTo(this.x + this.width - this.width / 5, yTop - 0.05)
          ctx.lineWidth = 0.015
          ctx.strokeStyle = "#E0E0E0"
          ctx.stroke()
          ctx.restore()

          yTop -= 0.075
        }

        //obstacle bottom traffic cone single

        //Bottom of the traffic cone
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#FF8000"
        ctx.rect(this.x, yBottom + 0.2, this.width, 0.03)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Top of the traffic cone
        ctx.beginPath()
        ctx.moveTo(this.x + (this.width / 8), yBottom + 0.2)
        ctx.lineTo(this.x + (this.width / 2), yBottom + 0.01)
        ctx.lineTo(this.x - (this.width / 8) + this.width, yBottom + 0.2)
        ctx.lineWidth = 0.01
        ctx.fillStyle = "#FF8000"
        ctx.fill()
        ctx.stroke()

        //decoration white line
        ctx.beginPath()
        ctx.moveTo(this.x + (this.width / 5), yBottom + 0.18)
        ctx.lineTo(this.x + this.width - this.width / 5, yBottom + 0.18)
        ctx.lineWidth = 0.015
        ctx.strokeStyle = "#E0E0E0"
        ctx.stroke()
        ctx.restore()

        yBottom += 0.075

        //Stacked traffic cones bottom part
        for (let i = 0; i < 10; i++) {

          //bottom of the traffic cone
          ctx.save()
          ctx.beginPath()
          ctx.fillStyle = "#FF8000"
          ctx.rect(this.x, yBottom + 0.2, this.width, 0.03)
          ctx.fill()
          ctx.lineWidth = 0.01
          ctx.stroke()

          //Top of the traffic cone
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 8), yBottom + 0.2)
          ctx.lineTo(this.x + (this.width / 4), yBottom + 0.16)
          ctx.lineTo(this.x - (this.width / 4) + this.width, yBottom + 0.16)
          ctx.lineTo(this.x - (this.width / 8) + this.width, yBottom + 0.2)
          ctx.lineWidth = 0.01
          ctx.fillStyle = "#FF8000"
          ctx.fill()
          ctx.stroke()

          //decoration white line
          ctx.beginPath()
          ctx.moveTo(this.x + (this.width / 5), yBottom + 0.18)
          ctx.lineTo(this.x + this.width - this.width / 5, yBottom + 0.18)
          ctx.lineWidth = 0.015
          ctx.strokeStyle = "#E0E0E0"
          ctx.stroke()
          ctx.restore()

          yBottom += 0.075
        }

        /*
          //middle block, STOP sign in this case
          let centerX = this.x+this.width/2
          let centerY = this.holeStart+this.holeSize/2
          ctx.beginPath()
          ctx.moveTo(centerX-0.05, centerY-0.1)
          ctx.lineTo(centerX+0.05, centerY-0.1)
          ctx.lineTo(centerX+0.1, centerY-0.05)
          ctx.lineTo(centerX+0.1, centerY+0.05)
          ctx.lineTo(centerX+0.05, centerY+0.1)
          ctx.lineTo(centerX-0.05, centerY+0.1)
          ctx.lineTo(centerX-0.1, centerY+0.05)
          ctx.lineTo(centerX-0.1, centerY-0.05)
          ctx.lineTo(centerX-0.05, centerY-0.1)
  
          ctx.fillStyle = "red"
          ctx.strokeStyle = "#E0E0E0"
          ctx.stroke()
  
          */
        //middle block placeholder
        ctx.beginPath()
        ctx.fillStyle = "gray"
        ctx.rect(this.x, this.holeStart, this.width, this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.015
        ctx.stroke()

      }
    }

    if (this.type === "beach") {
      let yTop = this.holeStart - 0.1
      let yBottom = this.holeStart + this.holeSize

      if (!this.solid) {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#896837"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()
        ctx.restore()


        for (let i = 0; i < 7; i++) {
          ctx.beginPath()
          ctx.moveTo(this.x, yTop)
          ctx.bezierCurveTo(this.x, yTop + 0.1, this.x + this.width, yTop + 0.1, this.x + this.width, yTop)
          ctx.lineWidth = 0.01
          ctx.stroke()
          ctx.restore()
          yTop -= 0.1
        }

        for (let i = 0; i < 7; i++) {
          ctx.beginPath()
          ctx.moveTo(this.x, yBottom)
          ctx.bezierCurveTo(this.x, yBottom + 0.1, this.x + this.width, yBottom + 0.1, this.x + this.width, yBottom)
          ctx.lineWidth = 0.01
          ctx.stroke()
          yBottom += 0.1
        }

      } else {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "#896837"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        for (let i = 0; i < 7; i++) {
          ctx.beginPath()
          ctx.moveTo(this.x, yTop)
          ctx.bezierCurveTo(this.x, yTop + 0.1, this.x + this.width, yTop + 0.1, this.x + this.width, yTop)
          ctx.lineWidth = 0.01
          ctx.stroke()
          yTop -= 0.1
        }

        for (let i = 0; i < 7; i++) {
          ctx.beginPath()
          ctx.moveTo(this.x, yBottom)
          ctx.bezierCurveTo(this.x, yBottom + 0.1, this.x + this.width, yBottom + 0.1, this.x + this.width, yBottom)
          ctx.lineWidth = 0.01
          ctx.stroke()
          yBottom += 0.1
        }

        //middle block, coconut in this case
        ctx.beginPath()
        ctx.fillStyle = "#663300"
        ctx.moveTo(this.x + this.width / 2, this.holeStart)
        ctx.bezierCurveTo(this.x - 0.05, this.holeStart, this.x - 0.05, this.holeStart + this.holeSize, this.x + this.width / 2, this.holeStart + this.holeSize)
        ctx.moveTo(this.x + this.width / 2, this.holeStart)
        ctx.bezierCurveTo(this.x + this.width + 0.05, this.holeStart, this.x + this.width + 0.05, this.holeStart + this.holeSize, this.x + this.width / 2, this.holeStart + this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.015
        ctx.stroke()


        //Decorations for the middle block
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(this.x + this.width / 2, this.holeStart + 0.05, 0.005, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(this.x + this.width / 2 - 0.03, this.holeStart + 0.08, 0.005, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(this.x + this.width / 2 + 0.03, this.holeStart + 0.08, 0.005, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()

        ctx.restore()
      }
    }
    if (this.type === "mountainous") {
      if (!this.solid) {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Decoration
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.rect(this.x - 0.02, this.holeStart - 0.03, this.width + 0.04, 0.03)
        ctx.rect(this.x - 0.02, this.holeStart + this.holeSize, this.width + 0.04, 0.03)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        ctx.restore()
      } else {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.rect(this.x, 0, this.width, this.holeStart)
        ctx.rect(this.x, this.holeStart + this.holeSize, this.width, 1 - this.holeStart - this.holeSize)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //Decoration
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.rect(this.x - 0.02, this.holeStart - 0.03, this.width + 0.04, 0.03)
        ctx.rect(this.x - 0.02, this.holeStart + this.holeSize, this.width + 0.04, 0.03)
        ctx.fill()
        ctx.lineWidth = 0.01
        ctx.stroke()

        //middle block
        ctx.beginPath()
        ctx.fillStyle = "gray"
        ctx.rect(this.x, this.holeStart + 0.01, this.width, this.holeSize - 0.02)
        ctx.fill()
        ctx.lineWidth = 0.015
        ctx.stroke()


        ctx.restore()
      }
    }
  }
}

function generateWall(type) {
  //Generates a wall object with randomized hole position and width
  let start = Math.random();
  if (start > 0.7) { //start of the wall cannot be at the bottom
    start -= 0.3;
  }
  let holeSize = 0.25 + Math.random() / 10;
  let holeWidth = 0.1 + Math.random() / 10;
  let solid = Math.random() < 0.5 ? true : false
  let wall = new Wall(1, holeWidth, start, holeSize, solid, type);
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

  // If the type of the wall is city, the collision of bottom wall will be treated differently than other wall types
  if (Settings.WALLS[0].type == "city") {
    if (Settings.BIRD[0].x + Settings.BIRD[0].radius >= Settings.WALLS[0].x) {
      if (Settings.WALLS[0].holeStart + Settings.WALLS[0].holeSize + 0.15 <= Settings.BIRD[0].y + Settings.BIRD[0].radius) {
        if (Settings.BIRD[0].x <= Settings.WALLS[0].x + Settings.WALLS[0].width) {
          console.log("Hit bottom vertical wall")
          if (Settings.SOUND_ON) {
            Sounds.hitWallSound.play()
          }
          return true
        }
      }
    }
    //For other wall types than city
  } else {
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

  // Bottom left corner is different for wall type city
  if (distance([Settings.BIRD[0].x, Settings.BIRD[0].y], Settings.WALLS[0].corners.leftBottom) < Settings.BIRD[0].radius) {
    if (Settings.WALLS[0].type != "city") {
      console.log("Hit bottom-left corner")
      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()
      return true
    }
  }
  // Bottom right corner is different for wall type city
  if (distance([Settings.BIRD[0].x, Settings.BIRD[0].y], Settings.WALLS[0].corners.rightBottom) < Settings.BIRD[0].radius) {
    if (Settings.WALLS[0].type != "city") {
      console.log("Hit bottom-right corner")
      if (Settings.SOUND_ON)
        Sounds.hitWallSound.play()
      return true
    }
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
