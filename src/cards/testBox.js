import React from 'react'

const TestBox = ({ name, value }) => {
  const statusClass = value === '0' ? 'test-success' : 'test-fail'
  return (
    <ul className={`test-thread-box ${statusClass}`}>
      <li className='test-thread-name'>{name}</li>
      <li className='test-thread-value'>{value}</li>
    </ul>
  )
}

export default TestBox
