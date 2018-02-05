import React from  'react'

const Slide = ({ children, style }) => (<li style={{'transition': 'all 2s cubic-bezier(0.43, 0.2, 0.96, 0.99)',...style}} className="slide">{children}</li>)

export default Slide
