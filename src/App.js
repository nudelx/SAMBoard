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
  const now = new Date()
  const night = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0)
  const msToMidnight = night.getTime() - now.getTime()

  setTimeout(() => {
    window.location.reload()
  }, msToMidnight)
}

class App extends Component {

  constructor(props) {
    super(props)
    fbConnect()
    const local = loadLocalCashe()
    const defaultState = { enableCarousel: true, enableBB8: true, showOnlySlide: 0, totalSlides: 0}
    this.state = { ...( local ? local : defaultState) }
    if (!local) {  saveLocalCache(this.state) }
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
