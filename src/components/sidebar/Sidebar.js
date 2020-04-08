import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ match, header, sideItems }) {
	return (
		<div>
			<h3 className='header'>{header}</h3>
			<ul className='sidebar-list'>
				{sideItems.map(name => (
					<li key={name} className='sidebar-item'>
						<Link to={`${match.url}/${name}`}>{name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
