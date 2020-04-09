import {
	teams,
	players,
	generateArticle,
	generateTeamsArticles
} from '../dummy-data.js';

let cachedPlayers = null;
let cachedTeams = {};
let cachedTeamNames = null;

export function getPlayers(teamId) {
	return new Promise(resolve => {
		if (cachedPlayers === null) {
			cachedPlayers = players;
			return setTimeout(
				() => resolve(teamId ? teams[teamId].players : cachedPlayers),
				800
			);
		}

		return resolve(teamId ? teams[teamId].players : cachedPlayers);
	});
}

export function getTeam(teamId) {
	return new Promise(resolve => {
		if (typeof cachedTeams[teamId] === 'undefined') {
			cachedTeams[teamId] = teams[teamId];
			return setTimeout(() => resolve(cachedTeams[teamId]), 800);
		}

		return resolve(cachedTeams[teamId]);
	});
}

export function getTeamNames() {
	return new Promise(resolve => {
		if (cachedTeamNames === null) {
			cachedTeamNames = Object.keys(teams);
			return setTimeout(() => resolve(cachedTeamNames), 400);
		}

		return resolve(cachedTeamNames);
	});
}

export function getArticle(teamId, id) {
	return new Promise(resolve => {
		setTimeout(() => resolve(generateArticle(teamId, id)), 700);
	});
}

export function getTeamsArticles(teamId) {
	return new Promise(resolve => {
		setTimeout(() => resolve(generateTeamsArticles(teamId)), 700);
	});
}
