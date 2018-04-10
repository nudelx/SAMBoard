import React, { Component } from 'react'
import './App.css'
import Board from './board/board'
import Notification from './cards/notification'
import BB8 from './cards/bb8'
import Config from './config/config'
import fbConnect from './firebase/fb_config'
import AppHeader from './header/appHeader'
import { saveLocalCache,  loadLocalCashe} from './tools/cacheTool'


const activateSelfReboot = () => {
  setTimeout(() => {
    window.location.reload()
  }, 86400000)
}

class App extends Component {

  constructor(props) {
    super(props)
    fbConnect()
    const local = loadLocalCashe()
    const defaultState = { enableCarousel: true, enableBB8: true, showOnlySlide: 0, totalSlides: 0, customGeolocation: false, lat:0, lon:0}
    this.state = { ...( local ? local : defaultState) }
    if (!local) {  saveLocalCache(this.state) }
  }

  toggleCustomGeolocation = () => {
    this.setState({
      customGeolocation: !this.state.customGeolocation
    }, () => saveLocalCache(this.state))
  }

  setShowOnlySlide = value => {
    this.setState({
      showOnlySlide: value
    }, () => saveLocalCache(this.state))
  }

  toggleCarousel = () => {
    this.setState({
      enableCarousel: !this.state.enableCarousel
    }, () => saveLocalCache(this.state))
  }

  toggleBB8 = () => {
    this.setState({
      enableBB8: !this.state.enableBB8
    }, () => saveLocalCache(this.state))
  }

  setTotalSlides = value => {
    this.setState({
      totalSlides: value
    }, () => saveLocalCache(this.state))
  }

  setLatOrLong = type => value => {
    this.setState({
      [type]: value
    }, () => saveLocalCache(this.state))
  }

  componentDidMount() {
    activateSelfReboot()
  }

  render() {
    const { enableBB8, enableCarousel, totalSlides, showOnlySlide,  customGeolocation, lat, lon
} = this.state
    return (
      <div className="App">
        <AppHeader lat={lat} lon={lon} customGeolocation={customGeolocation}/>
        <div>
          <Board
            enableCarousel={enableCarousel}
            setTotalSlides={this.setTotalSlides}
            showOnlySlide={showOnlySlide}
          />
          <Notification />
          <BB8 enableBB8={enableBB8} />
          <Config
            toggleCarousel={this.toggleCarousel}
            toggleBB8={this.toggleBB8}
            enableBB8={enableBB8}
            enableCarousel={enableCarousel}
            setShowOnlySlide={this.setShowOnlySlide}
            totalSlides={totalSlides}
            showOnlySlide={showOnlySlide}
            toggleCustomGeolocation={this.toggleCustomGeolocation}
            customGeolocation={customGeolocation}
            lat={lat}
            lon={lon}
            setLat={this.setLatOrLong('lat')}
            setLon={this.setLatOrLong('lon')}
          />
        </div>
      </div>
    )
  }
}

export default App
