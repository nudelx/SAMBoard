import React, { Component } from 'react'

class BB8 extends Component{
  state = { runValue: -100, timer: null, schedule:null }

  componentDidMount(props) {
    this.props.enableBB8 && this.applyForNewRun()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.enableBB8 !== this.props.enableBB8) {
      if ( nextProps.enableBB8 ) {
        this.applyForNewRun()
        console.log('enable bb8')
      } else {
        clearTimeout(this.state.schedule)
        clearInterval(this.state.timer)
        console.log('disable bb8')
      }
    }
  }

  getRandom() {
    return Math.floor(Math.random() * 30) + 1
  }

  applyForNewRun() {
    const timerSchedule = setTimeout(() => {
      this.run()
    }, this.getRandom() * 60000 )
    return timerSchedule
  }
  
  run() {
    const timer = setInterval(() => {
      this.refs.bb8.style.marginRight = this.state.runValue + 'px'
      this.setState({runValue: this.state.runValue + 2 }, () => {
        if (this.state.runValue > window.outerWidth + 100) {
          clearInterval(this.state.timer)
          const schedule = this.applyForNewRun()
          this.setState({runValue: -100, timer: null, schedule })
        }
      })
    }, 5)

    this.setState({ timer })
  }

  render () {
    const { enableBB8 } = this.props
    const { timer } = this.state
    if (!timer || !enableBB8) return null
    return (
      <div ref={'bb8'} className="move-bb8">
        <div className="bb8"></div>
      </div>
    )
  }
}

export default BB8
