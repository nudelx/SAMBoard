import React from 'react'
import FieldFormater from '../tools/FieldFormater'
import Loading from '../tools/loading'

const statusClass = (thread) => {
  const number = parseInt(thread)
  if (number === 0) {
    return 'pass'
  }
  return 'fail'
}

const statusValue = (status) => {
  if (parseInt(status) >= 0) {
    return (
      <span className={'thread-value ' + statusClass(status)}>
        {status}
      </span>
    )
  }
  return (
    <Loading />
  )
}

const TestThreads = ({ threads }) => {
  if (!threads || Object.keys(threads).length == 0) return null
  return (
    <div className='test-threads'>
      <ul>
        {Object.keys(threads).map((thread, i) =>
          <li key={i} className='test-thread'>
            <span className='list-key'>
              {thread.replace('-', ' ')}
            </span>
            {statusValue(threads[thread])}
          </li>
        )}
      </ul>
    </div>
  )
}

export default TestThreads
