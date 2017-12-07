import React from 'react'
import StatusBlock from './statusBlock'
import * as firebase from 'firebase'

export default class Header extends React.Component {
  state = { data: null }
  componentDidMount() {
    const db = firebase
      .database()
      .ref()
      .child('master_status')

    db.on('value', snap => {
      let data = snap.val()
      this.setState({ data })
    })
  }

  render() {
    const { title } = this.props

    return (
      <div className={'header'}>
        <ul className={'header-list'}>
          <li className={'main-title'}> {title} </li>
          <li>
            <StatusBlock {...this.state} envName={'cmdb'} />
          </li>
          <li>
            <StatusBlock {...this.state} envName={'esd'} />
          </li>
          <li>
            <StatusBlock {...this.state} envName={'mm'} />
          </li>
        </ul>
      </div>
    )
  }
}
