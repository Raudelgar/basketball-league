import React from 'react';

import { getTeamNames, getPlayers } from '../../../api/api.js';

import Loader from '../../loader/Loader.js';
import Sidebar from '../../sidebar/Sidebar.js';

export default class Players extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			header: 'Players',
			players: [],
			playersName: [],
			isLoading: true
		};
	}

	componentDidMount() {
		getTeamNames()
			.then(teams => {
				teams.forEach(team =>
					getPlayers(team).then(players => {
						this.setState(currState => {
							return {
								players: currState.players.concat(players)
							};
						});
					})
				);
			})
			.then(() => {
				this.state.players.forEach(player => {
					let { name } = player;
					this.setState(currState => {
						return {
							playersName: currState.playersName.concat([name]),
							isLoading: false
						};
					});
				});
			})
			.catch(error => console.log(error));
	}

	render() {
		const { header, playersName, isLoading } = this.state;
		const { match } = this.props;
		return (
			<div className='container two-column'>
				{isLoading ? (
					<Loader label='Loading Players' />
				) : (
					<>
						<Sidebar match={match} header={header} sideItems={playersName} />
						<div className='sidebar-instructions'>Select a Team</div>
					</>
				)}
			</div>
		);
	}
}
