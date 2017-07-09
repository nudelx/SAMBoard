import React from 'react'

const TestThreads = ({ threads }) => {        
  if (!threads) return null
  console.log(threads)
  return (
    <div>
      <ul>
        {Object.keys(threads).map((t,i) =>
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
