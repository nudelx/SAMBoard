import React, { Component } from 'react'
import '../App.css'
import * as firebase from 'firebase'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import { getFields } from '../tools/fields'
import User from './user'

class BuildCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '--',
      date: '--',
      branch: '--',
      tag: '--',
    }
  }

  createStateObj(data, env) {
    return {
      user: (data[env] && data[env].user) || 'n/a',
      date: (data[env] && data[env].date) || 'n/a',
      branch: (data[env] && data[env].branch) || 'n/a',
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

      this.setState(this.createStateObj(data, env))
    })
  }

  extractDataFromState(type) {
    const fieldsData = getFields(type) || []
    return fieldsData.reduce(
      (data, field) => {
        data[field] = this.state[field]
        return data
      },
      {}
    )
  }

  renderField(field, data) {
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
    const { env, type } = this.props
    const data = this.extractDataFromState(type)
    return (
      <div className="card">
        <CardHeader type={type} env={env} />
        <CardBody type={type}>
          <ul>
            <li key={'user'}>
              <User user={data.user} date={data.date} />
            </li>
            {this.renderField('branch', data)}
            {this.renderField('tag', data)}
          </ul>
        </CardBody>
      </div>
    )
  }
}

export default BuildCard
