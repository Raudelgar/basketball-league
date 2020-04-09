import React from 'react';
import slug from 'slug';
import { parse } from 'query-string';

import Player from './Player.js';
import { getPlayers } from '../../../api/api.js';

export default class AllPlayers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [],
			isLoading: true
		};
	}

	componentDidMount() {
		this.updatePlayers();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
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
		const { players, isLoading } = this.state;
		const { id } = this.props.match.params;
		let player = !isLoading
			? players.find(player => slug(player.name) === id)
			: '';
		return (
			<div className='panel'>
				<Player isLoading={isLoading} player={player} {...this.props} />
			</div>
		);
	}
}
