
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
    ctx.rect(0, 0, 1, Settings.groundLevel)
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = this.groundColor
    ctx.rect(0, Settings.groundLevel, 1, 1 - Settings.groundLevel)
    ctx.fill()
    ctx.restore()
  }
}