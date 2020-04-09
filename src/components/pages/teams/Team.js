import React from 'react';
import { Link } from 'react-router-dom';

import Loader from '../../loader/Loader.js';
import TeamsLogo from '../../team-logo/TeamsLogo.js';

export default function Team({ isLoading, team, teamArticles, match }) {
	return (
		<>
			{isLoading && <Loader label='Loading Team' />}
			{!isLoading && (
				<>
					<TeamsLogo id={team.id} />
					<h1 className='medium-header'>{team.name}</h1>
					<h4 style={{ margin: '5px' }}>
						<Link to={`/players?teamid=${team.id}`}>View Roster</Link>
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
								<Link to={`${match.url}/${article.id}`}>
									<h4 className='article-tile'>{article.title}</h4>
									<div className='article-date'>
										{article.date.toLocaleDateString()}
									</div>
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
}
