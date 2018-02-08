import React, { Component } from 'react'
import './App.css'
import Board from './board/board'
import Notification from './cards/notification'
import BB8 from './cards/bb8'
import Config from './config/config'
import fbConnect from './firebase/fb_config'
import AppHeader from './header/appHeader'
import { saveLocalChache,  loadLocalCashe} from './tools/cacheTool'

const activateSelfReboot = () => {
  setTimeout(function() {
    window.location.reload()
  }, 86400000)
}

class App extends Component {

  constructor(props) {
    super(props)
    const local = loadLocalCashe()
    const defaultState = { enableCarousel: true, enableBB8: true, showOnlySlide: 0, totalSlides: 0}
    fbConnect()
    this.state = { ...( local ? local : defaultState) }

    if (!local) {
      saveLocalChache(this.state)
    }
  }

  setShowOnlySlide = value => {
    this.setState({
      showOnlySlide: value
    }, () => saveLocalChache(this.state))
  }

  toggleCarousel = () => {
    this.setState({
      enableCarousel: !this.state.enableCarousel
    }, () => saveLocalChache(this.state))
  }

  toggleBB8 = () => {
    this.setState({
      enableBB8: !this.state.enableBB8
    }, () => saveLocalChache(this.state))
  }

  setTotalSlides = value => {
    this.setState({
      totalSlides: value
    }, () => saveLocalChache(this.state))
  }

  componentDidMount() {
    activateSelfReboot()
  }

  render() {
    const { enableBB8, enableCarousel, totalSlides, showOnlySlide } = this.state
    return (
      <div className="App">
        <AppHeader />
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
          />
        </div>
      </div>
    )
  }
}

export default App
