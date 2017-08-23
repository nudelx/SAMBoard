import React from 'react'

const TestStatus = ({ status }) => {
  return (
    <div className="st-triangle">
      <div className={`arrow-up-${status}`}>
        <div className="symbol">
          {status === 'fail' ? 'X' : status === 'running' ? '➠' : '✓'}
        </div>
      </div>
      <span className={`st-status-${status}`}>
        {status}
      </span>
    </div>
  )
}

export default TestStatus
