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
      timestamp: 0
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

  calculateTime() {
    const { timestamp } = this.state
    if (!timestamp) {
      this.setState({ timeAgo: '--' })
      return
    }
    const delta = new Date().getTime() / 1000 - timestamp
    const days = Math.floor(delta / (3600 * 24))
    const hrs = Math.floor(delta / 3600)
    const mnts = Math.floor((delta - hrs * 3600) / 60)
    const secs = Math.floor(delta - hrs * 3600 - mnts * 60)
    const timeAgo = `${days ? `${days}d` : ''} ${hrs ? `${hrs}h` : ''} ${mnts
      ? `${mnts}m`
      : ''} ${secs ? `${secs}s` : ''} ago`
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
        <span className="list-key">{f}:</span>
        <span className="list-val">{this.getValue(f)}</span>
      </li>
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
            {/* <li>
              <span className="list-key">User:</span>
              <span className="list-val"><User user={user} /></span>
            </li>
            <li>
              <span className="list-key">Branch:</span>
              <span className="list-val">{branch}</span>
            </li>
            <li>
              <span className="list-key">Tag:</span>
              <span className="list-val">{tag}</span>
            </li>
            <li>
              <span className="list-key">Version:</span>
              <span className="list-val">{version}</span>
            </li>
            <li>
              <span className="list-key">Updated:</span>
              <span className="list-val">{timeAgo}</span>
            </li>
            <li>
              <span className="list-key">Date:</span>
              <span className="list-val">{date}</span>
            </li> */}
          </ul>
        </div>
        {/* <div className="card-footer"> </div> */}
      </div>
    )
  }
}

export default Card
