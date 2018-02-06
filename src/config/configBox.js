import React from 'react'

const ConfigBox = ({
  onClose,
  toggleCarousel,
  toggleBB8,
  enableCarousel,
  enableBB8
}) => {
  return (
    <div className="config-box">
      <div className={'close'} onClick={onClose}>
        X
      </div>
      <div className={'config-header'}>{'Configuration'}</div>
      <div className={'basic-config-box'}>
        <div className="cfg-row">
          <label htmlFor="enableCarousel">Enable Carousel</label>
          <input
            name="enableCarousel"
            onChange={toggleCarousel}
            checked={enableCarousel}
            id="enableCarousel"
            type="checkbox"
          />
        </div>

        <div className="cfg-row">
          <label htmlFor="enableBB-8">Enable BB-8</label>
          <input
            id="enableBB-8"
            onChange={toggleBB8}
            checked={enableBB8}
            name="enableBB-8"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  )
}

export default ConfigBox
