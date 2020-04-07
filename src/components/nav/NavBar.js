import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default function NavBar(props) {
	return (
		<div className='container navbar'>
			<Link to='/'>home</Link>
			<nav className='nav-links'>
				<Link to='/players'>players</Link>
				<Link to='/teams'>teams</Link>
			</nav>
		</div>
	);
}
