import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/App.scss'

import home from './pages/home'
import page2 from './pages/page2'

const App: React.FC = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={home} />
			<Route exact path='/2' component={page2} />
		</Switch>
	</Router>
)

export default App
