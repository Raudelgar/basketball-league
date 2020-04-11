import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './Player.css';
import Loader from '../../loader/Loader.js';

export default function Player({ isLoading, player, match, location }) {
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

Player.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	player: PropTypes.object
};

/*
Note: With TransitionGroup and CssTransition I'm getting this warning:
Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node

TODO: Find a solution

<TransitionGroup className='panel'>
			<CSSTransition key={location.key} timeout={300} classNames='fade'>
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
			</CSSTransition>
		</TransitionGroup>
*/
