import React, { Component } from 'react'
import '../App.css'
import * as firebase from 'firebase'
import User from './user'
import spinner from '../spinner.svg'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import TestStatus from './testStatus'
import { getFields } from '../tools/fields'
import { parseThreadField } from '../tools/threadsDataParser'
import { buildTimeStr } from '../tools/timeStampParser'

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

  calculateTime() {
    const { timestamp } = this.state
    if (!timestamp) {
      this.setState({ timeAgo: '--' })
      return
    }
    const timeAgo = buildTimeStr(timestamp)
    this.setState({ timeAgo })
  }

  getValue(field) {
    if (field === 'updated') return this.state.timeAgo
    if (field === 'user') return <User user={this.state.user} />
    if (field.indexOf('thread') !== -1) {
      return parseFloat(this.state.threads[field])
        ? <span className="fail">
            {this.state.threads[field]}
          </span>
        : <span className="pass">
            {this.state.threads[field] === undefined
              ? <img alt="spinner" className="spinner" src={spinner} />
              : '✓'}
          </span>
    }

    return this.state[field]
  }

  renderFields() {
    const { type } = this.props
    const fields = getFields(type)
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

  render() {
    const { env, type } = this.props
    const { isPass } = this.state
    return (
      <div className="card">
        <CardHeader type={type} env={env} />
        <CardBody isPass={isPass} type={type}>
          {this.renderFields()}
          {type === 'tests' && <TestStatus status={isPass} />}
        </CardBody>
      </div>
    )
  }
}

export default Card
