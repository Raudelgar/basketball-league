import React from 'react';
import { Route } from 'react-router-dom';

import { getTeamNames } from '../../../api/api.js';
import Sidebar from '../../sidebar/Sidebar.js';
import AllTeams from './AllTeams.js';

export default class TeamsPage extends React.Component {
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
		const { match, location } = this.props;
		return (
			<div className='container two-column'>
				<Sidebar
					isLoading={isLoading}
					header={header}
					sideItems={teams}
					{...this.props}
				/>
				{!isLoading && location.pathname === `${match.path}` && (
					<div className='sidebar-instructions'>Select a Team</div>
				)}
				<Route path={`${match.path}/:id`} component={AllTeams} />
			</div>
		);
	}
}
