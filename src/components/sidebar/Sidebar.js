import React from 'react';
import { Link, Route } from 'react-router-dom';
import slug from 'slug';

// import Loader from '../loader/Loader.js';

function CustomLink({ to, label }) {
	return (
		<Route
			path={to.pathname}
			children={({ match }) => (
				<li
					className='sidebar-item '
					style={{
						fontWeight: match ? 'bold' : 'normal'
					}}
				>
					<Link to={to}>{label}</Link>
				</li>
			)}
		/>
	);
}

export default function Sidebar({
	isLoading,
	header,
	sideItems,
	match,
	location
}) {
	return (
		<>
			{/* {isLoading && <Loader label={`Loading ${header}`} />} */}
			{!isLoading && (
				<>
					<div>
						<h3 className='header'>{header}</h3>
						<ul className='sidebar-list'>
							{sideItems.map(name => (
								<CustomLink
									key={name}
									to={{
										pathname: `${match.url}/${slug(name)}`,
										search: location.search
									}}
									label={name.toUpperCase()}
								/>
							))}
						</ul>
					</div>
				</>
			)}
		</>
	);
}
