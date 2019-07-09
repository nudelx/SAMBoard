import React, { Component } from 'react'
import '../App.css'
import * as firebase from 'firebase'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import { getFields } from '../tools/fields'
import { parseThreadField } from '../tools/threadsDataParser'
import { testState } from '../tools/constants'
import TestsBody from '../tests/testsBody'
import DeployList from '../cards/deployList'
import FieldsList from '../cards/fieldsList'

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
      threadsRunning: {},
      browsers: {}
    }
  }

  createStateObj(data, env, browsers, threadsRunning, status) {
    return {
      user: (data[env] && data[env].user) || 'n/a',
      date: (data[env] && data[env].date) || 'n/a',
      branch: (data[env] && data[env].branch) || 'n/a',
      timestamp: (data[env] && data[env].timestamp) || 0,
      version: (data[env] && data[env].version) || 'n/a',
      tag: (data[env] && data[env].tag) || 'n/a',
      threadsRunning,
      [env]: data,
      status
    }
  }

  testsRunning(threads) {
    return Object.keys(threads).some(t => threads[t])
  }

  testsFailed(browsers) {
    return Object.keys(browsers).some(browser => browsers[browser].failed > 0)
  }

  componentDidMount() {
    const { env, type } = this.props
    if (!type && !env) {
      return
    }
    var db = firebase
      .database()
      .ref()
      .child(type)
    db.on('value', snap => {
      let data = snap.val()
      let status = testState.RUN
      if (!data) {
        data = JSON.parse(localStorage.getItem(type))
      }
      // localStorage.setItem(type, JSON.stringify(data));
      const browsers =
        (data && data[env] && parseThreadField(data[env].browsers)) || {}
      const threadsRunning = (data[env] && data[env].threads_running) || {}
      if (
        !this.testsRunning(threadsRunning) &&
        Object.keys(browsers).length > 0
      )
        status = this.testsFailed(browsers) ? testState.FAIL : testState.PASS
      this.setState(
        this.createStateObj(data, env, browsers, threadsRunning, status)
      )
    })
  }

  extractDataFromState(type) {
    const fieldsData = getFields(type) || []
    const { browsers, threadsRunning, timestamp } = this.state
    return fieldsData.reduce(
      (data, f) => {
        data[f] = this.state[f]
        return data
      },
      { browsers, threadsRunning, timestamp }
    )
  }

  render() {
    const { env, type, tests } = this.props
    const { status, deployers } = this.state
    const data = this.extractDataFromState(type)
    return (
      <div className="card">
        <CardHeader type={type} env={env} />
        <CardBody>
          {env === 'deployers' ? (
            deployers && <DeployList deployers={deployers} />
          ) : (
            <FieldsList type={type} data={data} />
          )}
        </CardBody>
        {tests && (
          <TestsBody
            browsers={data.browsers}
            threadsRunning={data.threadsRunning}
            date={new Date(data.timestamp * 1000)}
            status={status}
          />
        )}
      </div>
    )
  }
}

export default Card
