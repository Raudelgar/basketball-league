import React from 'react';
import { Route } from 'react-router-dom';
import { parse } from 'query-string';
import slug from 'slug';

import { getPlayers } from '../../../api/api.js';
import Sidebar from '../../sidebar/Sidebar.js';
import AllPlayers from './AllPlayers.js';
import Player from './Player.js';

export default class Players extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			header: 'Players',
			players: [],
			isLoading: true
		};
	}

	componentDidMount() {
		this.updatePlayers();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.location.search !== this.props.location.search) {
			this.updatePlayers();
		}
	}

	updatePlayers = () => {
		const { search } = this.props.location;
		if (search) {
			const { teamId } = parse(search);
			this.fetchPlayers(teamId);
		} else {
			this.fetchPlayers();
		}
	};

	fetchPlayers = team => {
		getPlayers(team)
			.then(players => this.setState({ players, isLoading: false }))
			.catch(error => console.log(error));
	};

	render() {
		const { header, players, isLoading } = this.state;
		const { match, location } = this.props;

		return (
			<div className='container two-column'>
				<Sidebar
					isLoading={isLoading}
					header={header}
					sideItems={players.map(player => player.name)}
					{...this.props}
				/>
				{!isLoading && location.pathname === `${match.path}` && (
					<div className='sidebar-instructions'>Select a Player</div>
				)}
				<Route
					path={`${match.path}/:id`}
					render={props => {
						const { id } = props.match.params;
						let player = players.find(player => slug(player.name) === id);
						return <Player isLoading={isLoading} player={player} {...props} />;
					}}
				/>
			</div>
		);
	}
}
