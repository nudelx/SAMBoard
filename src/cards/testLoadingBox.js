import React from 'react'

const TestLoadingBox = () => {
  return (
    <ul className={'test-thread-box'}>
      <li className='test-thread-loading'>
        <div className='bouncing_loading'>
          <div className='bounce1' />
          <div className='bounce2' />
          <div className='bounce3' />
        </div>
      </li>
    </ul>
  )
}

export default TestLoadingBox
