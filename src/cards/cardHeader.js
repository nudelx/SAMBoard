import React from 'react'
import Badge from '../tools/badge'
import BugsBadge from '../tools/bugsBadge'

const CardHeader = ({ type, env, bugs }) => {
  return (
    <div className={`card-header ${bugs ? 'bugs-style' : ''}`}>
      <div className={'env-name'}>{env}</div>
      {bugs ? <BugsBadge /> : <Badge value={'busy'} />}
    </div>
  )
}

export default CardHeader
