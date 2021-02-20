class Background {
  constructor(theme = "flatlands") {
    this.skyColor = Settings.currentColors.skyColor
    this.groundColor = Settings.currentColors.groundColor
    this.largeObjectColor = Settings.currentColors.largeObjectColor
    this.effectColor = Settings.currentColors.effectColor
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
    }
    else if (this.theme === "mountainous") {
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
      //draw ships
      ctx.save()
      ctx.beginPath()
      ctx.fillStyle = "#FFFFFF"
      ctx.lineWidth = 0.01
      ctx.translate(0.7, (Settings.horizonLevel + Settings.groundLevel) / 2)
      //draw a sail
      ctx.moveTo(0, 0)
      ctx.lineTo(0.07, 0)
      ctx.quadraticCurveTo(0.1, -0.12, 0, -0.15)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.strokeStyle = "brown"
      ctx.moveTo(0.02, 0)
      ctx.lineTo(0.02, 0.02)
      ctx.stroke()
      ctx.beginPath()
      ctx.lineWidth = 0.005
      ctx.fillStyle = "brown"
      ctx.moveTo(-0.05, 0.02)
      ctx.lineTo(0.1, 0.02)
      ctx.quadraticCurveTo(0, 0.05, -0.05, 0.02)
      ctx.fill()
      ctx.restore()
      //draw the beach
      ctx.beginPath()
      let fillGradient = ctx.createLinearGradient(0, Settings.groundLevel, 0, 1)
      fillGradient.addColorStop(0, this.groundColor)
      fillGradient.addColorStop(1, this.effectColor)
      ctx.fillStyle = fillGradient
      ctx.fillRect(0, Settings.groundLevel, 1, 1 - Settings.groundLevel)
      ctx.restore()
    }
    else if (this.theme === "icy") {
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
    }
    else if (this.theme === "city") {
      ctx.save()
      ctx.translate(0, 0)
      //draw the sky
      ctx.beginPath()
      ctx.fillStyle = this.skyColor
      ctx.rect(0, 0, 1, Settings.horizonLevel)
      ctx.fill()
      //draw the ground
      ctx.beginPath()
      ctx.fillStyle = this.groundColor
      ctx.rect(0, Settings.horizonLevel, 1, 1 - Settings.horizonLevel)
      ctx.moveTo(0, Settings.horizonLevel)
      ctx.quadraticCurveTo(0.5, Settings.horizonLevel * 0.9, 1, Settings.horizonLevel)
      ctx.fill()
      //draw buildings
      ctx.beginPath()
      ctx.lineWidth = 0.002
      ctx.fillStyle = this.largeObjectColor
      ctx.strokeStyle = this.effectColor
      ctx.translate(0, Settings.groundLevel)
      //back building
      ctx.beginPath()
      ctx.rect(-0.1, 0, 0.2, -0.25)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.2, 0, 0.15, -0.2)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.37, 0, 0.1, -0.17)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.42, 0, 0.08, -0.13)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.45, 0, 0.15, -0.26)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.7, 0, 0.12, -0.21)
      ctx.fill()
      ctx.stroke()
      //back building
      ctx.beginPath()
      ctx.rect(0.87, 0, 0.11, -0.23)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.08, 0, 0.2, -0.14)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.3, 0, 0.12, -0.09)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.62, 0, 0.12, -0.1)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.55, 0, 0.14, -0.06)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.8, 0, 0.12, -0.09)
      ctx.fill()
      ctx.stroke()
      //front building
      ctx.beginPath()
      ctx.rect(0.95, 0, 0.07, -0.15)
      ctx.fill()
      ctx.stroke()
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