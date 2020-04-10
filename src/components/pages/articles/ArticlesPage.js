import React from 'react';
import { Route } from 'react-router-dom';

import { getArticle, getTeamsArticles } from '../../../api/api.js';
import Loader from '../../loader/Loader.js';

import './Article.css';

import Sidebar from '../../sidebar/Sidebar.js';
export default class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			teamArticles: [],
			article: null,
			header: 'Articles'
		};
	}

	componentDidMount() {
		this.fetchTeamArticles();
		this.fetchArticle();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.match.params.articleId !== this.props.match.params.articleId
		) {
			this.fetchArticle();
		}
	}

	fetchArticle = () => {
		const { id, articleId } = this.props.match.params;
		getArticle(id, articleId)
			.then(data => this.setState({ article: data }))
			.catch(error => console.log(error));
	};

	fetchTeamArticles = () => {
		const { id } = this.props.match.params;
		getTeamsArticles(id)
			.then(data => {
				const titles = data.map(article => article.title);
				this.setState({ teamArticles: titles, isLoading: false });
			})
			.catch(error => console.log(error));
	};

	render() {
		const { isLoading, teamArticles, article, header } = this.state;
		const { match } = this.props;

		return (
			<div className='container two-column'>
				{isLoading && <Loader label='Loading Articles' />}
				<Sidebar
					isLoading={isLoading}
					header={header}
					sideItems={teamArticles}
					articlePath={`/${match.params.id}/articles`}
					{...this.props}
				/>
				{article && (
					<Route
						path={`${match.path}`}
						render={() => (
							<div className='panel'>
								<article className='article'>
									<h1 className='header'>{article.title}</h1>
									<p>{article.body}</p>
								</article>
							</div>
						)}
					/>
				)}
			</div>
		);
	}
}
