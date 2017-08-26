import React from 'react'
import Card from '../cards/Card'
import InstallationCard from '../cards/InstallationCard'
import BuildCard from '../cards/BuildCard'
import EnvStatus from '../cards/envStatus'
import '../App.css'
import fbConnect from '../firebase/fb_config'

const Board = () => {
  fbConnect()

  return (
    <div className="simple-board">
      <InstallationCard type="installation" env="dev10" />
      <BuildCard type="deploys" env="build" />

      <Card type="installation" env="dev10" />
      <Card type="deploys" env="build" />
      <Card type="deploys" env="review" />

      <Card type="tests" env="review" />
      <Card type="tests" env="dev12" />

      <EnvStatus title="env" />

    </div>
  )
}

export default Board
