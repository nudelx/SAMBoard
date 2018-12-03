import React from 'react'
import { ENV_NAMES } from '../tools/envNames'

const StatusBlock = ({ data, envName }) => {
  data = data || {}
  const { dirty } = data[envName] || 0
  const classStatus = dirty ? 'busy' : 'free'
  const displaName = dirty ? 'dirty' : 'clean'
  return (
    <div className={'statusBlock'}>
      <div className={'st-name'}>{ENV_NAMES[envName]}</div>
      <div className={`st-value ${classStatus}`}>{displaName}</div>
    </div>
  )
}

export default StatusBlock
