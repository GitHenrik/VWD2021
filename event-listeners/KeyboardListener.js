class KeyboardListener {
  static keyPressed(key) {
    if (key.code === "KeyW") {
      if (!Settings.DRAW_BIRD) {
        return null
      }
      if (Settings.SOUND_ON) {
        // Sounds.flySound.play()
        Sounds.playSoundFly()
      }
      Settings.BIRD[0].fly()
    }
    if (key.code === "KeyR") {
      resetGame()
    }
  }
}