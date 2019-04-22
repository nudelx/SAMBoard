import React from 'react'
import Badge from '../tools/badge'
import BugsBadge from '../tools/bugsBadge'
import { ENV_NAMES } from '../tools/envNames'

const CardHeader = ({ env, bugs, customIcon }) => {
  return (
    <div className={`card-header ${bugs ? 'bugs-style' : ''}`}>
      <div className={'env-name'}>{ENV_NAMES[env] || env}</div>
      {bugs ? <BugsBadge /> : <Badge value={'busy'} />}
    </div>
  )
}

export default CardHeader
