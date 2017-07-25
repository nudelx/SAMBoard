import spinner from '../spinner.svg'
import React from 'react'
export const formatValue = (field, threads) => {
    return parseFloat(threads[field])
      ? <span className="fail">
          {threads[field]}
        </span>
      : <span className="pass">
          {threads[field] === undefined
            ? <img alt="spinner" className="spinner" src={spinner} />
            : '✓'}
        </span>
}
