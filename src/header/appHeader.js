import React from 'react'
import TimeCard from '../cards/timeCard'

const AppHeader = () => {
  return (
    <div className="App-header">
      <div className="logo-holder">
        <h2 className="brand">Sam</h2>
        <h2 className="brand second">Hub</h2>
      </div>
      <div className="side-right">
        <TimeCard />
      </div>
    </div>
  )
}

export default AppHeader
