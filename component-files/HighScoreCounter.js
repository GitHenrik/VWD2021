class HighScoreCounter {

    static drawHighScore(ctx) {
        // lisää tälle joku taustaneliö ja sen päälle vasta pisteet
        ctx.save()
        ctx.fillStyle = "white"
        ctx.globalAlpha = 0.2
        ctx.fillRect(0.60, 0.04, 0.35, 0.078) // läpinäkyvä taustaneliö
        ctx.globalAlpha = 1.0
        ctx.fillStyle = "black"
        ctx.translate(0, 0)
        ctx.font = "0.6px Arial"
        ctx.scale(0.5, 0.10)
        ctx.fillText("Highscore: ", 1.20, 1, 0.6) // Score teksti
        ctx.fillText(sessionStorage.getItem("highScore"), 1.76, 1.01, 0.11) // Pisteet
        ctx.restore()
    }
}