import React from 'react'
import { ENV_NAMES } from '../tools/envNames'

const DeployerBlock = ({ data, envName }) => {
  data = data || {}
  const { user, deployer } = data[envName] || 0
  return (
    <div className={'statusBlock'}>
      <div className={'st-name'}>{ENV_NAMES[envName]}</div>
      <div className={`st-value busy`}>{deployer || user}</div>
    </div>
  )
}

export default DeployerBlock
