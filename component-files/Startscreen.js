function startScreen() {
    let canvas = document.getElementById("main-canvas")
    let ctx = canvas.getContext("2d")
    ctx.save()
    ctx.globalAlpha = 0.2
    //draw a scene on the background
    Settings.themeSets[Settings.themeIndex].draw(ctx)

    if (Settings.DRAW_BORDER) {
        Border.drawBorder(ctx)
    }

    ctx.translate(0, 0)
    ctx.globalAlpha = 1.0
    ctx.fillStyle = "black"
    ctx.font = "bold 1px Arial"
    ctx.scale(0.5, 0.10)
    ctx.fillText("FLYING BIRD", 0.69, 3.3, 0.6)
    ctx.font = "1px Arial"
    ctx.fillText("Press R to run the game", 0.55, 5.2, 0.85)

    ctx.scale(0.7, 0.7)
    ctx.fillText("Press W to fly", 0.95, 8.8, 0.85)
    ctx.scale(1.1, 1.1)
    ctx.fillText("Left-click to destroy obstacles", 0.7, 9, 1.15)
    ctx.restore()
}


