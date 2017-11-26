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

const running = (status) => {
  return status === 'running'
}

const threadNumber = (thread) => {
  return parseInt(thread.split('-')[1], 10)
}

const threadName = (number) => {
  return `thread-${number}`
}

const maxThreadsNum = (threads) => {
  let maxThreadNumber = 0
  Object.keys(threads).forEach((thread) => {
    const num = threadNumber(thread)
    if (num > maxThreadNumber)
      maxThreadNumber = num
  })
  return maxThreadNumber
}

const getComponent = (component, key) => {
  return <li key={key} className='thread-box'>{component}</li>
}

const renderTestBoxes = (threads, status) => {
  if (Object.keys(threads).length === 0)
    return getComponent(<TestLoadingBox />, 1)

  let boxes = []
  const maxNum = maxThreadsNum(threads)
  for (let i = 1; i <= maxThreadsNum(threads); i++) {
    const thread = threadName(i)
    if (threads[thread])
      boxes.push(getComponent(<TestBox key={i} name={`T${i}`} value={threads[thread]} />, `T${i}`))
    else {
      if (running(status) && i < maxNum && (boxes.length === 0 || boxes[boxes.length - 1].key.startsWith('T')))
        boxes.push(getComponent(<TestLoadingBox key={i} />, i))
    }
  }
  if (running(status))
    boxes.push(getComponent(<TestLoadingBox key={maxNum + 1} />, maxNum + 1))
  return boxes
}

const TestsBody = ({ threads, date, status }) => {
  return (
    <div className='tests-body'>
      <div className='tests-inner-body'>
        <div className='tests-header-container'>
          <div className='tests-header'>Test Status</div>
          <div className={`tests-status st-status-${status}`}>{testsStatusText(status)}</div>
        </div>
        <div className='test-threads-body-container'>
          <ul className='test-threads-body'>
            {renderTestBoxes(threads, status)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TestsBody
