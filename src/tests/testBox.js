import React from 'react'

const getSeverityStyle = (failed, total) => {
  const percent = 100 * failed / total
  if (percent < 5) return "test-minor"
  if (percent >= 5 && percent < 10) return "test-major"
  return "test-fail"
}

const TestBox = ({ name, failed, total }) => {
  const statusClass = failed === 0 ? "test-success" : getSeverityStyle(failed, total)
  return (
    <ul className={`test-thread-box ${statusClass}`}>
      <li className='test-thread-name'>{name}</li>
      <li className='test-thread-value'>{`${failed}/${total}`}</li>
    </ul>
  )
}

export default TestBox
