const _request = require('then-request');
const _yaml = require('./yaml.js');

var _token = null;

function request(url, headers, data) {
	return _request('GET', url, {
		headers: headers,
		json: data
	}).then(result => {
		return result.getBody('utf8');
	}).catch(err => null);
}

function jsonRequest(url, headers, data) {
	return request(url, headers, data).then(result => {
		return JSON.parse(result);
	}).catch(err => null);
}

function yamlRequest(url, headers, data) {
	return request(url, headers, data).then(result => {
		return _yaml.parse(result);
	}).catch(err => null);
}

function githubRequest(endpoint, headers, data) {
	return jsonRequest("https://api.github.com/" + endpoint, Object.assign({
		"User-Agent": "fennifith",
		"Authorization": _token ? "token " + _token : null
	}, headers), data);
}

module.exports = function(token) {
	_token = token;
	
	return {
		test: request,
		json: jsonRequest,
		yaml: yamlRequest,
		github: githubRequest
	};
};
