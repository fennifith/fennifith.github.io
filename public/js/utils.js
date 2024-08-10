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
};

StringUtil.titleize = function(string) {
	return string.split("_").join(" ")
		.split("-").join(" ")
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
};

var UrlUtil = {};

UrlUtil.stringToArguments = function(args) {
  var array = args.split("&");
  var args = {};
  for (var i = 0; i < array.length; i++) {
    if (array[i].indexOf("=") >= 0) {
      var argArray = array[i].split("=");
      args[argArray[0]] = argArray[1];
    } else args[array[i]] = true;
  }

  return args;
};

UrlUtil.argumentsToString = function(args) {
  var string = "";
  for (var i in args) {
    string += i + "=" + args[i] + "&";
  }

  return string.substring(0, string.length - 1);
};

UrlUtil.getCurrentArguments = function() {
  if (window.location.search)
    return UrlUtil.stringToArguments(window.location.search.replace("?", ""));
  else return {};
};
