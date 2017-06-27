import React, { Component } from 'react';
import '../App.css';


class TimeCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toString().split(' ').splice(0,3).join(' '),
      time: new Date().toString().split(' ')[4]
    }
  }

  componentDidMount () {
    setInterval( () => {
      this.setState({
        date: new Date().toString().split(' ').splice(0,3).join(' '),
        time: new Date().toString().split(' ')[4]
      })
    }, 1000);
  }

  render () {
    return (
      <div>
        <div className="date">{this.state.date}</div>
        <div className="time">{this.state.time}</div>
      </div>
    )

  }
}




export default TimeCard;
