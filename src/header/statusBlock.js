import React from 'react'
import { ENV_NAMES } from '../tools/envNames'

const StatusBlock = ({ data, envName }) => {
  data = data || {}
  const { dirty, user } = data[envName] || 0
  const classStatus = dirty ? 'busy' : 'free'
  const displayStatus = dirty ? 'dirty' : 'clean'
  const displayUser = user
  return (
    <div className={'statusBlock'}>
      <div className={'st-name'}>{ENV_NAMES[envName]}</div>
      <div className={`st-value ${classStatus}`}>{displayStatus}</div>
      {dirty && <div className={'st-user busy'}>{displayUser}</div>}
    </div>
  )
}

export default StatusBlock
