class Settings {
  //BASE SETTINGS
  static DRAW_BIRD = true
  static DRAW_WALLS = true
  static DRAW_SCORE = true
  static DRAW_BORDER = true
  static DRAW_CURSOR = true
  static SOUND_ON = false
  static DEATH_ON = true

  //VELOCITY SETTINGS
  static GRAVITY = 0.0005
  static WALL_SPEED = 0.003
  static BG_ELEMENT_SPEED = 0.002

  //CANVAS SETTINGS
  static SIZE = 1000

  //THEME SETTINGS
  //static THEMES = ["flatlands", "mountainous", "metropolis", "glacier", "cavern", "beach"]
  static THEMES = ["flatlands", "mountainous", "beach"]
  static THEME_COUNT = 5
  static currentTheme = ""
  static themeIndex = 0
  static CHANGE_THEME_INTERVAL = 400

  //BACKGROUND SETTINGS
  static groundLevel = 0.45
  static horizonLevel = 0.35

  //BACKGROUND ELEMENT SETTINGS
  static bgElementSize = 0.02

  //BIRD SETTINGS
  static birdRadius = 0.05
  static birdSpeed = -0.005

  //COLOR SETTINGS
  static currentColors = {}

  //OBJECT ARRAYS
  static BIRD = []
  static WALLS = []
  static themeSets = []
}