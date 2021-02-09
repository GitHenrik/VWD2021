class Rock {
  constructor(color = "gray", points, size, type) {

    this.y = (Math.random() * (1 - Settings.groundLevel)) + Settings.groundLevel
    this.speed = Settings.BG_ELEMENT_SPEED * this.y
    //this.blur = 3 * (1 - this.y) // Blurring is extremely inefficient in browsers, and causes lag easily
    this.color = color
    this.points = points
    this.size = size
    this.x = this.size + Math.random()
    this.type = type

  }
  draw(ctx) {
    if (this.type === "arced") {
      ctx.save()
      //ctx.filter = 'blur(' + this.blur + 'px)'
      ctx.beginPath()
      ctx.fillStyle = this.color
      ctx.translate(this.x, this.y)
      ctx.arc(0, 0, this.size, Math.PI, 2 * Math.PI)
      ctx.fill()
      ctx.lineWidth = 0.003
      ctx.stroke()
      ctx.restore()
    }
    if (this.type === "pebble") {
      //TODO: draw small clutter of rocks
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.fillStyle = this.color
      ctx.lineWidth = 0.001
      ctx.beginPath()
      ctx.arc(-this.size / 2, -this.size / 6, this.size / 6, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(0, -this.size / 4, this.size / 4, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(this.size / 3, -this.size / 5, this.size / 5, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(-this.size / 3, -this.size / 6, this.size / 6, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(this.size / 4, -this.size / 8, this.size / 8, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }
    if (this.type === "bumpy" || this.type === "irregular") {
      ctx.save()
      ctx.beginPath()
      ctx.fillStyle = this.color
      Polygons.drawPolygon(ctx, this.points, this.x, this.y)
      ctx.lineTo(-this.size, 0)
      ctx.fill()
      ctx.lineWidth = 0.003
      ctx.stroke()
      ctx.restore()
    }
  }
}