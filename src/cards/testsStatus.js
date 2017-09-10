import React from 'react'

const testsStatusText = (status) => {
  switch (status) {
    case 'fail':
      return 'Failed'
    case 'pass':
      return 'Passed'
    case 'running':
      return 'Running...'
  }
}

const TestsStatus = ({ status }) => {
  const testsStatusClass = 'test-status ' + `st-status-${status}`
  return (
    <div className='tests-status'>
      <span className='test-status-label'>test status</span>
      <span className={testsStatusClass}>{testsStatusText(status)}</span>
    </div>
  )
}

export default TestsStatus
