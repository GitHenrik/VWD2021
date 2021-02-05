
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