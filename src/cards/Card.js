import React, { Component } from 'react'
import '../App.css'
import * as firebase from 'firebase'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import { getFields } from '../tools/fields'
import { parseThreadField } from '../tools/threadsDataParser'
import { testState } from '../tools/constants'
import FieldsList from './fieldsList'
import TestsBody from './testsBody'

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

  createStateObj(data, env, threads, status) {
    return {
      user: (data[env] && data[env].user) || 'n/a',
      date: (data[env] && data[env].date) || 'n/a',
      branch: (data[env] && data[env].branch) || 'n/a',
      timestamp: (data[env] && data[env].timestamp) || 0,
      version: (data[env] && data[env].version) || 'n/a',
      tag: (data[env] && data[env].tag) || 'n/a',
      threads,
      status
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
      let status = testState.RUN
      if (!data) { data = JSON.parse(localStorage.getItem(type))}
      // localStorage.setItem(type, JSON.stringify(data));
      const threads = (data[env] && parseThreadField(data[env].threads)) || {}
      if (typeof threads === 'object' && Object.keys(threads).length > 0)
        status = Object.keys(threads).some(t => parseFloat(threads[t]) > 0)
          ? testState.FAIL
          : testState.PASS
      this.setState(this.createStateObj(data, env, threads, status))
    })
  }

  extractDataFromState(type) {
    const fieldsData = getFields(type) || []
    const { threads, timestamp } = this.state
    return fieldsData.reduce(
      (data, f) => {
        data[f] = this.state[f]
        return data
      },
      { threads, timestamp }
    )
  }

  render() {
    const { env, type, tests } = this.props
    const { status } = this.state
    const data = this.extractDataFromState(type)
    return (
      <div className="card">
        <CardHeader type={type} env={env} />
        <CardBody>
          <FieldsList type={type} data={data} />
        </CardBody>
        {tests && <TestsBody threads={data.threads} date={new Date(data.timestamp * 1000)} status={status} />}
      </div>
    )
  }
}

export default Card
