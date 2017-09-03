import React, { Component } from 'react'
import '../App.css'
import * as firebase from 'firebase'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import User from './user'
import TestThreads from './testThreads'
import { parseThreadField } from '../tools/threadsDataParser'
import { testState } from '../tools/constants'

class CardNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '--',
      date: '--',
      branch: '--',
      tag: '--',
      version: '--',
      threads: {}
    }
  }

  createStateObj(data, env, threads) {
    return {
      user: (data[env] && data[env].user) || 'n/a',
      date: (data[env] && data[env].date) || 'n/a',
      branch: (data[env] && data[env].branch) || 'n/a',
      version: (data[env] && data[env].version) || 'n/a',
      tag: (data[env] && data[env].tag) || 'n/a',
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
      if (!data) return

      var db1 = firebase.database().ref().child('tests')
      db1.on('value', snap => {
        let testsData = snap.val()
        let isPass = testState.RUN

        const threads = (testsData[env] && parseThreadField(testsData[env].threads)) || {}
        if (typeof threads === 'object')
          isPass = Object.keys(threads).some(t => parseFloat(threads[t]) > 0)
            ? testState.FAIL
            : testState.PASS
        this.setState({ threads: threads, isPass })
      })
      // const threads = (data[env] && parseThreadField(data[env].threads)) || {}
      // this.setState(this.createStateObj(data, env, threads))
      this.setState(this.createStateObj(data, env))
    })
  }

  extractDataFromState(type) {
    const fieldsData = this.props.fields || []
    const { threads } = this.state
    return fieldsData.reduce(
      (data, field) => {
        data[field] = this.state[field]
        return data
      },
      { threads }
    )
  }

  renderUser(user, date) {
    if (user)
      return (
        <li key={'user'}>
          <User user={user} date={date} />
        </li>
      )
  }

  renderField(field, data) {
    if (data[field])
      return (
        <li key={field}>
          <span className="list-key">
            {field}:
          </span>
          <span className="list-val">
            {data[field]}
          </span>
        </li>
      )
  }

  render() {
    const { env, type, tests } = this.props
    const data = this.extractDataFromState(type)
    return (
      <div className="card">
        <CardHeader env={env} />
        <CardBody>
          <ul>
            {this.renderUser(data.user, data.date)}
            {this.renderField('branch', data)}
            {this.renderField('tag', data)}
            {this.renderField('version', data)}
          </ul>
        </CardBody>
        {tests && <TestThreads threads={data.threads}/>}
      </div>
    )
  }
}

export default CardNew
