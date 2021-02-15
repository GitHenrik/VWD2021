class Sun {
  constructor() {
    this.maxGradientColor = "rgba(255, 255, 0, 0.8)"
    this.minGradientColor = "rgba(255, 230, 0, 0)"
  }
  draw(ctx) {
    ctx.save()
    ctx.beginPath()
    let radialGradient = ctx.createRadialGradient(0, 0, 0.2, 0, 0, Settings.SUN_STRENGTH)
    radialGradient.addColorStop(0, this.maxGradientColor)
    radialGradient.addColorStop(1, this.minGradientColor)
    ctx.fillStyle = radialGradient
    ctx.fillRect(0, 0, 1, 1)
    ctx.restore()
  }
}