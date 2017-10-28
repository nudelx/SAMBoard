import React from 'react'
// import Card from '../cards/Card'
import CardNew from '../cards/CardNew'
import { getFields } from '../tools/fields'
// import EnvStatus from '../cards/envStatus'
import '../App.css'
import fbConnect from '../firebase/fb_config'

const Board = () => {
  fbConnect()

  return (
    <div className="simple-board">
      <CardNew type="installation" env="dev10" fields={getFields("installation")} />
      {/* <CardNew type="deploys" env="build" fields={getFields("deploys")} /> */}
      <CardNew type="deploys" env="review" tests={true} fields={getFields("deploys")} />
      <CardNew type="tests" env="dev12" tests={true} fields={getFields("installation")} />


      {/* <CardNew type="tests" env="review" tests={true} fields={getFields("tests")} /> */}

      {/* <Card type="installation" env="dev10" />
      <Card type="deploys" env="build" /> */}
      {/* <Card type="deploys" env="review" /> */}

      {/* <Card type="tests" env="review" />
      <Card type="tests" env="dev12" />

      <EnvStatus title="env" /> */}
    </div>
  )
}

export default Board
