import React, { Component } from 'react'
import '../App.css'
import * as firebase from 'firebase'
import User from './user'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '--',
      date: '--',
      branch: '--',
      tag: '--',
      version: '--',
      timestamp: 0,
      failed: '--',
      passed: '--'
    }
  }

  getFieldsBank() {
    return {
      deploys: ['user', 'branch', 'tag', 'updated', 'date'],
      installation: ['user', 'branch', 'tag', 'version', 'updated', 'date'],
      tests: ['date', 'updated', 'failed', 'passed']
    }
  }

  fieldsOrder() {
    const { type } = this.props
    const bank = this.getFieldsBank()
    return bank[type] || null
  }

  timeAgoTimer() {
    setInterval(() => {
      this.calculateTime()
    }, 1000)
  }

  componentDidMount() {
    const { env, type } = this.props
    if (!type && !env) {
      return
    }
    var db = firebase.database().ref().child(type)
    db.on('value', snap => {
      var data = snap.val()
      if (!data) {
        return
      }
      this.setState({
        user: (data[env] && data[env].user) || 'n/a',
        date: (data[env] && data[env].date) || 'n/a',
        branch: (data[env] && data[env].branch) || 'n/a',
        timestamp: (data[env] && data[env].timestamp) || 0,
        version: (data[env] && data[env].version) || 'n/a',
        tag: (data[env] && data[env].tag) || 'n/a'
      })
    })
    this.timeAgoTimer()
  }

  buildTimeStr(timestamp) {
    var delta = new Date().getTime() / 1000 - timestamp
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    var hrs = Math.floor(delta / 3600) % 24;
    delta -= hrs * 3600;
    var mnts = Math.floor(delta / 60) % 60;
    delta -= mnts * 60;
    var secs = Math.floor(delta % 60);
    return `${days ? `${days}d` : ''} ${hrs ? `${hrs}h` : ''} ${mnts
      ? `${mnts}m`
      : ''} ${secs ? `${secs}s` : ''} ago`
  }

  calculateTime() {
    const { timestamp } = this.state
    if (!timestamp) {
      this.setState({ timeAgo: '--' })
      return
    }
    const timeAgo = this.buildTimeStr(timestamp)
    this.setState({ timeAgo })
  }

  getValue(field) {
    if (field === 'updated') return this.state.timeAgo
    if (field === 'user') return <User user={this.state.user} />
    return this.state[field]
  }

  renderFields() {
    const fields = this.fieldsOrder()
    const { state } = this
    if (!fields) return <li>no such type</li>
    return fields.map(f =>
      <li key={f}>
        <span className="list-key">
          {f}:
        </span>
        <span className="list-val">
          {this.getValue(f)}
        </span>
      </li>
    )
  }

  renderTestsStatus(status) {
    return (
      <div className="st-triangle">
        <div className={`arrow-up-${status}`}>
          <div className="symbol">
            {status === 'fail' ? 'X' : '✓'}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { env, type } = this.props
    const { user, date, branch, timeAgo, tag, version } = this.state
    return (
      <div className="card">
        <div className="card-header">
          {`${type} :: ${env}`}
        </div>
        <div className="card-body">
          <ul>
            {this.renderFields()}
          </ul>
          {type === 'tests' ? this.renderTestsStatus('pass') : null}
        </div>
        {/* <div className="card-footer"> </div> */}
      </div>
    )
  }
}

export default Card
