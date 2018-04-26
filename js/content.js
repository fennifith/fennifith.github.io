function getPerson(url, element) {
	GitHubUtil.getGitHubInfo(url, function(obj) {
		var url = obj.html_url;
		if (obj.blog != null && obj.blog.length > 0) url = obj.blog;

		var name = obj.login;
		if (obj.name != null && obj.name.length > 0) name = obj.name;

		var bio = "This is a person.";
		if (obj.bio != null && obj.bio.length > 0) bio = obj.bio;

		var HTML = getListItem(url, name, bio, true);
		if (element) {
			element.replaceWith(ElementUtil.createElement(HTML));
		} else {
			document.getElementById('userlist').appendChild(ElementUtil.createElement(HTML));			
		}
	}, function() {});
}

function getOrganizations() {
    if (document.getElementById('organizationlist').set != null) return;

	GitHubUtil.getGitHubInfo("users/TheAndroidMaster/orgs", function(obj) {
		var HTML = "";

		for (var i = 0; obj[i]; i++) {
			HTML += getListItem("https://github.com/" + obj[i].login, obj[i].login, obj[i].description);
		}

		var organizationListElement = document.getElementById('organizationlist');
		organizationListElement.style.display = null;
   	 	ElementUtil.clearElement(organizationListElement);
		organizationListElement.appendChild(ElementUtil.createElement(HTML));
		organizationListElement.set = true;
	}, function() {
		document.getElementById('organizationlist').style.display = "none";
	});
}

function getRepos() {
    if (document.getElementById('applist').set != null) return;

	GitHubUtil.getGitHubInfo("users/TheAndroidMaster/repos?per_page=1000", function(obj) {
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
				appHTML += getListItem("https://jfenn.me/about/?" + obj[i].name, obj[i].name, obj[i].description);
			} else if (obj[i].homepage != null && obj[i].homepage.length > 0 && obj[i].homepage.indexOf("https://bintray.com/18jafenn90/maven/") == 0) {
				libHTML += getListItem("https://jfenn.me/about/?" + obj[i].name, obj[i].name, obj[i].description);
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

	    ElementUtil.clearElement(appListElement);
    	ElementUtil.clearElement(libListElement);
	    ElementUtil.clearElement(repoListElement);
    	ElementUtil.clearElement(webListElement);
    	ElementUtil.clearElement(forkListElement);

	    appListElement.appendChild(ElementUtil.createElement(appHTML));
    	libListElement.appendChild(ElementUtil.createElement(libHTML));
    	repoListElement.appendChild(ElementUtil.createElement(repoHTML));
    	webListElement.appendChild(ElementUtil.createElement(webHTML));
    	forkListElement.appendChild(ElementUtil.createElement(forkHTML));

		appListElement.set = true;
	});
}

function getUsers() {
    if (document.getElementById('userlist').set != null) return;

	GitHubUtil.getGitHubInfo("users/TheAndroidMaster/following?per_page=1000", function(obj) {
		for (var i = 0; true; i++) {
			if (obj[i] == null) break;
			var element = ElementUtil.createElement(getListItem(obj[i].html_url, obj[i].login, null, true, "id=\"user" + obj[i].login + "\""));
			document.getElementById('userlist').appendChild(element);

			const actualElement = document.getElementById("user" + obj[i].login);
			actualElement.url = obj[i].url;
			actualElement.addEventListener("mouseover", function() {
				getPerson(actualElement.url, actualElement);
			}, false);
		}

		document.getElementById('userlist').set = true;
	});
 }

 function getListItem(url, title, subtitle, noanim, attrs) {
 	return "<div " + (attrs ? attrs + " " : " ") + (noanim ? "class=\"item noanim\" " : "class=\"item\" ") + "onclick=\"window.open(\'" + url + "\', \'_blank\');\"><p><a>" + title + "</a>" + (subtitle ? "<br>" + subtitle : "") + "</p></div>";
 }
 