import React from 'react';
import { Link } from 'react-router-dom';

import { getTeamNames } from '../../../api/api.js';
import Loader from '../../loader/Loader.js';

export default class Teams extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			header: 'Teams',
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
		const { header, teams, isLoading } = this.state;
		const { match } = this.props;
		return (
			<div className='container two-column'>
				{isLoading && <Loader label='Loading Teams' />}
				{!isLoading && (
					<>
						<div>
							<h3 className='header'>{header}</h3>
							<ul className='sidebar-list'>
								{teams.map(team => (
									<li key={team} className='sidebar-item'>
										<Link to={`${match.url}/${team}`}>{team}</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='sidebar-instructions'>Select a Team</div>
					</>
				)}
			</div>
		);
	}
}
