import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// import Loader from './components/loader/Loader.js';
import NavBar from './components/nav/NavBar.js';
import Home from './components/pages/home-page/Home.js';
import PlayersPage from './components/pages/players/PlayersPage.js';
import TeamsPage from './components/pages/teams/TeamsPage.js';
import AllTeams from './components/pages/teams/AllTeams.js';
import ArticlesPage from './components/pages/articles/ArticlesPage.js';

class App extends React.Component {
	render() {
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
}

export default App;
