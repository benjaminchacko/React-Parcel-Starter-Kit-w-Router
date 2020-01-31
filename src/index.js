import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './components/routes'

const container = document.querySelector('#root')

const App = () => (
  <Router>
    <Routes />
  </Router>
)

render(<App />, container)