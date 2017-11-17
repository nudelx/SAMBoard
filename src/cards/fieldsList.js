import React from 'react'
import { getFields, SKIP_FIELDS } from '../tools/fields'
import User from './user'
// import spinner from '../spinner.svg'

const getValue = (field, data) => {
  if (field === 'updated') return data.timeAgo
  if (field === 'user') return <User user={data.user} date={data.date} />
  // if (field.indexOf('thread') !== -1) {
  //   return parseFloat(data.threads[field]) ? (
  //     <span className="fail">{data.threads[field]}</span>
  //   ) : (
  //     <span className="pass">
  //       {data.threads[field] === undefined ? (
  //         <img alt="spinner" className="spinner" src={spinner} />
  //       ) : (
  //         '✓'
  //       )}
  //     </span>
  //   )
  // }
  return data[field]
}

const getField = (field, data, type) => {
  if (field === 'user') return <li key={field}>{getValue(field, data)}</li>

  return (
    <li key={field}>
      <span className="list-key">{field}:</span>
      <span className="list-val">{getValue(field, data)}</span>
    </li>
  )
}

const FieldsList = ({ type, data }) => {
  const fields = getFields(type)
  const to_skip = SKIP_FIELDS[type] || {}
  if (!fields)
    return (
      <ul>
        <li>no such type</li>
      </ul>
    )
  return <ul>{fields.map(f => !to_skip[f] && getField(f, data, type))}</ul>
}

export default FieldsList
