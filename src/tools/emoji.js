import React from 'react'

export default ({ i, className, extra }) => (
  <spawn label="img" className={className}>
    {i}
    {extra}
  </spawn>
)
