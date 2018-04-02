import React, { Component } from 'react'

class Weather extends Component {
  state = {
    key: '259587a13998d2d0de3f461165765f2c',
    url: 'https://api.openweathermap.org/data/2.5/weather?'
  }

  getLocation() {
    const { lat, lon, customGeolocation } = this.props
    return new Promise((yes, no) => {
      if (customGeolocation) {
        yes({ coords: { latitude: lat, longitude: lon } })
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            pos => yes(pos)
          )
        } else {
          console.log('Geolocation is not supported by this browser.')
          alert(
            'Geolocation is not supported by this browser. You can use custom latitude: 32.276979, longitude: 34.8590267 '
          )
        }
      }
    })
  }

  getWeather = () => {
    const { url, key, coords: { latitude, longitude } } = this.state
    const URL = `${url}appid=${key}&lat=${latitude}&lon=${longitude}&units=metric`
    fetch(URL)
      .then(r => r.json())
      .then(forecast => this.setState({ forecast }))
  }

  temperatureConverter(valNum) {
    valNum = parseFloat(valNum)
    return (valNum - 32) / 1.8
  }

  componentWillMount() {
    this.getLocation()
      .then(data =>
        setTimeout(
          () => this.setState({ coords: data.coords }, this.getWeather),
          0
        )
      )
      .catch(error => console.log(error))

    setInterval(this.getWeather, 3600000)
  }

  render() {
    const { forecast } = this.state
    const { name, weather, main } = forecast || {}
    return forecast ? (
      <div className="icon-weather">
        <div className={`w-icon icon-${weather[0].icon}`} />
        <div className="w-data">
          <div className="w-temp">{`${Math.ceil(main.temp)}c`}</div>
          <div className="w-text">
            <div>{weather[0].main}</div>
            <div>{name}</div>
          </div>
        </div>
      </div>
    ) : null
  }
}

export default Weather
