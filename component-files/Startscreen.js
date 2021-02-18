function startScreen() {
    let canvas = document.getElementById("main-canvas")
    let ctx = canvas.getContext("2d")
    ctx.save()
    ctx.fillStyle = "#43c399"
    ctx.fillRect(0, 0, 1, 1)
    ctx.translate(0, 0)
    ctx.fillStyle = "black"
    ctx.font = "1px Arial"
    ctx.scale(0.5, 0.10)
    ctx.fillText("FLYING BIRD", 0.69, 1, 0.6) // Flying bird teksti
    ctx.fillText("Press R to run the game", 0.55, 2.5, 0.85) // Flying bird teksti
    ctx.restore()

}   
