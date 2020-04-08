import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import { getTeamNames } from '../../../api/api.js';
import Loader from '../../loader/Loader.js';
import TeamsLogo from '../../team-logo/TeamsLogo.js';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: [],
			isLoading: true
		};
	}

	componentDidMount() {
		getTeamNames()
			.then(data => this.setState({ teams: data, isLoading: false }))
			.catch(error => console.log(error));
	}

	render() {
		const { teams, isLoading } = this.state;
		return (
			<div className='container'>
				{isLoading && <Loader />}
				{!isLoading && (
					<>
						<h1 className='large-header text-center'>
							Hash History Basketball League
						</h1>
						<h3 className='header text-center'>Select a team</h3>
						<div className='home-grid'>
							{teams.map(team => (
								<Link key={team} to={`/${team}`}>
									<TeamsLogo id={team} width='125px' />
								</Link>
							))}
						</div>
					</>
				)}
			</div>
		);
	}
}
