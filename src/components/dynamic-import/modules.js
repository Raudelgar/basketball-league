import React from 'react';
import DynamicImport from './DynamicImport.js';
import Loader from '../loader/Loader.js';

const Home = props => (
	<DynamicImport load={() => import('../pages/home-page/Home')}>
		{Component => (Component === null ? <Loader /> : <Component {...props} />)}
	</DynamicImport>
);

const PlayersPage = props => (
	<DynamicImport load={() => import('../pages/players/PlayersPage')}>
		{Component => (Component === null ? <Loader /> : <Component {...props} />)}
	</DynamicImport>
);

const TeamsPage = props => (
	<DynamicImport load={() => import('../pages/teams/TeamsPage')}>
		{Component => (Component === null ? <Loader /> : <Component {...props} />)}
	</DynamicImport>
);

const AllTeams = props => (
	<DynamicImport load={() => import('../pages/teams/AllTeams')}>
		{Component => (Component === null ? <Loader /> : <Component {...props} />)}
	</DynamicImport>
);

const ArticlesPage = props => (
	<DynamicImport load={() => import('../pages/articles/ArticlesPage')}>
		{Component => (Component === null ? <Loader /> : <Component {...props} />)}
	</DynamicImport>
);

export { Home, PlayersPage, TeamsPage, AllTeams, ArticlesPage };
