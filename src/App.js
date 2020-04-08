import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// import Loader from './components/loader/Loader.js';
import NavBar from './components/nav/NavBar.js';
import Home from './components/pages/home-page/Home.js';
import Players from './components/pages/players/Players.js';
import TeamsPage from './components/pages/teams/TeamsPage.js';
import Team from './components/pages/teams/Team.js';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<NavBar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/players' component={Players} />
						<Route path='/teams' component={TeamsPage} />
						<Route path='/:id' component={Team} />
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
