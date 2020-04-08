import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Team from '../pages/teams/Team.js';

export default function Sidebar({ match, header, sideItems }) {
	return (
		<>
			<div>
				<h3 className='header'>{header}</h3>
				<ul className='sidebar-list'>
					{sideItems.map(name => (
						<li key={name} className='sidebar-item'>
							<NavLink
								to={`${match.url}/${name}`}
								activeStyle={{ fontWeight: 'bold' }}
							>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<Route
				exact
				path={`${match.path}`}
				render={() => <div className='sidebar-instructions'>Select a Team</div>}
			/>
			<Route path={`${match.path}/:id`} component={Team} />
		</>
	);
}
