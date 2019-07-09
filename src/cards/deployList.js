import React from 'react'

export default ({ deployers }) => {
  const current = deployers.current
  console.log(current)
  return (
    <div className="namelist">
      <ul className="deployerlist">
        {Object.keys(deployers)
          .filter(u => u !== 'current')
          .map(u => (
            <li
              className={
                current.toLowerCase() === u.toLowerCase()
                  ? 'deployerOnDuty'
                  : ''
              }
              key={u}
            >
              {u}
            </li>
          ))}
      </ul>
    </div>
  )
}
