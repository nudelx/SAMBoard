import React, {Component} from 'react'

class Carousel extends Component {
  constructor (props) {
    super(props)
    this.offSet = 50
    this.timerValue = 30000
    this.state = {
      slidesCount: props.children({}).length,
      showIndex: 0,
      windowWidth: 0
    }
  }

  componentDidMount(props) {
    const timer = setInterval(() => {
      this.setState({showIndex: (this.state.showIndex +1 ) % this.state.slidesCount})
    }, this.timerValue)

    this.setState({timer})
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  render() {
    const { children } = this.props
    const { showIndex } = this.state
    const margin = -1*((this.refs.slideClosure.offsetWidth - this.offSet) * showIndex)
    return (<ul className='carousel' ref='slideClosure'>{children({ showIndex, margin })}</ul>)
  }
}

export default Carousel
