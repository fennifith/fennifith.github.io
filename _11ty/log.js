'use strict';

const _colors = require("colors");

module.exports = {
	error: str => console.log(str.red),
	warn: str => console.log(str.yellow),
	info: str => console.log(str.green),
	debug: str => console.log(str.blue)
};
