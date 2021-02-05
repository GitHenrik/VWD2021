
class Bird {
  constructor(x, y, speed = -0.005, radius = 0.05) {
    this.x = x   		//lisätty x koordinaatti seinään osumista varten
    this.y = y
    this.speed = speed
    this.radius = radius
  }
  fly() {
    this.speed = -0.01
  }
  draw(ctx) {
    ctx.save()
    //draw body
    ctx.beginPath()
    ctx.fillStyle = "yellow"
    ctx.translate(this.x, this.y) // siirtää 0,0 koordinaatin
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.lineWidth = 0.005
    ctx.stroke()
    //draw beak
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.fillRect(0.03, -0.01, this.radius, 0.02)
    ctx.rect(0.03, -0.01, this.radius, 0.02)
    ctx.lineWidth = 0.005
    ctx.stroke()
    //draw eye
    ctx.beginPath()
    ctx.arc(0, -this.radius / 2, this.radius / 3, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }
}
