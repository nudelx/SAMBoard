import React from 'react'
import { getFields } from '../tools/fields'
import User from './user'
import spinner from '../spinner.svg'

const getUser = (data) => {
  return (
    <User user={data.user} date={data.date} />
  )
}

const getValue = (field, data) => {
  if (field === 'updated') return data.timeAgo
  if (field === 'user') return getUser(data)
  if (field.indexOf('thread') !== -1) {
    return parseFloat(data.threads[field])
      ? <span className="fail">
          {data.threads[field]}
        </span>
      : <span className="pass">
          {data.threads[field] === undefined
            ? <img alt="spinner" className="spinner" src={spinner} />
            : '✓'}
        </span>
  }
  return data[field]
}

const FieldsList = ({ type, data }) => {
  const fields = getFields(type)
  if (!fields)
    return (
      <ul>
        <li>no such type</li>
      </ul>
    )
  return (
    <ul>
      {fields.map(field =>
        <li key={field}>
          <span className="list-key">
            {field}:
          </span>
          <span className="list-val">
            {getValue(field, data)}
          </span>
        </li>
      )}
    </ul>
  )
}

export default FieldsList
