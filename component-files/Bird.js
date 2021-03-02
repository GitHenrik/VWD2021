
class Bird {
  constructor(x, y, speed, radiusX, radiusY, eyeColor, bodyColor, beakColor) {
    this.x = x
    this.y = y
    this.speed = speed
    this.radiusX = radiusX
    this.radius = radiusX // used in collision checks
    this.radiusY = radiusY
    this.rotation = 0
    this.rotationSpeed = (2 * Math.PI / 360) * 2000
    this.shapeSpeed = 0.007
    this.eyeColor = eyeColor
    this.bodyColor = bodyColor
    this.beakColor = beakColor


  }

  static createBird() {
    return new Bird(0.1, 0.5, Settings.birdSpeed, Settings.birdRadiusX, Settings.birdRadiusY, Settings.birdEyeColor, Settings.birdBodyColor, Settings.birdBeakColor)
  }

  changeColor() {
    this.bodyColor = Colors.randomColor()
  }

  squish() {
    this.radiusX -= this.shapeSpeed * 0.15
    this.radiusY += this.shapeSpeed * 0.15
    if (this.radiusX <= 0) {
      this.radiusX = 0
    }
  }

  changeShape() {
    this.radiusY -= this.shapeSpeed
    this.radiusX += this.shapeSpeed
  }

  resetShape() {
    this.radiusY = 0.05
    this.radiusX = 0.05
  }

  fly() {
    this.speed = -0.01
  }

  draw(ctx) {
    ctx.save()
    //draw body
    ctx.beginPath()
    ctx.fillStyle = this.bodyColor
    ctx.translate(this.x, this.y)
    //ctx.arc(0, 0, this.radius, 0, 2 * Math.PI)
    this.rotation = this.speed * this.rotationSpeed
    ctx.rotate(this.rotation)
    ctx.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, Math.PI * 2);
    ctx.fill()
    ctx.lineWidth = 0.005
    ctx.stroke()

    //draw beak
    ctx.beginPath()
    ctx.fillStyle = this.beakColor
    ctx.fillRect(0.03, -0.01, this.radiusX, 0.02)
    ctx.rect(0.03, -0.01, this.radiusX, 0.02)
    ctx.lineWidth = 0.005
    ctx.stroke()
    //draw eye
    ctx.beginPath()
    ctx.arc(0, -this.radiusX / 2, this.radiusX / 3, 0, 2 * Math.PI)
    ctx.fillStyle = this.eyeColor
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }
}











