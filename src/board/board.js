import React from 'react';
import Card from '../cards/textCard'
import '../App.css';
import fbConnect from '../firebase/fb_config'

const Board = () => {
  fbConnect()

  return (
    <div className="simple-board">
      <Card type="deploys" env='build'/>
      <Card type="deploys" env='review'/>
      <Card type="installation" env='dev10'/>

      <Card type="Tests" env='review'/>
      <Card type="Tests" env='dev12'/>
    </div>
  )
}

export default Board;
