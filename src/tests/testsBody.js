import React from 'react'
import TestBox from './testBox'
import TestLoadingBox from './testLoadingBox'

const testsStatusText = (status) => {
  switch (status) {
    case 'fail':
      return 'Failed'
    case 'pass':
      return 'Passed'
    case 'running':
      return 'Running...'
    default:
      return ''
  }
}

const running = (threadsRunning) => {
  return Object.keys(threadsRunning).some(t => threadsRunning[t])
}

const getComponent = (component, key) => {
  return <li key={key} className='thread-box'>{component}</li>
}

const renderTestBoxes = (browsers, threadsRunning) => {
  const browsersCount = Object.keys(browsers).length
  if (browsersCount === 0)
    return getComponent(<TestLoadingBox />, 1)

  let boxes = []

  Object.keys(browsers).forEach(browser => {
    const browserData = browsers[browser]
    boxes.push(getComponent(<TestBox key={browser} name={browser} failed={browserData.failed} total={browserData.total} />, browser))
  })

  if (running(threadsRunning))
    boxes.push(getComponent(<TestLoadingBox key={browsersCount + 1} />, browsersCount + 1))

  return boxes
}

const TestsBody = ({ browsers, threadsRunning, date, status }) => {
  return (
    <div className='tests-body'>
      <div className='tests-inner-body'>
        <div className='tests-header-container'>
          <div className='tests-header'>Test Status</div>
          <div className={`tests-status st-status-${status}`}>{testsStatusText(status)}</div>
        </div>
        <div className='test-threads-body-container'>
          <ul className='test-threads-body'>
            {renderTestBoxes(browsers, threadsRunning)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TestsBody
