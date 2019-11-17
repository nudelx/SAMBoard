import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as mocksdk from 'firebase-mock'
jest.mock('firebase')
jest.mock('axios')
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
