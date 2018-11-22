import React from 'react'
import Emoji from './emoji'
const Badge = () => {
  return (
    <div className={`badge`}>
      <Emoji i={'🐞'} className="badge-bugs" />
    </div>
  )
}
export default Badge
