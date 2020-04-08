import React from 'react';
import { Link } from 'react-router-dom';

import { getTeam, getTeamsArticles } from '../../../api/api.js';

import './Team.css';

import Loader from '../../loader/Loader.js';
import TeamsLogo from '../../team-logo/TeamsLogo.js';

export default class Team extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			team: null,
			teamArticles: [],
			isLoading: true
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		getTeam(id)
			.then(data => this.setState({ team: data }))
			.then(() => {
				let { id } = this.state.team;
				getTeamsArticles(id)
					.then(data => {
						// console.log(data);
						this.setState({
							teamArticles: data,
							isLoading: false
						});
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
	}

	render() {
		const { team, teamArticles, isLoading } = this.state;
		const { match } = this.props;
		return (
			<div className='panel'>
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
			</div>
		);
	}
}
