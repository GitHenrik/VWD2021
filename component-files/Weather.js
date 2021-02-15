class Weather {
  constructor(weatherComponentList) {
    this.weatherComponentList = weatherComponentList
  }
  draw(ctx) {
    if (this.weatherComponentList.length === 0) {
      return
    }
    for (let i = 0; i < this.weatherComponentList.length; i++) {
      this.weatherComponentList[i].draw(ctx)
    }
  }
  static createWeather(type = "rainy") {
    switch (type) {
      case "rainy":
        //Rainy weather with a pseudo-random amount of raindrops to vary the thickness
        let raindrops = []
        let raindropCount = Settings.RAINDROP_COUNT + Math.floor(Math.random() * 100)
        for (let i = 0; i < raindropCount; i++) {
          raindrops.push(new Raindrop())
        }
        return new Weather(raindrops)
      case "foggy":
        //Foggy weather creates a foggy filter over the elements
        return new Weather([new Fog()])
      case "sunny":
        //sunny weather creates a warm-colored aura
        return new Weather([new Sun()])
      case "clear":
        //Clear weather does not affect the viewport
        return new Weather([])
      default:
        //Clear weather by default
        return new Weather([])
    }
  }
}