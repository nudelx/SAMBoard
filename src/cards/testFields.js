import React from 'react'
import extractField from '../tools/extractField'
import { getFieldsOrder } from '../tools/fields'


const TestFields = ({ env, cardData }) => {
  const fields = getFieldsOrder(env) || null
  return (
    <div>
      <ul>
        { if (!fields) return <li>no such type</li> }
        {
          fields.map( f => <li key={f}>
            <span className="list-key">
              {f}:
            </span>
            <span className="list-val">
              {extractField(cardData, f)}
            </span>
          </li>)
        }
      </ul>
    </div>
  )

}
