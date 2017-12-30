function createCORSRequest(method, url) {
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

function createElement(html) {
  var fragment = document.createDocumentFragment();
	var temp = document.createElement('div');
	temp.innerHTML = html;
	while (temp.firstChild) {
			fragment.appendChild(temp.firstChild);
	}

	return fragment;
}

function clearElement(element) {
  while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

function onError(status) {
    console.log("Request failed, error " + status);
}

function getRequestLimit(fun, error) {
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
          onError(rawContent.status);
					error();
        }
      }
    }
    requestContent.open("GET", "https://api.github.com/rate_limit", true);
    requestContent.send(null);
}

function setCache(id, cache) {
	if (localStorage)
		localStorage.setItem(id, JSON.stringify({"time": new Date().getTime(), "data": cache}));
}

function getCache(url) {
	if (localStorage) {
        try {
		    return JSON.parse(localStorage.getItem(url));
        } catch (e) {
        }
    }
}

function getGitHubInfo(url, fun, error) {
	if (!error) {
		error = function() {
			document.location.href = "/404";
		};
	}

	var cache = getCache(url);
	if (cache && new Date().getTime() - cache.time < 100000) {
		fun(cache.data);
	} else {
		getRequestLimit(function(remaining) {
			if (remaining > 0) {
				var requestContent = new XMLHttpRequest();
				requestContent.onreadystatechange = function() {
					if (requestContent.readyState === 4) {
						if (requestContent.status === 200 || requestContent.status == 0) {
							var response = JSON.parse(requestContent.responseText);
							setCache(url, response);
							fun(response);
						} else if (error) {
              error();
            } else {
              console.log("Error fetching " + url);
            }
					}
				};
				requestContent.open("GET", url.indexOf("https://api.github.com/") == 0 ? url : "https://api.github.com/" + url, true);
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

function getPerson(url) {
	getGitHubInfo(url, function(obj) {
		var url = obj.html_url;
		if (obj.blog != null && obj.blog.length > 0) url = obj.blog;

		var name = obj.login;
		if (obj.name != null && obj.name.length > 0) name = obj.name;

		var bio = "This is a person.";
		if (obj.bio != null && obj.bio.length > 0) bio = obj.bio;

		var HTML = getListItem(url, name, bio, true);
		document.getElementById('userlist').appendChild(createElement(HTML));
	}, function() {});
}

function getOrganizations() {
    if (document.getElementById('organizationlist').set != null) return;

	getGitHubInfo("users/TheAndroidMaster/orgs", function(obj) {
		var HTML = "";

		for (var i = 0; obj[i]; i++) {
			HTML += getListItem("https://github.com/" + obj[i].login, obj[i].login, obj[i].description);
		}

		var organizationListElement = document.getElementById('organizationlist');
		organizationListElement.style.display = null;
    clearElement(organizationListElement);
		organizationListElement.appendChild(createElement(HTML));
		organizationListElement.set = true;
	}, function() {
		document.getElementById('organizationlist').style.display = "none";
	});
}

function getRepos() {
    if (document.getElementById('applist').set != null) return;

	getGitHubInfo("users/TheAndroidMaster/repos?per_page=1000", function(obj) {
		var repoHTML = "";
		var libHTML = "";
		var webHTML = "";
		var appHTML = "";
		var forkHTML = "";

		for (var i = 0; true; i++) {
			if (obj[i] == null) break;

			if (obj[i].fork) {
				forkHTML += getListItem(obj[i].html_url, obj[i].name, obj[i].description);
			} else if (obj[i].homepage != null && obj[i].homepage.length > 0 && obj[i].homepage.indexOf("https://play.google.com/") == 0) {
				appHTML += getListItem("https://jfenn.me/about/?" + obj[i].full_name, obj[i].name, obj[i].description);
			} else if (obj[i].homepage != null && obj[i].homepage.length > 0 && obj[i].homepage.indexOf("https://bintray.com/18jafenn90/maven/") == 0) {
				libHTML += getListItem("https://jfenn.me/about/?" + obj[i].full_name, obj[i].name, obj[i].description);
			} else if (obj[i].homepage != null && obj[i].homepage.length > 0 && (obj[i].homepage.indexOf("https://theandroidmaster.github.io/") == 0 || obj[i].homepage.indexOf("https://jfenn.me/") == 0) && obj[i].homepage.indexOf("/apps/") == -1) {
				webHTML += getListItem(obj[i].homepage, obj[i].name, obj[i].description);
			} else {
				var homepage = obj[i].html_url;
				if (obj[i].homepage != null && (obj[i].homepage.indexOf("https://theandroidmaster.github.io/") == 0 || obj[i].homepage.indexOf("https://jfenn.me/") == 0))
					homepage = obj[i].homepage;

				repoHTML += getListItem(homepage, obj[i].name, obj[i].description);
			}
		}

    var appListElement = document.getElementById('applist');
    var libListElement = document.getElementById('liblist');
    var repoListElement = document.getElementById('repolist');
    var webListElement = document.getElementById('weblist');
    var forkListElement = document.getElementById('forklist');

    clearElement(appListElement);
    clearElement(libListElement);
    clearElement(repoListElement);
    clearElement(webListElement);
    clearElement(forkListElement);

    appListElement.appendChild(createElement(appHTML));
    libListElement.appendChild(createElement(libHTML));
    repoListElement.appendChild(createElement(repoHTML));
    webListElement.appendChild(createElement(webHTML));
    forkListElement.appendChild(createElement(forkHTML));

		appListElement.set = true;
	});
}

function getUsers() {
    if (document.getElementById('userlist').set != null) return;

	getGitHubInfo("users/TheAndroidMaster/following?per_page=1000", function(obj) {
		for (var i = 0; true; i++) {
			if (obj[i] == null) break;
			getPerson(obj[i].url);
		}

		document.getElementById('userlist').set = true;
	});
 }

function getListItem(url, title, subtitle, noanim) {
	return "<div "+ (noanim ? "class=\"item noanim\" " : "class=\"item\" ") + "onclick=\"window.open(\'" + url + "\', \'_blank\');\"><p><a>" + title + "</a><br>" + subtitle + "</p></div>";
}
