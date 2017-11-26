import React, { Component } from 'react'
import '../App.css'
import * as firebase from 'firebase'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import TestStatus from './testStatus'
import { getFields } from '../tools/fields'
import { parseThreadField } from '../tools/threadsDataParser'

import { testState } from '../tools/constants'
import FieldsList from './fieldsList'

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
      let isPass = testState.RUN
      if (!data) { data = JSON.parse(localStorage.getItem(type))}
      // localStorage.setItem(type, JSON.stringify(data));
      const threads = (data[env] && parseThreadField(data[env].threads)) || {}
      if (typeof threads === 'object')
        isPass = Object.keys(threads).some(t => parseFloat(threads[t]) > 0)
          ? testState.FAIL
          : testState.PASS
      this.setState(this.createStateObj(data, env, threads, isPass))
    })
  }

  extractDataFromState(type) {
    const fieldsData = getFields(type) || []
    const { timeAgo, threads, timestamp } = this.state
    return fieldsData.reduce(
      (data, f) => {
        data[f] = this.state[f]
        return data
      },
      { timeAgo, threads, timestamp }
    )
  }

  render() {
    const { env, type } = this.props
    const { isPass } = this.state
    const data = this.extractDataFromState(type)
    return (
      <div className="card">
        <CardHeader type={type} env={env} />
        <CardBody isPass={isPass} type={type}>
          <FieldsList type={type} data={data} />
          {type === 'tests' ? <TestStatus status={isPass} /> : null}
        </CardBody>
      </div>
    )
  }
}

export default Card
