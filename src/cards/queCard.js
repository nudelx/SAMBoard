import React from 'react'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import axios from 'axios'
import TestLoadingBox from '../tests/testLoadingBox'
import Emoji from '../tools/emoji'

export default class extends React.Component {
  state = { data: null }
  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axios
      .get(`http://localhost:8585/`)
      .then(resp => this.setState({ data: resp.data.queues.queue }))
  }

  nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' }
    ]
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    var i
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
  }

  renderStats(stats) {
    const keys = stats && Object.keys(stats._attributes)
    return keys.map(k => (
      <ul key={k}>
        <li>
          <span>{k}</span>
          <span>
            {stats._attributes[k] > 1000
              ? this.nFormatter(stats._attributes[k], 5)
              : stats._attributes[k]}
          </span>
        </li>
      </ul>
    ))
  }

  render() {
    const { data } = this.state
    return (
      <div className="card">
        <CardHeader env={'que'} customIcon />
        <CardBody>
          {data ? (
            <div className="queue-stat-view">
              {data.map(c => (
                <div className="stats-row">
                  <div className="test-header">
                    <Emoji i={'📪'} /> {c._attributes.name}
                  </div>
                  <div>{this.renderStats(c.stats)}</div>
                </div>
              ))}
            </div>
          ) : (
            <TestLoadingBox />
          )}
        </CardBody>
      </div>
    )
  }
}
