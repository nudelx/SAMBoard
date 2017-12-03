import React from 'react'

const TestBox = ({ name, failed, total }) => {
  const statusClass = failed === 0 ? 'test-success' : 'test-fail'
  return (
    <ul className={`test-thread-box ${statusClass}`}>
      <li className='test-thread-name'>{name}</li>
      <li className='test-thread-value'>{`${failed}/${total}`}</li>
    </ul>
  )
}

export default TestBox
