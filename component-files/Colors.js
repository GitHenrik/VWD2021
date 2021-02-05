class Colors {
  static createColorPalette() {
    let baseColors = ["blue", "red", "green", "yellow"]
    let selectedColor = baseColors[Math.floor(Math.random() * baseColors.length)]
    let colorPalette = []
    switch (selectedColor) {
      case "red":
        for (let i = 1; i <= 3; i++) {
          colorPalette.push(Colors.getRGBColor(i * 60, 0, 0))
        }
        return colorPalette
      case "green":
        for (let i = 1; i <= 3; i++) {
          colorPalette.push(Colors.getRGBColor(0, i * 60, 0))
        }
        return colorPalette
      case "blue":
        for (let i = 1; i <= 3; i++) {
          colorPalette.push(Colors.getRGBColor(0, 0, i * 60))
        }
        return colorPalette
      case "yellow":
        for (let i = 1; i <= 3; i++) {
          colorPalette.push(Colors.getRGBColor(i * 60, i * 60, 0))
        }
        return colorPalette
      default: //defaults to green colors
        for (let i = 1; i <= 3; i++) {
          colorPalette.push(Colors.getRGBColor(0, i * 60, 0))
        }
        return colorPalette
    }
  }

  static randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return ("rgba(" + r + "," + g + "," + b + ",1)")
  }

  static randomGrayColor() {
    /**
   * Returns a random grayscale color between RGB values of 50-150
   */
    let grayLevel = 50 + Math.random() * 100
    return ("rgba(" + grayLevel + "," + grayLevel + "," + grayLevel + ",1)")
  }

  static getRGBColor(r, g, b) {
    return ("rgba(" + r + "," + g + "," + b + ",1)")
  }
}