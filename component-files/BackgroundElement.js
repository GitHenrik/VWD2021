
class BackgroundElement {
  /**
   * A container component for drawing background elements and handling their reappearance on the screen
   * @param {Array} elementList List of elements to be drawn to the background
   */
  constructor(elementList) {
    this.elementList = elementList
  }
  draw(ctx) {
    //lists may be empty in random cases, in which case they are simply not drawn.
    for (let i = 0; i < this.elementList.length; i++) {
      this.elementList[i].draw(ctx)
      this.elementList[i].x -= this.elementList[i].speed
      if (this.elementList[i].x < 0 - this.elementList[i].size) {
        this.elementList[i].x = 1 + this.elementList[i].size
      }
    }
  }
}

function createBackgroundElement() {
  //randomize which elements this distinct background set has
  const includeRocks = Math.random() > Settings.CHANCE_OF_ELEMENT ? false : true
  const includePlants = Math.random() > Settings.CHANCE_OF_ELEMENT ? false : true
  let rockList = []
  let plantList = []

  if (includeRocks) {
    let rockCount = 8 + Math.ceil(Math.random() * 12) // random amount of elements, at least some
    const types = ["arced", "bumpy", "irregular"]
    let points = []
    let edges = 5 + Math.ceil(Math.random() * 7)
    let size = 0.01 + Math.random() / 33
    for (let i = 0; i < rockCount; i++) {

      let type = types[Math.floor(Math.random() * types.length)]
      if (type === "arced") {
        points = null
      }
      if (type === "bumpy") {
        points = Polygons.createPolygonPoints(edges, size, true)
      }
      if (type === "irregular") {
        points = Polygons.createPolygonPoints(edges, size, true, true)
      }

      rockList.push(new Rock(Colors.randomGrayColor(), points, size))
      //randomize properties for the next rock
      edges = 5 + Math.ceil(Math.random() * 7)
      size = 0.01 + Math.random() / 33
    }
  }
  if (includePlants) {
    let plantCount = 20 + Math.ceil(Math.random() * 20) // // random amount of elements, at least some
    const types = ["dead", "round", "triangular", "bush", "grass"]
    for (let i = 0; i < plantCount; i++) {
      let nextColor = Settings.currentColors[Math.floor(Math.random() * Settings.currentColors.length)]
      let type = types[Math.floor(Math.random() * types.length)]
      plantList.push(new Plant(nextColor, type))
    }
  }

  //combine all elements for this backgroundElement object, and sort them to render correctly "behind" each other
  let elementList = rockList.concat(plantList)
  elementList.sort((current, next) => current.y - next.y)

  Settings.BG_ELEMENTS.push(new BackgroundElement(elementList))
}