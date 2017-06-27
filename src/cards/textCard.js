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
    var db = firebase.database().ref().child(type);
    console.log(db)
    db.on('value', snap => {
      var data = snap.val()
      if (!data ) { return }
      this.setState({
        user: data[env] && data[env].user || 'n/a',
        date: data[env] && data[env].date || 'n/a'
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
