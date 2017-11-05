import React from 'react'

const StatusBlock = ({ status, envName }) => {
  const classStatus =  status ? 'busy' : 'free'
  const displaName = status ? 'dirty' : 'clean'
  return (
    <div className={'statusBlock'}>
      <div className={'st-name'}>{envName}</div>
      <div className={`st-value ${classStatus}`}>{displaName}</div>
    </div>
  )
}

export default StatusBlock
