class Background {
  constructor(theme = "flatlands") {
    this.skyColor = Settings.currentColors.skyColor
    this.groundColor = Settings.currentColors.groundColor
    this.largeObjectColor = Settings.currentColors.largeObjectColor
    this.theme = theme
  }
  draw(ctx) {
    if (this.theme === "flatlands") {
      ctx.save()
      ctx.translate(0, 0)
      //draw the sky
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the flatlands
      ctx.beginPath()
      ctx.fillStyle = this.groundColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.moveTo(0, Settings.horizonLevel)
      ctx.quadraticCurveTo(0.5, Settings.horizonLevel * 0.9, 1, Settings.horizonLevel)
      ctx.fill()
      ctx.restore()
    } else if (this.theme === "mountainous") {
      ctx.save()
      ctx.translate(0, 0)
      //draw the sky on the background
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the ground leading up to the mountain
      ctx.beginPath()
      ctx.fillStyle = this.groundColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.fill()
      //draw mountains from back to front
      //mountain 1
      ctx.beginPath()
      ctx.fillStyle = this.largeObjectColor
      ctx.moveTo(0, Settings.horizonLevel)
      ctx.quadraticCurveTo(0.5, 0, 1, Settings.horizonLevel)
      ctx.lineWidth = 0.003
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      //mountain 2
      ctx.beginPath()
      ctx.fillStyle = this.largeObjectColor
      ctx.moveTo(0.4, (Settings.groundLevel + Settings.horizonLevel) / 2)
      ctx.quadraticCurveTo(1, 0, 1.5, (Settings.groundLevel + Settings.horizonLevel) / 2)
      ctx.lineWidth = 0.003
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      //mountain 3
      ctx.beginPath()
      ctx.fillStyle = this.largeObjectColor
      ctx.moveTo(0, (Settings.groundLevel + Settings.horizonLevel) / 2)
      ctx.quadraticCurveTo(0.3, 0.2, 0.6, (Settings.groundLevel + Settings.horizonLevel) / 2)
      ctx.lineWidth = 0.003
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      //mountain 4
      ctx.beginPath()
      ctx.moveTo(-0.1, Settings.groundLevel - (Settings.groundLevel - Settings.horizonLevel) / 3)
      ctx.quadraticCurveTo(0.1, 0, 0.3, Settings.groundLevel - (Settings.groundLevel - Settings.horizonLevel) / 3)
      ctx.lineWidth = 0.003
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      //mountain 5
      ctx.beginPath()
      ctx.moveTo(0.5, Settings.groundLevel)
      ctx.quadraticCurveTo(0.7, 0.2, 0.9, Settings.groundLevel)
      ctx.lineWidth = 0.003
      ctx.stroke()
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }
    else if (this.theme === "beach") {
      ctx.save()
      ctx.translate(0, 0)
      //draw the sky
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the ocean
      ctx.beginPath()
      ctx.fillStyle = this.largeObjectColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.moveTo(0, Settings.horizonLevel)
      ctx.quadraticCurveTo(0.5, Settings.horizonLevel * 0.9, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the beach
      ctx.beginPath()
      ctx.fillStyle = this.groundColor
      ctx.fillRect(0, Settings.groundLevel, 1, 1 - Settings.groundLevel)
      ctx.restore()
    }
    else { // draw "flatlands" by default
      ctx.save()
      ctx.translate(0, 0)
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      ctx.beginPath()
      ctx.fillStyle = this.groundColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.fill()
      ctx.restore()
    }

  }

  /**
   * Creates a background of the specified type
   * @param {String} theme
   */
  static createBackground(theme) {
    return new Background(theme)
  }
}