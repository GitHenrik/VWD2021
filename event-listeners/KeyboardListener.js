class KeyboardListener {
  static keyPressed(key) {

    if (key.code === "KeyW") {
      //	flySound.stop()
      // soittaa koko ääniraidan loppuun -> pitäisi toteuttaa niin että joka painalluksella aloittaa soittamaan ääntä alusta
      if (Settings.SOUND_ON)
        flySound.play()
      fly()
    }
    if (key.code === "KeyR") {
      resetGame()
      //something.play()
    }
    // if (key.code === "Space") {
    //   destroyWall()
    //   something.play()
    // }
  }
  // function destroyWall() {
  // 	//tuhoa seinä jos se on tarpeeksi lähellä
  // 	for (let i = 0; i < 2; i++) {
  // 		if (!WALLS[i]) {
  // 			return null
  // 		}
  // 		WALLS[i].solid = false
  // 	}
  // }
}