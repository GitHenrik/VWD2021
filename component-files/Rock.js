class Rock {
  constructor(color = "gray", points, size) {

    this.y = (Math.random() * (1 - Settings.groundLevel)) + Settings.groundLevel
    this.speed = Settings.BG_ELEMENT_SPEED * this.y
    //this.blur = 3 * (1 - this.y) // Blurring is extremely inefficient in browsers, and causes lag easily
    this.color = color
    this.points = points
    this.size = size
    this.x = this.size + Math.random()

  }
  draw(ctx) {
    if (this.points === null) {
      ctx.save()
      //ctx.filter = 'blur(' + this.blur + 'px)'
      ctx.beginPath()
      ctx.fillStyle = this.color
      ctx.translate(this.x, this.y)
      ctx.arc(0, 0, this.size, Math.PI, 2 * Math.PI)
      ctx.fill()
      ctx.lineWidth = 0.004
      ctx.stroke()
      ctx.restore()
    } else {
      ctx.save()
      ctx.beginPath()
      ctx.fillStyle = this.color
      Polygons.drawPolygon(ctx, this.points, this.x, this.y)
      ctx.lineTo(-this.size, 0)
      ctx.fill()
      ctx.lineWidth = 0.004
      ctx.stroke()
      ctx.restore()
    }
  }
}