import React from 'react'
import axios from 'axios'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
// import Emoji from '../tools/emoji'
import TestLoadingBox from '../tests/testLoadingBox'

export default class extends React.Component {
  state = {
    total: null,
    data: null,
    constLinks: {
      SMILE: 1,
      SAD: 2,
      HYSTERICAL: 3,
      BLOCK_GOOD: 5,
      BLOCK_BAD: 10,
      QUE_GOOD: 60,
      QUE_BAD: 80,
      BUGS_URL: 'https://nudel-proxy-node.herokuapp.com/',
      SSF_BLOCK: 'SSF',
      SSP_BLOCK: 'SSP',
      SSP_ALL: 'SSP-ALL',
      SSF_ALL: 'SSF-ALL'
    }
  }

  getData = () => {
    const { type } = this.props
    const { constLinks } = this.state
    const { BUGS_URL } = constLinks
    axios
      .get(`${BUGS_URL}${constLinks[type]}`)
      .then(resp =>
        this.setState({ total: resp.data.Items.length, data: resp.data.Items })
      )
  }
  componentDidMount() {
    this.getData()
    this.timer = setInterval(() => {
      this.getData()
    }, 1800000)
  }

  componentWillMount() {
    clearInterval(this.timer)
  }
  getLevel(value) {
    const { type } = this.props
    const { constLinks, SMILE, SAD, HYSTERICAL } = this.state
    const { SMILE, SAD, HYSTERICAL } = constLinks
    const [_GOOD, _BAD] = type.match(/BLOCK/gi)
      ? [constLinks.BLOCK_GOOD, constLinks.BLOCK_BAD]
      : [constLinks.QUE_GOOD, constLinks.QUE_BAD]

    return value < _GOOD
      ? SMILE
      : value >= _GOOD && value <= _BAD
      ? SAD
      : HYSTERICAL
  }
  render() {
    const { env, type } = this.props
    const { total } = this.state
    const level = this.getLevel(total || 0)
    return (
      <div className="card">
        <CardHeader env={env} type={type} bugs />

        <CardBody>
          {total === null ? (
            <TestLoadingBox />
          ) : (
            <div className="bugs-stat-view">
              <div className={`number color-bugs-${level}`}>{total}</div>
              <div className={`level emoji-level-${level}`} />
            </div>
          )}
        </CardBody>
      </div>
    )
  }
}
