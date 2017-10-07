
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

  function onError(status) {
    console.log("Request failed, error " + status);
  }

  function getRequestLimit() {
    var requestContent = new XMLHttpRequest();
    requestContent.onreadystatechange = function () {
      if(requestContent.readyState === 4) {
        if(requestContent.status === 200 || requestContent.status == 0) {
          var obj = JSON.parse(requestContent.responseText);
          console.log(obj.resources.core.remaining + " out of " + obj.resources.core.limit + " requests left");
        } else {
          onError(rawContent.status);
        }
      }
    }
    requestContent.open("GET", "https://api.github.com/rate_limit", true);
    requestContent.send(null);
  }

  function setCache(url, cache) {
    localStorage.setItem(url, new Date().getTime() + ":" + cache);
  }

  function getCache(url) {
    var cache = localStorage.getItem(url);
    if (cache != null && new Date().getTime() - parseInt(cache.substr(0, cache.indexOf(':'))) < 100000) {
      cache = cache.substr(cache.indexOf(':') + 1);
      setCache(url, cache);
      return cache;
    }
  }

  function getPerson(url) {
    var cache = getCache(url);
    if (cache != null) {
        document.getElementById('userlist').innerHTML += cache;
        return;
    }

    var personContent = new XMLHttpRequest();
    personContent.onreadystatechange = function () {
      if(personContent.readyState === 4) {
        getRequestLimit();

        if(personContent.status === 200 || personContent.status == 0) {
          var obj = JSON.parse(personContent.responseText);

          var url = obj.html_url;
          if (obj.blog != null && obj.blog.length > 0) url = obj.blog;

          var name = obj.login;
          if (obj.name != null && obj.name.length > 0) name = obj.name;

          var bio = "This is a person.";
          if (obj.bio != null && obj.bio.length > 0) bio = obj.bio;

          var HTML = getListItem(url, name, bio, true);
          document.getElementById('userlist').innerHTML += HTML;
          setCache(url, HTML);
        } else {
          onError(rawContent.status);
        }
      }
    }
    personContent.open("GET", url, true);
    personContent.send(null);
  }

  function getOrganizations() {
    if (document.getElementById('organizationlist').set != null) return;

    var url = "https://api.github.com/users/TheAndroidMaster/orgs";
    var cache = getCache(url);
    if (cache != null) {
      document.getElementById('organizationlist').innerHTML = cache;
      document.getElementById('organizationlist').set = true;
      return;
    }

    var userContent = new XMLHttpRequest();
    userContent.onreadystatechange = function () {
      if(userContent.readyState === 4) {
        getRequestLimit();

        if(userContent.status === 200 || userContent.status == 0) {
          var obj = JSON.parse(userContent.responseText);
          var HTML = "";

          for (var i = 0; obj[i]; i++) {
						HTML += getListItem("https://github.com/" + obj[i].login, obj[i].login, obj[i].description);
          }

          document.getElementById('organizationlist').innerHTML = HTML;
          document.getElementById('organizationlist').set = true;

          setCache(url, HTML);
        } else {
          onError(rawContent.status);
        }
      }
    }
    userContent.open("GET", url, true);
    userContent.send(null);
  }

  function getRepos() {
    if (document.getElementById('applist').set != null) return;

    var url = "https://api.github.com/users/TheAndroidMaster/repos?per_page=1000";
    var appCache = getCache(url + "-applist");
    var libCache = getCache(url + "-liblist");
    var repoCache = getCache(url + "-repolist");
		var webCache = getCache(url + "-weblist");
    var forkCache = getCache(url + "-forklist");
    if (appCache && libCache && repoCache && webCache && forkCache) {
      document.getElementById('applist').innerHTML = appCache;
      document.getElementById('liblist').innerHTML = libCache;
      document.getElementById('repolist').innerHTML = repoCache;
			document.getElementById('weblist').innerHTML = webCache;
      document.getElementById('forklist').innerHTML = forkCache;

      document.getElementById('applist').set = true;
      return;
    }

    var repoContent = new XMLHttpRequest();
    repoContent.onreadystatechange = function () {
      if(repoContent.readyState === 4) {
        getRequestLimit();

        if(repoContent.status === 200 || repoContent.status == 0) {
          var obj = JSON.parse(repoContent.responseText);
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
              appHTML += getListItem("https://theandroidmaster.github.io/about/#" + obj[i].full_name, obj[i].name, obj[i].description);
            } else if (obj[i].homepage != null && obj[i].homepage.length > 0 && obj[i].homepage.indexOf("https://bintray.com/18jafenn90/maven/") == 0) {
              libHTML += getListItem("https://theandroidmaster.github.io/about/#" + obj[i].full_name, obj[i].name, obj[i].description);
            } else if (obj[i].homepage != null && obj[i].homepage.length > 0 && obj[i].homepage.indexOf("https://theandroidmaster.github.io/") == 0) {
							webHTML += getListItem(obj[i].homepage, obj[i].name, obj[i].description);
						} else {
              var homepage = obj[i].html_url;
              if (obj[i].homepage != null && obj[i].homepage.indexOf("https://theandroidmaster.github.io/") == 0)
                homepage = obj[i].homepage;

              repoHTML += getListItem(homepage, obj[i].name, obj[i].description);
            }
          }

          document.getElementById('applist').innerHTML = appHTML;
          document.getElementById('liblist').innerHTML = libHTML;
          document.getElementById('repolist').innerHTML = repoHTML;
					document.getElementById('weblist').innerHTML = webHTML;
          document.getElementById('forklist').innerHTML = forkHTML;

          setCache(url + "-applist", appHTML);
          setCache(url + "-liblist", libHTML);
          setCache(url + "-repolist", repoHTML);
					setCache(url + "-weblist", webHTML);
          setCache(url + "-forklist", forkHTML);

          document.getElementById('applist').set = true;
        } else {
          onError(rawContent.status);
        }
      }
    }
    repoContent.open("GET", url, true);
    repoContent.send(null);
  }

  function getUsers() {
    if (document.getElementById('userlist').set != null) return;

    var userContent = new XMLHttpRequest();
    userContent.onreadystatechange = function () {
      if(userContent.readyState === 4) {
        getRequestLimit();

        if(userContent.status === 200 || userContent.status == 0) {
          var obj = JSON.parse(userContent.responseText);
          for (var i = 0; true; i++) {
            if (obj[i] == null) break;
            getPerson(obj[i].url);
          }
          document.getElementById('userlist').set = true;
        } else {
          onError(rawContent.status);
        }
      }
    }
    userContent.open("GET", "https://api.github.com/users/TheAndroidMaster/following", true);
    userContent.send(null);
  }

	function getListItem(url, title, subtitle, noanim) {
		return "<div "+ (noanim ? "class=\"noanim\" " : "") + "onclick=\"window.open(\'" + url + "\', \'_blank\');\"><p><a target=\"_blank\" href=\"" + url + "\">" + title + "</a><br>" + subtitle + "</p></div>";
	}
