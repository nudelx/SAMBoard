import React from 'react'
import Card from '../cards/textCard'
import EnvStatus from '../cards/envStatus'
import '../App.css'
import fbConnect from '../firebase/fb_config'

const Board = () => {
  fbConnect()

  return (
    <div className="simple-board">
      <Card type="deploys" env="build" />
      <Card type="deploys" env="review" />
      <Card type="installation" env="dev10" />

      <Card type="tests" env="review" />
      <Card type="tests" env="dev12" />

      <EnvStatus title="env" />

    </div>
  )
}

export default Board
