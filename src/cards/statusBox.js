import React from 'react'
import User from './user'

const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return {
    date: date.toString().split(' ').splice(0,3).join(' '),
    time: date.toString().split(' ')[4]
  }
}


 const StatusBox = ({ status, type, user, timestamp}) => {
  const dateObj = timestamp ? formatTime(timestamp*1000) : null
  const staus = (parseInt(status) === 1) ? 'busy' : 'free'
  return (
   <div className="status-box">
     <div className="status-box-header">{type}</div>

     <div className={`env-status ${staus}`}>{timestamp && staus.toUpperCase()}</div>

     <div className={'status-date-box'}>
       <div className={'user-holder'}><User user={user} /></div>
       <div className={'state-date'}>{dateObj && dateObj.date}</div>
       <div className={'state-time'}>{dateObj && dateObj.time}</div>
     </div>
   </div>
 )
}

export default StatusBox
