import React from 'react'

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

const TestsStatus = ({ status }) => {
  return (
    <div className='tests-status'>
      <span className='test-status-label'>test status</span>
      <span className={`test-status st-status-${status}`}>{testsStatusText(status)}</span>
    </div>
  )
}

export default TestsStatus
