import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'raf/polyfill'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import './weather.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
