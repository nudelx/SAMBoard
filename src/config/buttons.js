import React from 'react'

const Buttons = ({ onClose }) => {
  return (
    <div className={'close-holder'} onClick={onClose}>
      <div className={'close'}>{'Done'}</div>
    </div>
  )
}

export default Buttons
