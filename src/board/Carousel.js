import React, {Component} from 'react'

class Carousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slidesCount: props.children({}).length,
      showIndex: 0,
      windowWidth: 0,
      timer: null,
      offSet:50,
      timerValue: 30000
    }
  }

  enableTimer ( ) {
    const timer = setInterval(() => {
      this.setState({showIndex: (this.state.showIndex +1 ) % this.state.slidesCount})
    }, this.state.timerValue)
    return timer
  }

  componentDidMount(props) {
    const { enableCarousel } = this.props
    if (!enableCarousel) return
    const timer = this.enableTimer()
    this.setState({timer})
    this.props.setTotalSlides(this.state.slidesCount)
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.enableCarousel !== this.props.enableCarousel) {
      if ( nextProps.enableCarousel ) {
        const timer = this.enableTimer()
        this.setState({timer})
        console.log('Carousel enable timer')
      } else {
        console.log('Carousel disable timer')
        clearInterval(this.state.timer)
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  render() {
    const { children } = this.props
    const { showIndex } = this.state
    const startMargin = this.refs.slideClosure ? this.refs.slideClosure.offsetWidth : 0
    const margin = -1*( startMargin * showIndex)
    return (<ul className='carousel' ref='slideClosure'>{children({ showIndex, margin })}</ul>)
  }
}

export default Carousel
