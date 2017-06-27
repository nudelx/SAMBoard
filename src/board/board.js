import React from 'react';
import Card from '../cards/textCard'
import '../App.css';
import fbConnect from '../firebase/fb_config'

const Board = () => {
  fbConnect()

  return (
    <div className="simple-board">
      <Card type="deploys" env='build'/>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Board;
