import React from 'react'
import Badge from './badge'

const CardHeader = ({ type, env }) => {
  console.log('render header')
  return (
    <div className="card-header">
      <div className={'env-name'}>{env}</div>
      <Badge value={'busy'} />
    </div>
  )
}

export default CardHeader
