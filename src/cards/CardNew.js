import React, { Component } from 'react'
import '../App.css'
import * as firebase from 'firebase'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import User from './user'
import TestsBody from './testsBody'
import TestThreads from './testThreads'
import { parseThreadField } from '../tools/threadsDataParser'
import { testState } from '../tools/constants'
import TestsStatus from './testsStatus'

class CardNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '--',
      date: '--',
      branch: '--',
      tag: '--',
      version: '--',
      threads: {},
      testDate: '--',
      testsStatus: '--'
    }
  }

  createStateObj(data, threads, testDate, testsStatus) {
    return {
      user: (data && data.user) || 'n/a',
      date: (data && data.date) || 'n/a',
      branch: (data && data.branch) || 'n/a',
      version: (data && data.version) || 'n/a',
      tag: (data && data.tag) || 'n/a',
      threads: threads,
      testDate: testDate,
      testsStatus: testsStatus,
    }
  }

  componentDidMount() {
    const { env, type } = this.props
    if (!type && !env) {
      return
    }
    var db = firebase.database().ref()
    db.on('value', snap => {
      let data = snap.val()[type][env]
      if (!data) return

      let testsData = snap.val()['tests'][env]

      let testsStatus = testState.RUN
      const threads = (testsData && parseThreadField(testsData.threads)) || {}
      if (typeof threads === 'object')
        testsStatus = Object.keys(threads).some(t => parseFloat(threads[t]) > 0)
          ? testState.FAIL
          : testState.PASS
      this.setState(this.createStateObj(data, threads, testsData && testsData.date, testsStatus))
    })
  }

  extractDataFromState(type) {
    const fieldsData = this.props.fields || []
    const { threads, testDate, testsStatus } = this.state
    return fieldsData.reduce(
      (data, field) => {
        data[field] = this.state[field]
        return data
      },
      { threads, testDate, testsStatus }
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
        {tests && <TestsBody>
          <TestsStatus status={data.testsStatus}/>
          <div className='test-date'>{data.testDate}</div>
          <TestThreads threads={data.threads}/>
        </TestsBody>}
      </div>
    )
  }
}

export default CardNew
