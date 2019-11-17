import React, { Component } from 'react'
import { fetch_env_names } from "../tools/envNames";

export default class StatusBlock extends Component {
  state = { envs: {} }

  componentDidMount() {
    fetch_env_names(this.handleEnvs)
  }

  handleEnvs = (envs) => {
    this.setState({ envs })
  }

  render() {
    const { data, envName } = this.props
    const stateData = data || {}
    const { dirty, user } = stateData[envName] || 0;
    const classStatus = dirty ? 'busy' : 'free'
    const displayStatus = dirty ? 'dirty' : 'clean'
    const displayUser = user
    return (
      <div className={'statusBlock'}>
        <div className={'st-name'}>{this.state.envs[envName]}</div>
        <div className={`st-value ${classStatus}`}>{displayStatus}</div>
        {dirty && <div className={'st-user busy'}>{displayUser}</div>}
      </div>
    )
  }
}
