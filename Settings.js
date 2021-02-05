class Settings {
  //BASE SETTINGS
  static DRAW_BIRD = true
  static DRAW_WALLS = true
  static DRAW_BACKGROUND = true
  static DRAW_BG_ELEMENTS = true
  static DRAW_SCORE = true
  static DRAW_BORDER = true
  static DRAW_CURSOR = true
  static SOUND_ON = true
  static DEATH_ON = true

  //VELOCITY SETTINGS
  static GRAVITY = 0.0005
  static WALL_SPEED = 0.003
  static BG_ELEMENT_SPEED = 0.002

  //CANVAS SETTINGS
  static SIZE = 1000

  //BACKGROUND SETTINGS
  static bgIndex = 0
  static CHANGE_BACKGROUND_INTERVAL = 400
  static groundLevel = 0.3

  //BACKGROUND ELEMENT SETTINGS
  static BG_ELEMENT_SETS = 5
  static bgElementIndex = 0
  static CHANCE_OF_ELEMENT = 0.7

  //BIRD SETTINGS
  static birdRadius = 0.05
  static birdSpeed = -0.005

  //COLOR SETTINGS
  static currentColors = []

  //OBJECT ARRAYS
  static BIRD = []
  static WALLS = []
  static BACKGROUNDS = []
  static BG_ELEMENTS = []
}