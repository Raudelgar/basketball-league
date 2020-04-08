import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/nav/NavBar.js';
import Home from './components/pages/home-page/Home.js';
import Players from './components/pages/players/Players.js';
import Teams from './components/pages/teams/Teams.js';

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
			</div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/players' component={Players} />
				<Route path='/teams' component={Teams} />
			</Switch>
		</Router>
	);
}

export default App;
