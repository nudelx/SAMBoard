import React, { Component } from 'react'
import Badge from '../tools/badge'
import BugsBadge from '../tools/bugsBadge'
import { fetch_env_names } from "../tools/envNames"

export default class CardHeader extends Component {
  state = { envs: {}, fetched: false }

  componentDidMount() {
    fetch_env_names(this.handleEnvs);
  }

  handleEnvs = (envs) => {
    this.setState({ envs, fetched: true })
  }

  render() {
    const { env, bugs } = this.props
    const { envs, fetched } = this.state
    return (
      <div className={`card-header ${bugs ? "bugs-style" : ""}`}>
        <div className={"env-name"}>{fetched ? (envs[env] || env) : ''}</div>
        {bugs ? <BugsBadge /> : <Badge value={"busy"} />}
      </div>
    );
  }
}
