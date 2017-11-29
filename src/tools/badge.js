import React from 'react'

const Badge = ({ value }) => {
  const statusClass = value === 'busy' ? 'badge-red' : 'badge-green'
  return (
    <div className={`badge ${statusClass}`}>
      {value}
    </div>
  )
}
export default Badge
