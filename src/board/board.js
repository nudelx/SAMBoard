import React from 'react'
import Card from '../cards/Card'
import EnvStatus from '../cards/envStatus'
import Header from '../header/header'
import '../App.css'
import fbConnect from '../firebase/fb_config'

const Board = () => {
  fbConnect()

  return (
    <div className="simple-board">
      <Header title={'master status'}/>

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
