class Settings {
  //BASE SETTINGS
  static DRAW_BIRD = true
  static DRAW_WALLS = true
  static DRAW_BACKGROUND = true
  static DRAW_BG_ELEMENTS = true
  static DRAW_SCORE = true
  static DRAW_BORDER = true
  static DRAW_CURSOR = true
  static SOUND_ON = false
  static DEATH_ON = true
  static SIZE = 1000
  static CHANGE_BACKGROUND = 400
  static BG_ELEMENT_SETS = 5
}

const BIRD = []
const WALLS = []
const BACKGROUNDS = []
const BG_ELEMENTS = []

//BIRD SETTINGS
let birdRadius = 0.05
let birdSpeed = 0.001

//BACKGROUND SETTINGS
let bgIndex = 0
let bgElementIndex = 0
let groundLevel = 0.6

// kursorin sijainti (tarviiko oikeaastaan olla missään muualla kuin event listenerissä..?)
let mouseX = 500
let mouseY = 500
//-------- aluksi 1 piste, ettei heti jakojäännös ole 0-------
let points = 1
//60hz screen
let gravity = 0.0005
let wallSpeed = 0.003
//144hz screen
//let gravity = 0.0005 * 0.416
//let wallSpeed = 0.003 * 0.416
let animationId // tarvitsee resettiin. Muuten tulee duplikaatteja -> sairaan nopee

//Current color scheme for the game
let currentColors = []

//sounds
let hitFloorSound = null
let hitWallSound = null
let flySound = null

if (Settings.SOUND_ON) {
  hitFloorSound = new Audio("audio-files/auts.aac")
  hitWallSound = new Audio("audio-files/pum.aac")
  //flySound = new Audio("audio-files/wings.wav")
  flySound = new Audio("audio-files/sfx_wing.mp3")
}