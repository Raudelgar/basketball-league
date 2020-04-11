import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/nav/NavBar.js';

import {
	Home,
	PlayersPage,
	TeamsPage,
	AllTeams,
	ArticlesPage
} from './components/dynamic-import/modules.js';

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/players' component={PlayersPage} />
					<Route path='/teams' component={TeamsPage} />
					<Route exact path='/:id' component={AllTeams} />
					<Route path='/:id/articles/:articleId' component={ArticlesPage} />
					<Route
						render={() => (
							<div>
								<h3 className='text-center'>404 - Page Not Found</h3>
							</div>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
