class Settings {
  //BASE SETTINGS
  static DRAW_BIRD = true
  static DRAW_WALLS = true
  static DRAW_SCORE = true
  static DRAW_BORDER = true
  static DRAW_CURSOR = true
  static DRAW_HIGHSCORE = true
  static SOUND_ON = false

  static DEATH_ON = true
  static DRAW_WEATHER = true

  //VELOCITY SETTINGS
  static GRAVITY = 0.0005
  static WALL_SPEED = 0.003
  static BG_ELEMENT_SPEED = 0.002

  //CANVAS SETTINGS
  static SIZE = 1000

  //THEME SETTINGS
  //static THEMES = ["flatlands", "mountainous", "metropolis", "glacier", "cavern", "beach"]
  static THEMES = ["flatlands", "mountainous", "beach"]
  static themeSets = []
  static currentTheme = ""
  static themeIndex = Math.floor(Math.random() * Settings.themeSets.length)
  static CHANGE_THEME_INTERVAL = 400

  //WEATHER SETTINGS
  static WEATHER_TYPES = ["clear", "rainy", "foggy", "sunny"]
  static WEATHER_COUNT = 20
  static weathers = []
  static weatherIndex = 0
  static RAINDROP_COUNT = 100
  static FOG_HEIGHT = 1.2
  static SUN_STRENGTH = 1.5

  //BACKGROUND SETTINGS
  static groundLevel = 0.45
  static horizonLevel = Settings.groundLevel - 0.1

  //BACKGROUND ELEMENT SETTINGS
  static bgElementSize = 0.02

  //BIRD SETTINGS
  static birdRadius = 0.05
  static birdSpeed = -0.005

  static birdEyeColor = "red"
  static birdBodyColor = "blue"
  static birdBeakColor = "orange"

  //COLOR SETTINGS
  static currentColors = {}

  //OBJECT ARRAYS
  static BIRD = []
  static WALLS = []


}