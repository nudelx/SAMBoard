import React, { Component } from 'react'
import '../App.css'
import * as firebase from 'firebase'
import User from './user'
import spinner from '../spinner.svg'

const parseThreadField = function(threadsObject) {
  if (!threadsObject || typeof threadsObject === 'string') return 'running'
  const newObj = {}
  Object.keys(threadsObject).map(
    f => (newObj[`t-${f.replace(/[^0-9]/g, '')}`] = threadsObject[f])
  )
  return newObj
}

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
      passed: '--',
      threads: {}
    }
  }

  getFieldsBank() {
    return {
      deploys: ['user', 'branch', 'tag', 'updated', 'date'],
      installation: ['user', 'branch', 'tag', 'version', 'updated', 'date'],
      tests: [
        'date',
        'updated',
        't-1',
        't-2',
        't-3',
        't-4',
        't-5',
        't-6',
        't-7',
        't-8'
      ]
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

  createStateObj(data, env, threads, isPass) {
    return {
      user: (data[env] && data[env].user) || 'n/a',
      date: (data[env] && data[env].date) || 'n/a',
      branch: (data[env] && data[env].branch) || 'n/a',
      timestamp: (data[env] && data[env].timestamp) || 0,
      version: (data[env] && data[env].version) || 'n/a',
      tag: (data[env] && data[env].tag) || 'n/a',
      threads: threads,
      isPass
    }
  }

  componentDidMount() {
    const { env, type } = this.props
    if (!type && !env) {
      return
    }
    var db = firebase.database().ref().child(type)
    db.on('value', snap => {
      let data = snap.val()
      let isPass = 'running'
      if (!data) return
      const threads = (data[env] && parseThreadField(data[env].threads)) || {}
      if (typeof threads === 'object')
        isPass = Object.keys(threads).some(t => parseFloat(threads[t]) > 0)
          ? 'fail'
          : 'pass'
      this.setState(this.createStateObj(data, env, threads, isPass))
    })
    this.timeAgoTimer()
  }

  buildTimeStr(timestamp) {
    var delta = new Date().getTime() / 1000 - timestamp
    var days = Math.floor(delta / 86400)
    delta -= days * 86400
    var hrs = Math.floor(delta / 3600) % 24
    delta -= hrs * 3600
    var mnts = Math.floor(delta / 60) % 60
    delta -= mnts * 60
    var secs = Math.floor(delta % 60)
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
    if (field.indexOf('t-') != -1) {
      return parseFloat(this.state.threads[field])
        ? <span className="fail">
            {this.state.threads[field]}
          </span>
        : <span className="pass">
            {this.state.threads[field] === undefined
              ? <img className="spinner" src={spinner} />
              : '✓'}
          </span>
    }

    return this.state[field]
  }

  renderFields() {
    const fields = this.fieldsOrder()
    const { state } = this
    if (!fields) return <li>no such type</li>
    return (
      <ul>
        {fields.map(f =>
          <li key={f}>
            <span className="list-key">
              {f}:
            </span>
            <span className="list-val">
              {this.getValue(f)}
            </span>
          </li>
        )}
      </ul>
    )
  }

  renderTestsStatus(status) {
    return (
      <div className="st-triangle">
        <div className={`arrow-up-${status}`}>
          <div className="symbol">
            {status === 'fail' ? 'X' : status === 'running' ? '➠' : '✓'}
          </div>
        </div>
        <span className={`st-status-${status}`}>
          {status}
        </span>
      </div>
    )
  }

  render() {
    const { env, type } = this.props
    const { user, date, branch, timeAgo, tag, version, isPass } = this.state
    return (
      <div className="card">
        <div className="card-header">
          {`${type} :: ${env}`}
        </div>
        <div className="card-body">
          {this.renderFields()}
          {type === 'tests' ? this.renderTestsStatus(isPass) : null}
        </div>
      </div>
    )
  }
}

export default Card
