import React, { Component } from 'react'
import './App.css'
import Board from './board/board'
import TimeCard from './cards/timeCard'
import Notification from './cards/notification'
import BB8 from './cards/bb8'
import Config from './config/config'
import fbConnect from './firebase/fb_config'
import AppHeader from './header/appHeader'

const activateSelfReboot = () => {
  setTimeout(function() {
    window.location.reload()
  }, 86400000)
}

class App extends Component {
  constructor(props) {
    super(props)
    fbConnect()
    this.state = {
      enableCarousel: true,
      enableBB8: false,
      showOnlySlide: 0,
      totalSlides: 0
    }
  }

  setShowOnlySlide = value => {
    this.setState({
      showOnlySlide: value
    })
  }

  toggleCarousel = () => {
    this.setState({
      enableCarousel: !this.state.enableCarousel
    })
  }

  toggleBB8 = () => {
    this.setState({
      enableBB8: !this.state.enableBB8
    })
  }

  setTotalSlides = value => {
    this.setState({
      totalSlides: value
    })
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
