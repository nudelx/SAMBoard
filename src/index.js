import 'raf/polyfill'
import React from 'react'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import './weather.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
