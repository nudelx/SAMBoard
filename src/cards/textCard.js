import React, { Component } from 'react'
import '../App.css';
import * as firebase from 'firebase'

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '--',
      date: '--'
    }
  }

  componentDidMount () {
    const { env , type } = this.props
    if (!type && !env) { return; }
    var deploys = firebase.database().ref().child(type);
    deploys.on('value', snap => {
      var deploys = snap.val()
      this.setState({
        user: deploys[env].user || 'n/a',
        date: deploys[env].date || 'n/a'
      })
    })
  }

  render () {
    const { env , type } = this.props
    const { user, date } = this.state
    return  (
      <div className="card">
        <div className="card-header">
          {`${type} :: ${env}`}
        </div>
        <div className="card-body">
          <ul>
            <li><span className="list-key">User:</span><span className="list-val">{user}</span></li>
            <li><span className="list-key">Date:</span><span className="list-val">{date}</span></li>
          </ul>
        </div>
        {/* <div>footer</div> */}
      </div>
    )
  }
}

export default Card
