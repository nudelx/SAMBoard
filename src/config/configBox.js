import React from 'react'
import ConfigRow from './configRow'
import Buttons from './buttons'

const makeOptions = value => {
  const arr = []
  for (let i = 0; i < value; i++) {
    arr.push(i)
  }
  return arr
}

const ConfigBox = ({
  onClose,
  toggleCarousel,
  toggleBB8,
  enableCarousel,
  enableBB8,
  totalSlides,
  setShowOnlySlide,
  showOnlySlide,
  toggleCustomGeolocation,
  lat,
  lon,
  customGeolocation,
  setLat,
  setLon
}) => {
  return (
    <div className="config-box">
      <div className={'config-header'}>{'Configuration'}</div>
      <div className={'basic-config-box'}>
        <ConfigRow>
          <label htmlFor="enableCarousel">Enable Carousel</label>
          <input
            name="enableCarousel"
            onChange={toggleCarousel}
            checked={enableCarousel}
            id="enableCarousel"
            type="checkbox"
          />
        </ConfigRow>

        <ConfigRow>
          <label
            className={enableCarousel ? 'opacity' : ''}
            htmlFor="onlySlide">
            Show Only
          </label>
          <select
            onChange={e => setShowOnlySlide(e.target.selectedIndex)}
            id="onlySlide"
            name="onlySlide"
            disabled={enableCarousel}
            value={showOnlySlide}>
            {makeOptions(totalSlides).map(item => (
              <option key={item} value={item}>{`Slide ${item}`}</option>
            ))}
          </select>
        </ConfigRow>

        <ConfigRow>
          <label htmlFor="enableBB-8">Enable BB-8</label>
          <input
            id="enableBB-8"
            onChange={toggleBB8}
            checked={enableBB8}
            name="enableBB-8"
            type="checkbox"
          />
        </ConfigRow>
      </div>

      <div className={'basic-config-box'}>
        <ConfigRow>
          <div className="cfg-row">
            <label htmlFor="enable-custom-geolocation">
              Enable Custom Geolocation
            </label>
            <input
              id="enable-custom-geolocation"
              onChange={toggleCustomGeolocation}
              checked={customGeolocation}
              name="enable-custom-geolocation"
              type="checkbox"
            />
          </div>
          <div className="cfg-row">
            <label className={!customGeolocation ? 'opacity' : ''} htmlFor="lat">Latitude</label>
            <input
              className
              disabled={!customGeolocation}
              id="lat"
              onChange={e => setLat(e.target.value)}
              name="lat"
              type="text"
              value={lat}
            />
          </div>
          <div className="cfg-row">
            <label className={!customGeolocation ? 'opacity' : ''} htmlFor="lon">Longitude</label>
            <input
              disabled={!customGeolocation}
              id="lon"
              onChange={e => setLon(e.target.value)}
              name="lon"
              type="text"
              value={lon}
            />
          </div>
        </ConfigRow>
      </div>

      <Buttons onClose={onClose} />
    </div>
  )
}

export default ConfigBox
