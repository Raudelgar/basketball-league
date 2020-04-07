import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

export default class Home extends React.Component {
	render() {
		return (
			<div className='container'>
				<h1 className='large-header text-center'>
					Hash History Basketball League
				</h1>
				<h3 className='header text-center'>Select a team</h3>
				<div className='home-grid'>
					<Link to='/bulls'>bulls</Link>
					<Link to='/foxes'>foxes</Link>
					<Link to='/hedgehogs'>hedgehogs</Link>
					<Link to='/lemurs'>lemurs</Link>
					<Link to='/koalas'>koalas</Link>
				</div>
			</div>
		);
	}
}
