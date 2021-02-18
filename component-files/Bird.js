
class Bird {
  constructor(x, y, speed, radius, eyeColor, bodyColor, beakColor) {
    this.x = x
    this.y = y
    this.speed = speed
    this.radius = radius
    this.rotationUp = -15 * Math.PI / 360
    this.rotationDown = 15 * Math.PI / 360
    this.rotationSpeed = 2 * Math.PI / 360
    this.eyeColor = eyeColor
    this.bodyColor = bodyColor
    this.beakColor = beakColor

  }
  fly() {
    this.speed = -0.01
  }


  draw(ctx) {
    ctx.save()
    //draw body
    ctx.beginPath()
    ctx.fillStyle = this.bodyColor
    ctx.translate(this.x, this.y) // siirtää 0,0 koordinaatin
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.lineWidth = 0.005
    ctx.stroke()

    //rotate up
    if (this.speed < 0) {
      if (this.rotationDown >= 45 * Math.PI / 360) {
        this.rotationUp -= this.rotationSpeed   // sairaan nopee nokka ylös
        this.rotationUp = -25 * Math.PI / 360

      }
      this.rotationUp -= this.rotationSpeed
      this.rotationDown = 0
      if (this.rotationUp < -45 * Math.PI / 360) {
        this.rotationUp = -45 * Math.PI / 360
      }
      ctx.rotate(this.rotationUp)
    }
    //rotate down
    else {
      if (this.rotationUp == -45 * Math.PI / 360) {
        this.rotationDown += this.rotationSpeed
        this.rotationDown = -25 * Math.PI / 360   //smoothisti alas

      }
      this.rotationDown += this.rotationSpeed
      this.rotationUp = 0
      if (this.rotationDown > 45 * Math.PI / 360) {
        this.rotationDown = 45 * Math.PI / 360
      }
      ctx.rotate(this.rotationDown)
    }


    //draw beak
    ctx.beginPath()
    ctx.fillStyle = this.beakColor
    ctx.fillRect(0.03, -0.01, this.radius, 0.02)
    ctx.rect(0.03, -0.01, this.radius, 0.02)
    ctx.lineWidth = 0.005
    ctx.stroke()
    //draw eye
    ctx.beginPath()
    ctx.arc(0, -this.radius / 2, this.radius / 3, 0, 2 * Math.PI)
    // ctx.fillStyle = "white"
    ctx.fillStyle = this.eyeColor
    ctx.fill()
    ctx.stroke()
    ctx.restore()


  }
}
