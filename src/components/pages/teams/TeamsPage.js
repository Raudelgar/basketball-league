import React from 'react';

import { getTeamNames } from '../../../api/api.js';

import Loader from '../../loader/Loader.js';
import Sidebar from '../../sidebar/Sidebar.js';

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
		const { match } = this.props;
		return (
			<div className='container two-column'>
				{isLoading && <Loader label='Loading Teams' />}
				{!isLoading && (
					<>
						<Sidebar match={match} header={header} sideItems={teams} />
						<div className='sidebar-instructions'>Select a Team</div>
					</>
				)}
			</div>
		);
	}
}
