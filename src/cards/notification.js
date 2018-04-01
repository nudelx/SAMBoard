import React, { Component } from 'react'

export default class Notification extends Component {
  state = { samboardKey: 'samboardKey', show: false }

  activateSlide() {
    setTimeout(() => {
      this.setState({ fxClass: 'n-msg-slide' })
    }, 2000)
  }

  activateSelfKill() {
    setTimeout(() => {
      this.setState({ show: false })
    }, 10000)
  }

  componentDidMount() {
    const { samboardKey } = this.state
    const ver = require('../vesrion_data.json')
    const old = JSON.parse(localStorage.getItem(samboardKey)) || {}
    if (ver.version && ver.version !== old.version) {
      this.setState({ show: true, ver })
      localStorage.setItem(samboardKey, JSON.stringify(ver))
      this.activateSlide()
      this.activateSelfKill()
    }
  }

  render() {
    const { ver, show, fxClass } = this.state
    return show ? (
      <div className={`n-msg ${fxClass ? fxClass : ''}`}>
        <div className="n-msg-header">
          {`${ver.type} - Build(${new Date(
            parseInt(ver.version,10)
          ).toLocaleDateString()})`}
        </div>
        <div className="n-msg-body">{ver.description}</div>
      </div>
    ) : null
  }
}
