class Fog {
  constructor() {
    this.height = Settings.FOG_HEIGHT
    this.maxThicknessColor = "rgba(255,255,255,0.95)"
    this.minThicknessColor = "rgba(255,255,255,0)"
  }
  draw(ctx) {
    ctx.save()
    ctx.beginPath()
    let fillGradient = ctx.createLinearGradient(0.5, 0, 0.5, this.height)
    fillGradient.addColorStop(0, this.maxThicknessColor)
    fillGradient.addColorStop(1, this.minThicknessColor)
    ctx.fillStyle = fillGradient
    ctx.rect(0, 0, 1, this.height)
    ctx.fill()
    ctx.restore()
  }
}