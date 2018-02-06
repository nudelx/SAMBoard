import React, { Component } from 'react'
import './App.css'
import Board from './board/board'
import TimeCard from './cards/timeCard'
import Notification from './cards/notification'
import BB8 from './cards/bb8'
import Config from './config/config'
import fbConnect from './firebase/fb_config'

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
      enableBB8: false
    }
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

  componentDidMount() {
    activateSelfReboot()
  }

  render() {
    const { enableBB8, enableCarousel } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo-holder">
            <h2 className="brand">Sam</h2>
            <h2 className="brand second">Hub</h2>
          </div>
          <div className="side-right">
            <TimeCard />
          </div>
        </div>
        <div>
          <Board enableCarousel={enableCarousel}/>
          <Notification />
          <BB8 enableBB8={enableBB8}/>
          <Config
            toggleCarousel={this.toggleCarousel}
            toggleBB8={this.toggleBB8}
            enableBB8={enableBB8}
            enableCarousel={enableCarousel}
          />
        </div>
      </div>
    )
  }
}

export default App
