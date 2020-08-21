import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

import home from './home'
import page2 from './page2'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={home} />
      <Route exact path='/2' component={page2} />
    </Switch>
  </Router>
)

export default App
