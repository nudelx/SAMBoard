import React from 'react'

export default class FullScreen extends React.Component {
  state = {
    fullScreen: null
  }
  closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen()
    }

    this.setState(() => ({
      fullScreen: false
    }))
  }

  fullScreen = () => {
    const body = document.querySelector('body')
    if (body.requestFullscreen) {
      body.requestFullscreen()
    } else if (body.mozRequestFullScreen) {
      /* Firefox */
      body.mozRequestFullScreen()
    } else if (body.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      body.webkitRequestFullscreen()
    } else if (body.msRequestFullscreen) {
      /* IE/Edge */
      body.msRequestFullscreen()
    }

    this.setState(() => ({
      fullScreen: true
    }))
  }

  run = () =>
    this.state.fullScreen ? this.closeFullscreen() : this.fullScreen()

  render() {
    return (
      <div onClick={this.run} className="full-screen">
        ❖
      </div>
    )
  }
}
