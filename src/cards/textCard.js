import React, { Component } from 'react'
import '../App.css';
import * as firebase from 'firebase'
import User from './user'

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '--',
      date: '--',
      branch: '--',
      tag: '--',
      timestamp: 0
    }
  }

  timeAgoTimer () {
    setInterval( () => {
      this.calculateTime()
    },1000)
  }

  componentDidMount () {
    const { env , type } = this.props
    if (!type && !env) { return; }
    var db = firebase.database().ref().child(type);
    db.on('value', snap => {
      var data = snap.val()
      if (!data ) { return }
      this.setState({
        user: data[env] && data[env].user || 'n/a',
        date: data[env] && data[env].date || 'n/a',
        branch: data[env] && data[env].branch || 'n/a',
        timestamp: data[env] && data[env].timestamp || 0
      })

    })
    this.timeAgoTimer()
  }

  calculateTime () {
    const { timestamp } = this.state
    if (!timestamp) { this.setState({ timeAgo: '--' }); return }
    const delta  = new Date().getTime()/1000 - timestamp
    var days = Math.floor(delta / (3600*24));
    var hrs  = Math.floor(delta / 3600);
    var mnts = Math.floor((delta - (hrs * 3600)) / 60);
    var secs = Math.floor(delta - (hrs * 3600) - (mnts * 60));
    const timeAgo = `${(days ? `${days}d`: '')} ${(hrs ? `${hrs}h`: '')} ${(mnts ? `${mnts}m`: '')} ${(secs ? `${secs}s`: '')} ago`;
    this.setState({ timeAgo });
  }

  render () {
    const { env, type } = this.props
    const { user, date, branch, timeAgo, tag } = this.state
    return  (
      <div className="card">
        <div className="card-header">
          {`${type} :: ${env}`}
        </div>
        <div className="card-body">
          <ul>
            <li><span className="list-key">User:</span><span className="list-val"><User user={user} /></span></li>
            <li><span className="list-key">Branch:</span><span className="list-val">{branch}</span></li>
            <li><span className="list-key">Tag:</span><span className="list-val">{tag}</span></li>
            <li><span className="list-key">Updated:</span><span className="list-val">{timeAgo}</span></li>
            <li><span className="list-key">Date:</span><span className="list-val">{date}</span></li>
          </ul>
        </div>
        {/* <div className="card-footer"> </div> */}
      </div>
    )
  }
}

export default Card
