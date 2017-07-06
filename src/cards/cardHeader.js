import React from 'react'

const CardHeader = ({ type, env }) => {
  return (
    <div className="card-header">
      {`${type} :: ${env}`}
    </div>
  )
}

export default CardHeader
