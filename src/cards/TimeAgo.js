import React, { Component} from 'react'
import { buildTimeStr } from '../tools/timeStampParser'

export default class TimeAgo extends Component {

  state = {timeAgo: '--'}

  calculateTime() {
    const { timestamp } = this.props
    if (timestamp) {
      const timeAgo = buildTimeStr(timestamp)
      this.setState({ timeAgo })
    }
  }

  timeAgoTimer() {
    setInterval(() => {
      this.calculateTime()
    }, 1000)
  }

  componentDidMount() {
    this.timeAgoTimer()
  }

  render () {
    return (<span>{this.state.timeAgo}</span>)
  }

}
