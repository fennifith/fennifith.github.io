function titleize(str) {
	return str.replace(/[_\-]/g, " ")
		.replace(/^[a-z]/g, (str) => str.toUpperCase())
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
		.replace(/\s([a-z]){4,}/g, (str) => " " + str.charAt(1).toUpperCase() + str.substring(2));
}

function safestrize(str) {
	return str.replace(/(\")/g, "\\\"").replace(/(\:)/g, "&#58;");
}

function unhighlightize(str) {
	return str.replace(/(\n{2,})\`{3} *(\n{1,})/g, "$1```nohighlight$2");
}

module.exports = {
	titleize: titleize,
	safestrize: safestrize,
	unhighlightize: unhighlightize
};
