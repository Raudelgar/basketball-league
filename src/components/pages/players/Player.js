import React from 'react';
import { Link } from 'react-router-dom';

import './Player.css';
import Loader from '../../loader/Loader.js';

export default function Player({ isLoading, player, match }) {
	return (
		<div className='panel'>
			{isLoading && <Loader label='Loading Player' />}
			{!isLoading && (
				<>
					<img
						className='avatar'
						src={player.avatar}
						alt={`${player.name}'s avatar`}
					/>
					<h1 className='medium-header'>{player.name}</h1>
					<h3 className='header'>{`#${player.number}`}</h3>
					<div className='row'>
						<ul className='info-list' style={{ marginRight: '80px' }}>
							<li>
								Team
								<div className='player-team'>
									<Link to={`/${player.teamId}`}>{player.teamId}</Link>
								</div>
							</li>
							<li>
								Position
								<div>{player.position}</div>
							</li>
							<li>
								PPG
								<div>{player.ppg}</div>
							</li>
						</ul>
						<ul className='info-list'>
							<li>
								APG
								<div>{player.apg}</div>
							</li>
							<li>
								SPG
								<div>{player.spg}</div>
							</li>
							<li>
								RPG
								<div>{player.rpg}</div>
							</li>
						</ul>
					</div>
				</>
			)}
		</div>
	);
}
