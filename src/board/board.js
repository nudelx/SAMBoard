import React from 'react'
import Card from '../cards/Card'
import Carousel from './Carousel'
import Slide from './Slide'
import Header from '../header/header'
import '../App.css'
import BugCard from '../cards/BugCard'

const Board = ({ enableCarousel, setTotalSlides, showOnlySlide }) => {
  return (
    <div className="simple-board">
      <Header title={'master status'} />
      <Carousel
        showOnlySlide={showOnlySlide}
        enableCarousel={enableCarousel}
        setTotalSlides={setTotalSlides}
      >
        {({ showIndex, margin }) => {
          return [
            <Slide style={{ marginLeft: margin }} key="1">
              <Card type="deploys" env="review" />
              <Card type="deploys" env="build" />
              <Card type="installation" env="dev10" />
              <Card type="tests" env="NewDev12" tests />
              <Card type="tests" env="CMDB" tests />
            </Slide>,
            <Slide key="2">
              <Card type="tests" env="MM_auto2" tests />
              <Card type="tests" env="MM_us" tests />
              <Card type="tests" env="MM_eu" tests />
              <Card type="ssp_deploy" env="deployers" />
            </Slide>,

            <Slide key="3">
              <BugCard type="SSP_BLOCK" env="SSP BLOCKERS" />
              <BugCard type="SSF_BLOCK" env="SSF BLOCKERS" />
              <BugCard type="SSF_ALL" env="SSF BUGS IN QUEUE" />
              <BugCard type="SSP_ALL" env="SSP BUGS IN QUEUE" />
            </Slide>
          ]
        }}
      </Carousel>
    </div>
  )
}

export default Board
