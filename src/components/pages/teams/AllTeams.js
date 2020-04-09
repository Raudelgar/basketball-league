import React from 'react';

import { getTeam, getTeamsArticles } from '../../../api/api.js';
import Team from './Team.js';

import './Team.css';

export default class AllTeams extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			team: null,
			teamArticles: [],
			isLoading: true
		};
	}

	componentDidMount() {
		this.updateTeam();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.updateTeam();
		}
	}

	updateTeam = () => {
		const { id } = this.props.match.params;
		getTeam(id)
			.then(data => this.setState({ team: data }))
			.then(() => {
				let { id } = this.state.team;
				getTeamsArticles(id)
					.then(data => {
						this.setState({
							teamArticles: data,
							isLoading: false
						});
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
	};

	render() {
		const { team, teamArticles, isLoading } = this.state;

		return (
			<div className='panel'>
				<Team
					isLoading={isLoading}
					team={team}
					teamArticles={teamArticles}
					{...this.props}
				/>
			</div>
		);
	}
}
