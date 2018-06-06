var WebUtil = {};
var GitHubUtil = {};

WebUtil.createCORSRequest = function(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      	xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      	xhr = new XDomainRequest();
      	xhr.open(method, url);
    } else {
      	xhr = null;
    }
    return xhr;
}

WebUtil.onError = function(status) {
    console.log("Request failed, error " + status);
}

GitHubUtil.getRequestLimit = function(fun, error) {
    var requestContent = new XMLHttpRequest();
    requestContent.onreadystatechange = function () {
      	if(requestContent.readyState === 4) {
        	if (requestContent.status === 200 || requestContent.status == 0) {
          		var obj = JSON.parse(requestContent.responseText);
         	 	console.log(obj.resources.core.remaining + " out of " + obj.resources.core.limit + " requests left");

				if (fun) {
					fun(obj.resources.core.remaining);
				}
       	 	} else {
          		WebUtil.onError(rawContent.status);
				error();
        	}
      	}
    }
    requestContent.open("GET", "https://api.github.com/rate_limit", true);
    requestContent.send(null);
}

WebUtil.setCache = function(id, cache) {
	if (localStorage)
		localStorage.setItem(id, JSON.stringify({"time": new Date().getTime(), "data": cache}));
}

WebUtil.getCache = function(url) {
	if (localStorage) {
        try {
		    return JSON.parse(localStorage.getItem(url));
        } catch (e) {
        }
    }
}

WebUtil.getLinks = function(fun, error) {
	if (WebUtil.links) {
		fun(WebUtil.links);
	} else {
		var linksContent = new XMLHttpRequest();
		linksContent.onreadystatechange = function() {
			if (linksContent.readyState === 4) {
				if (linksContent.status === 200 || linksContent.status == 0) {
					WebUtil.links = JSON.parse(linksContent.responseText);
					if (fun)
						fun(WebUtil.links);
				} else {
					if (error)
						error();
				}
			}
		};
		linksContent.open("GET", "/redirects/data.json", true);
		linksContent.send();
	}
}

GitHubUtil.getGitHubInfo = function(url, fun, error) {
	if (!error) {
		error = function() {
			document.location.href = "/404";
		};
	}

	var cache = WebUtil.getCache(url);
	if (cache && new Date().getTime() - cache.time < 100000) {
		fun(cache.data);
	} else {
		GitHubUtil.getRequestLimit(function(remaining) {
			if (remaining > 0) {
				var requestContent = new XMLHttpRequest();
				requestContent.onreadystatechange = function() {
					if (requestContent.readyState === 4) {
						if (requestContent.status === 200 || requestContent.status == 0) {
							var response = null;
							try {
								response = JSON.parse(requestContent.responseText);			
							} catch (err) {
								console.log(err);
								response = requestContent.responseText;
							}
							
							WebUtil.setCache(url, response);
							fun(response);
						} else if (error) {
              				error();
            			} else {
              				console.log("Error fetching " + url);
            			}
					}
				};
				requestContent.open("GET", url.indexOf("https://") == 0 ? url : "https://api.github.com/" + url, true);
				requestContent.send();
			} else if (cache) {
				fun(cache.data);
			} else error();
		}, function() {
			if (cache) {
				fun(cache.data);
			} else if (error) {
       			error();
      		} else {
        		console.log("Error fetching request limit for " + url);
      		}
		});
	}
}

GitHubUtil.getGitHubUserInfo = function(url, fun, error) {
	WebUtil.getLinks(function(links) {
		var name = "TheAndroidMaster";
		if (links != null && links.github != null && links.github.name != null)
			name = links.github.name;

		GitHubUtil.getGitHubInfo(StringUtil.format(url, name), fun, error);
	}, error);
}
