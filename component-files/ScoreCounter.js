class ScoreCounter {

  static drawScorecounter(ctx) {
    // lisää tälle joku taustaneliö ja sen päälle vasta pisteet
    ctx.save()
    ctx.fillStyle = "white"
    ctx.globalAlpha = 0.2
    ctx.fillRect(0.05, 0.04, 0.35, 0.078) // läpinäkyvä taustaneliö
    ctx.globalAlpha = 1.0
    ctx.fillStyle = "black"
    ctx.translate(0, 0)
    ctx.font = "0.6px Arial"
    ctx.scale(0.5, 0.10)
    ctx.fillText("Score: ", 0.09, 1, 0.6) // Score teksti
    ctx.fillText(Math.floor(GlobalVariables.currentScore / 100), 0.65, 1.01, 0.11) // Pisteet
    ctx.restore()
  }
}