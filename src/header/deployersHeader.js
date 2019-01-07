import React from 'react'
import DeployerBlock from './deployerBlock'
import * as firebase from 'firebase'

export default class DeployersHeader extends React.Component {
  state = { data: null }
  componentDidMount() {
    firebase.database().ref().child('deployers').on('value', snap => {
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
            <DeployerBlock {...this.state} envName={'mm'} />
          </li>
        </ul>
      </div>
    )
  }
}
