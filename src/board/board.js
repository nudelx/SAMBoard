import React from 'react'
import Card from '../cards/Card'
// import EnvStatus from '../cards/envStatus'
import Header from '../header/header'
import '../App.css'
import fbConnect from '../firebase/fb_config'

const Board = () => {
  fbConnect()

  return (
    <div className="simple-board">
      <Header title={'master status'}/>

      <Card type="deploys" env="review" />
      <Card type="deploys" env="build" />
      <Card type="installation" env="dev10" />
      <Card type="tests" env="NewDev12" tests />
      <Card type="tests" env="MM_stage" tests />
      <Card type="tests" env="MM_master" tests />

      {/* <Card type="tests" env="review" /> */}

      {/* <EnvStatus title="env" /> */}

    </div>
  )
}

export default Board
