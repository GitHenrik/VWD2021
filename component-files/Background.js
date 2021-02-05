
class Background {
  //terrain oletuksella tyhjä, jos sitä ei anneta backgroundille
  constructor(skyColor, groundColor, terrain = []) {
    this.skyColor = skyColor
    this.groundColor = groundColor
    this.terrain = terrain
  }
  //piirretään täällä sit kans terrain-ominaisuudet
  draw(ctx) {
    ctx.save()
    ctx.translate(0, 0)
    ctx.beginPath()
    ctx.fillStyle = this.skyColor
    ctx.rect(0, 0, 1, groundLevel)
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = this.groundColor
    ctx.rect(0, groundLevel, 1, 0.4)
    ctx.fill()
    ctx.restore()
  }
}