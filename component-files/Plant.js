
class Plant {
  /**
   * Everything must be drawn above the Y-coordinate.
   * Y coordinate is always the baseline, this makes the plants render correctly behind each other.
   * @param {String} color Base color for the plant
   * @param {String} type Type of plant to draw
   */
  constructor(color = "green", type = "bush") {
    this.y = (Math.random() / 2) + 0.6 // 0.5 ... 1.1
    this.size = 0.03 + Math.random() / 50  // radius on 3% - 5% canvasista (3% + 2%)
    this.x = 1.05 + Math.random() // Kivet imestyy vaihtelevan kauas, kuitenkin tulevat reunan takaa
    this.deadBranches = [
      Math.random() < 0.7 ? true : false,
      Math.random() < 0.7 ? true : false,
      Math.random() < 0.7 ? true : false,
      Math.random() < 0.7 ? true : false,
    ]
    this.color = color
    this.type = type
    this.speed = 0.005 * this.y
  }

  draw(ctx) {
    ctx.save()
    ctx.translate(this.x, this.y)
    if (this.type === "dead") {
      //dead trunk
      ctx.beginPath()
      ctx.lineWidth = 0.01
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -this.size * 2)
      ctx.stroke()
      //dead branches, each drawn randomly or not
      ctx.beginPath()
      ctx.lineWidth = 0.005
      if (this.deadBranches[0]) {
        ctx.moveTo(0, -this.size / 2)
        ctx.lineTo(this.size, -this.size)
      }
      if (this.deadBranches[1]) {
        ctx.moveTo(0, -this.size / 2)
        ctx.lineTo(-this.size, -this.size)
      }
      if (this.deadBranches[2]) {
        ctx.moveTo(0, -this.size)
        ctx.lineTo(-this.size * 0.6, -this.size * 1.6)
      }
      if (this.deadBranches[3]) {
        ctx.moveTo(0, -this.size)
        ctx.lineTo(this.size * 0.6, -this.size * 1.6)
      }
      ctx.stroke()
    } else if (this.type === "triangular") {
      //trunk behind the treetop
      ctx.beginPath()
      ctx.lineWidth = 0.004
      ctx.fillStyle = "#693d1a"
      ctx.fillRect(-this.size / 5, -this.size / 2, (this.size / 5) * 2, this.size / 2)
      ctx.moveTo(-this.size / 5, 0)
      ctx.lineTo(-this.size / 5, -this.size / 2)
      ctx.moveTo(this.size / 5, -this.size / 2)
      ctx.lineTo(this.size / 5, 0)
      ctx.stroke()
      //draw the triangular top
      ctx.beginPath()
      ctx.lineWidth = 0.005
      ctx.fillStyle = this.color
      ctx.moveTo(-this.size / 2, -this.size / 2)
      ctx.lineTo(0, -2 * this.size)
      ctx.lineTo(this.size / 2, -this.size / 2)
      ctx.closePath()
      ctx.fill()
      ctx.closePath()
      ctx.stroke()
    }
    else if (this.type === "round") {
      //circular head of the tree
      ctx.beginPath()
      ctx.fillStyle = this.color
      ctx.arc(0, -1.5 * this.size, this.size, 0, 2 * Math.PI)
      ctx.fill()
      ctx.lineWidth = 0.004
      ctx.stroke()
      //trunk on top of the drawing. Circular top with bezier curve.
      ctx.beginPath()
      ctx.lineWidth = 0.004
      ctx.fillStyle = "#693d1a"
      ctx.moveTo(this.size / 5, 0)

      ctx.bezierCurveTo(this.size / 5, -this.size * 1.3, -this.size / 5, -this.size * 1.3, -this.size / 5, 0)
      //ctx.fillRect(-this.size / 5, this.size / 2, (this.size / 5) * 2, this.size)
      //ctx.rect(-this.size / 5, this.size / 2, (this.size / 5) * 2, this.size)
      ctx.fill()
      ctx.stroke()

    }
    else if (this.type === "bush") {
      //draw a bush by default. bushes are smaller than trees.
      ctx.beginPath()
      ctx.fillStyle = this.color
      ctx.arc(0, 0, this.size / 2, Math.PI, 2 * Math.PI)
      ctx.fill()
      ctx.lineWidth = 0.003
      ctx.closePath()
      ctx.stroke()
    }
    else if (this.type === "grass") {
      //Draw blades of grass of different heights
      ctx.beginPath()
      ctx.strokeStyle = this.color
      ctx.moveTo(-this.size / 4, 0)
      ctx.lineTo(-this.size / 4, -this.size / 8)
      ctx.moveTo(-this.size / 8, 0)
      ctx.lineTo(-this.size / 8, -this.size / 4)
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -this.size / 8)
      ctx.moveTo(this.size / 8, 0)
      ctx.lineTo(this.size / 6, -this.size / 6)
      ctx.moveTo(this.size / 4, 0)
      ctx.lineTo(this.size / 4, -this.size / 8)
      ctx.lineWidth = 0.002
      ctx.stroke()
    }
    ctx.restore()
  }
}