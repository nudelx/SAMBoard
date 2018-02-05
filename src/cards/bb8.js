import React, { Component } from 'react'

class BB8 extends Component{
  state = { runValue: 100, timer: null }

  componentDidMount() {
    this.run()
  }

  getRandom() {
    return Math.floor(Math.random() * 30) + 1
  }

  applyForNewRun() {
    setTimeout(() => {
      this.run()
    }, this.getRandom() * 60000)
  }

  run() {
    const timer = setInterval(() => {
      this.refs.bb8.style.marginRight = this.state.runValue + 'px'

      this.setState({runValue: this.state.runValue + 2 }, () => {
        if (this.state.runValue > window.outerWidth + 100) {
          clearInterval(this.state.timer)
          this.setState({runValue: -100, timer: null })
          this.applyForNewRun()
        }
      })
    }, 5)

    this.setState({ timer })
  }

  render () {
    const { timer } = this.state
    // if (! timer) return null
    return (
      <div ref={'bb8'} className="move-bb8">
        <div className="bb8"></div>
      </div>
    )
  }
}

export default BB8
