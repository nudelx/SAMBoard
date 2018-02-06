import React, { Component } from 'react'
import ConfigBox from './configBox'

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
    const { toggleCarousel, toggleBB8, enableBB8, enableCarousel } = this.props
    return (
      <div>
        <div className="config-button" onClick={this.setActive} />
        {active && (
          <ConfigBox
            toggleCarousel={toggleCarousel}
            toggleBB8={toggleBB8}
            onClose={this.setActive}
            enableBB8={enableBB8}
            enableCarousel={enableCarousel}
          />
        )}
      </div>
    )
  }
}

export default Config
