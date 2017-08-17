import React, { Component } from 'react'
import * as firebase from 'firebase'
import User from './user'
import StatusBox from './statusBox'

class EnvStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'tests',
      junction: 'availability',
      who: '--',
      timestamp: null,
      availability: {}
    }
  }

  componentDidMount() {
    const { type, junction } = this.state
    const db = firebase.database().ref().child(type)
    db.on('value', snap => {
      const { availability } = snap.val()
      this.setState({ availability })
    })
  }

  renderEnvStatuses() {
    const { envs } = this.props
  }

  render() {
    const { title } = this.props
    const { who, timestamp, status, availability } = this.state
    return (
      <div className="card">
        <div className="card-header">
          {`${title} :: STATUS`}
        </div>
        <div className="card-body">
          {Object.keys(availability).map(env =>
            <StatusBox
              type={env}
              key={env}
              user={availability[env].who || '--'}
              {...availability[env]}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EnvStatus
