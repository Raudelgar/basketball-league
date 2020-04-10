import React from 'react';
import { Route } from 'react-router-dom';

import Loader from '../../loader/Loader.js';
import { getArticle } from '../../../api/api.js';

export default class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: null
		};
	}

	componentDidMount() {
		this.fetchArticle();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(this.props);
	}

	fetchArticle = () => {
		const { id, articleId } = this.props.match.params;
		getArticle(id, articleId)
			.then(data => this.setState({ article: data }))
			.catch(error => console.log(error));
	};

	render() {
		const { isLoading, match } = this.props;
		const { article } = this.state;
		return (
			<>
				{!article && <Loader label='Loading Articles' />}
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
			</>
		);
	}
}
