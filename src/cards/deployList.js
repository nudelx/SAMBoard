import React from 'react'

export default ({ list }) => {
  const current = list.current
  return (
    <div className="namelist">
      <ul className="deployerlist">
        {list.deployers.map(u => (
          <li
            className={
              current.toLowerCase() === u.toLowerCase() ? 'deployerOnDuty' : ''
            }
            key={u}
          >
            {u}
          </li>
        ))}
      </ul>
      <div className="rocket-icon rocket" />
    </div>
  )
}
