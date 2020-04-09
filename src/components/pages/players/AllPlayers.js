import React from 'react';
import slug from 'slug';

import Player from './Player.js';

export default class AllPlayers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player: null,
			isLoading: true
		};
	}

	componentDidMount() {
		console.log('--componentDidMount/AllPlayers--');
		this.findPlayer();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('--componentDidUpdate/AllPlayers--');
		// console.log(prevProps);
		// console.log(this.props);
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.findPlayer();
		}
	}

	findPlayer = () => {
		const { id } = this.props.match.params;
		const { players } = this.props;
		const player = players.find(player => slug(player.name) === id);

		this.setState({ player, isLoading: false });
	};

	render() {
		const { player, isLoading } = this.state;

		return (
			<div className='panel'>
				<Player isLoading={isLoading} player={player} {...this.props} />
			</div>
		);
	}
}
