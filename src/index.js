import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import './weather.css'
import findPolyfill from './polyfill/find'

findPolyfill()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
