class ScoreCounter {

  static drawScorecounter(ctx, points) {
    // lisää tälle joku taustaneliö ja sen päälle vasta pisteet
    ctx.save()
    ctx.translate(0, 0)
    ctx.font = "0.6px Arial"
    ctx.scale(0.5, 0.10)
    ctx.fillText("Score: " + points, 0.75, 1, 0.6)
    ctx.restore()
  }
}