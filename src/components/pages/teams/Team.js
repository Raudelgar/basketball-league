import React from 'react';
import { Link } from 'react-router-dom';
import slug from 'slug';
import PropTypes from 'prop-types';

import Loader from '../../loader/Loader.js';
import TeamsLogo from '../../team-logo/TeamsLogo.js';

const teamPage = (team, teamArticles, match) => (
	<>
		<TeamsLogo id={team.id} />
		<h1 className='medium-header'>{team.name}</h1>
		<h4 style={{ margin: '5px' }}>
			<Link
				to={{
					pathname: '/players',
					search: `?teamId=${team.id}`
				}}
			>
				View Roster
			</Link>
		</h4>
		<h4 style={{ margin: '20px 0' }}>Campionships</h4>
		<ul className='championships'>
			{team.championships.map(year => (
				<li key={year}>{year}</li>
			))}
		</ul>
		<ul className='info-list row' style={{ width: '100%' }}>
			<li>
				Established
				<div>{team.established}</div>
			</li>
			<li>
				Manager
				<div>{team.manager}</div>
			</li>
			<li>
				Coache
				<div>{team.coach}</div>
			</li>
			<li>
				Record
				<div>
					{team.wins}-{team.losses}
				</div>
			</li>
		</ul>
		<h2 className='header'>Articles</h2>
		<ul className='articles'>
			{teamArticles.map(article => (
				<li key={article.id}>
					{/* <Link to={`${match.url}/articles/${slug(article.title)}`}> */}
					<Link
						to={{
							pathname: `${match.url}/articles/${slug(article.title)}`,
							state: { from: 'articles' }
						}}
					>
						<h4 className='article-tile'>{article.title}</h4>
						<div className='article-date'>
							{article.date.toLocaleDateString()}
						</div>
					</Link>
				</li>
			))}
		</ul>
	</>
);

const teamProfile = team => (
	<>
		<TeamsLogo id={team.id} />
		<h1 className='medium-header'>{team.name}</h1>
		<ul className='info-list row' style={{ width: '100%' }}>
			<li>
				Established
				<div>{team.established}</div>
			</li>
			<li>
				Manager
				<div>{team.manager}</div>
			</li>
			<li>
				Coache
				<div>{team.coach}</div>
			</li>
		</ul>
		<Link to={`/${team.id}`} className='center btn-main'>
			{`${team.name} Team Page`}
		</Link>
	</>
);

export default function Team({
	isLoading,
	team,
	teamArticles,
	match,
	location
}) {
	return (
		<>
			{isLoading && <Loader label='Loading Team' />}
			{!isLoading &&
				(location.pathname === `/${team.id}`
					? teamPage(team, teamArticles, match)
					: teamProfile(team))}
		</>
	);
}

Team.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	team: PropTypes.object,
	teamArticles: PropTypes.array
};
