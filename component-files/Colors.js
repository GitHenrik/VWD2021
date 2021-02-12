class Colors {
  static createColorPalette(theme) {
    //instantiate color palette with flatlands colors
    let colorPalette = {
      skyColor: "#A2D6F9",
      groundColor: "#7DD181",
      plantColors: ["#4B7F52", "#96E8BC"],
      largeObjectColor: "gray"
    }
    switch (theme) {
      case "flatlands":
        return colorPalette
      case "mountainous":
        colorPalette = {
          skyColor: "#C4B7CB",
          groundColor: "#BBC7CE",
          plantColors: ["#BFEDEF", "#98E2C6"],
          largeObjectColor: "#545C52"
        }
        return colorPalette
      case "beach":
        colorPalette = {
          skyColor: "#1E96FC",
          groundColor: "#FCF300",
          plantColors: ["#FFC600"],
          largeObjectColor: "#072AC8"
        }
      //   colorPalette.push("#072AC8")
      //   colorPalette.push("#1E96FC")
      //   colorPalette.push("#A2D6F9")
      //   colorPalette.push("#FCF300")
      //   colorPalette.push("#FFC600")
      //   return colorPalette
      default:
        return colorPalette
    }
  }

  static randomColor(opacity = 1) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return ("rgba(" + r + "," + g + "," + b + "," + opacity + ")")
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