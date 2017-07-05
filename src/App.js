import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Board from './board/board'
import TimeCard from './cards/timeCard'

const activateSelfReboot = () => {
  setTimeout(function () {
    window.location.reload();
  }, 86400000)
}

class App extends Component {
  componentDidMount() {
    activateSelfReboot()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo-holder">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="brand">SAMBOARD</h2>
          </div>
          <div className="side-right">
            <TimeCard />
          </div>
        </div>
        <div>
          <Board />
        </div>
      </div>
    )
  }
}

export default App
