class Settings {
  //BASE SETTINGS
  static DRAW_BIRD = true
  static DRAW_WALLS = true
  static DRAW_SCORE = true
  static DRAW_BORDER = true
  static DRAW_CURSOR = true
  static DRAW_HIGHSCORE = true
  static SOUND_ON = false

  static DEATH_ON = false
  static DRAW_WEATHER = true

  //VELOCITY SETTINGS
  static GRAVITY = 0.0005
  static WALL_SPEED = 0.003
  static BG_ELEMENT_SPEED = 0.002

  //CANVAS SETTINGS
  static SIZE = 1000

  //THEME SETTINGS
  //static THEMES = ["flatlands", "mountainous", "city", "glacier", "cavern", "beach"]
  static THEMES = ["icy", "flatlands", "mountainous", "beach", "city"]
  static themeSets = []
  static themeIndex = 0
  static CHANGE_THEME_INTERVAL = 400

  //WEATHER SETTINGS
  static WEATHER_TYPES = ["clear", "rainy", "foggy", "sunny"]
  static SUN_STRENGTH = 1.2
  static randomWeather = "clear"

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

  //OBJECTS
  static BIRD = []
  static WALLS = []

}