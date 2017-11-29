import React from 'react'
import FieldFormater from '../tools/FieldFormater'

const TestThreads = ({ threads }) => {
  if (!threads) return null
  return (
    <div>
      <ul>
        {Object.keys(threads).map((t, i) =>
          <li>
            <span>
              {t}
            </span>
            <span>
              {threads[t] && threads[t]}
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default TestThreads
