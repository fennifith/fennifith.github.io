var ElementUtil = {};

ElementUtil.createElement = function(html) {
	var fragment = document.createDocumentFragment();
	var temp = document.createElement('div');
	temp.innerHTML = html;
	while (temp.firstChild) {
		fragment.appendChild(temp.firstChild);
	}

	return fragment;
};

ElementUtil.clearElement = function(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
};

var StringUtil = {};

StringUtil.format = function(string, value) {
	return string.replace(/\${}/g, value);
}