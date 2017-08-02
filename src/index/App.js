import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Entry from './Entry'
import User from './User'

class App extends React.Component {
    constructor() {
	super()
    }
    render() {
	return (
	    <BrowserRouter>
		<div>
		    <Switch>
			<Route exact path='/' component={Entry} />
			<Route path='/:username' component={User} />
		    </Switch>
		</div>
	    </BrowserRouter>
	)
    }
}

export default App
