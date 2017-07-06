import React from 'react'

const CardBody = ({ isPass, type, children }) => {
  return (
    <div className="card-body">
      <ul>
        {children}
      </ul>
    </div>
  )
}

export default CardBody
