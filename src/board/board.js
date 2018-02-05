import React from 'react'
import Card from '../cards/Card'
import Carousel from './Carousel'
import Slide from './Slide'
import Header from '../header/header'
import '../App.css'
import fbConnect from '../firebase/fb_config'

const Board = () => {
  fbConnect()

  return (
    <div className="simple-board">
      <Header title={"master status"} />
      <Carousel>
        {
          ({ showIndex, margin }) => {
            console.log('index', showIndex, margin)
            return ([
              <Slide style={{marginLeft: margin}} key='1'>
                <Card type="deploys" env="review" />
                <Card type="deploys" env="build" />
                <Card type="installation" env="dev10" />
                <Card type="tests" env="NewDev12" tests />
                <Card type="tests" env="CMDB" tests />
              </Slide>,
              <Slide key='2'>
                <Card type="tests" env="MM_stage" tests />
                <Card type="tests" env="MM_master" tests />
                <Card type="tests" env="MM_eu" tests />
              </Slide>
            ])
          }
        }
      </Carousel>
    </div>
  )
}

export default Board
