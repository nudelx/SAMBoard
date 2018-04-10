import React, { Component } from 'react'
import ConfigBox from './configBox'
import BurgerButton from './burgerButton'
class Config extends Component {
  state = {
    active: false,
    enableCarousel: true,
    enableBB8: false
  }

  setActive = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { active } = this.state
    const {
      toggleCarousel,
      toggleBB8,
      enableBB8,
      enableCarousel,
      totalSlides,
      setShowOnlySlide,
      showOnlySlide,
      toggleCustomGeolocation,
      lat,
      lon,
      customGeolocation,
      setLat,
      setLon
    } = this.props
    return (
      <div>
        <BurgerButton onClick={this.setActive} />
        {active && (
          <ConfigBox
            toggleCarousel={toggleCarousel}
            toggleBB8={toggleBB8}
            onClose={this.setActive}
            enableBB8={enableBB8}
            enableCarousel={enableCarousel}
            totalSlides={totalSlides}
            showOnlySlide={showOnlySlide}
            setShowOnlySlide={setShowOnlySlide}
            toggleCustomGeolocation={toggleCustomGeolocation}
            lat={lat}
            lon={lon}
            customGeolocation={customGeolocation}
            setLat={setLat}
            setLon={setLon}
          />
        )}
      </div>
    )
  }
}

export default Config
