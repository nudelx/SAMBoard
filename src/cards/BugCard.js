import React from 'react'
import axios from 'axios'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
// import Emoji from '../tools/emoji'
import TestLoadingBox from '../tests/testLoadingBox'
const bugsLevel = {
  1: '😃',
  2: '😕',
  3: '😱'
}

export default class extends React.Component {
  state = {
    total: null,
    data: null,
    const: {
      GOOD: 5,
      BAD: 10,
      BUGS_URL: 'https://nudel-proxy-node.herokuapp.com/',
      SSF_PREFIX: 'SSF',
      SSP_PREFIX: 'SSP'
    }
  }

  getData = () => {
    const { type } = this.props
    const { BUGS_URL, SSF_PREFIX, SSP_PREFIX } = this.state.const
    axios
      .get(`${BUGS_URL}${type === 'SSP' ? SSP_PREFIX : SSF_PREFIX}`)
      .then(resp =>
        this.setState({ total: resp.data.Items.length, data: resp.data.Items })
      )
  }
  componentDidMount() {
    this.getData()
  }

  getLevel(value) {
    const { GOOD, BAD } = this.state.const
    return value < GOOD ? 1 : value >= GOOD && value <= BAD ? 2 : 3
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
              <div className="level">{bugsLevel[level]}</div>
            </div>
          )}
        </CardBody>
      </div>
    )
  }
}

// where=(Tags contains '*block*')and(EntityState.Name not contains  'Code')and(EntityState.Id ne '174')and(EntityState.Id ne  '225')and(EntityState.Name not contains  '*Deploy*')and(EntityState.Name not contains  '*Design*')and(EntityState.Name not contains  '*Live*')and(Project.Name contains 'SSF')&take=100
