import React from 'react'
import FieldFormater from '../tools/FieldFormater'
import Loading from '../tools/loading'

const statusClass = (thread) => {
  switch (parseInt(thread)) {
    case -1:
      return 'wait'
    case 0:
      return 'pass'
    default:
      return 'fail'
  }
}

const statusValue = (status) => {
  if (status === '-1') {
    return (
      <Loading />
    )
  }
  return (
    <span className={'thread-value ' + statusClass(status)}>
      {status}
    </span>
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
