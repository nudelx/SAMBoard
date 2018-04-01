import React from 'react'
import TimeCard from '../cards/timeCard'
import Weather from '../cards/weather'
const AppHeader = () => {
  return (
    <div className="App-header">
      <div className="logo-holder">
        <h2 className="brand">Sam</h2>
        <h2 className="brand second">Hub</h2>
      </div>
      <div className="side-right">
        <Weather />
        <TimeCard />
      </div>
    </div>
  )
}

export default AppHeader
