---
layout: null
---

const types = [
	{% assign types = site.types | sort: 'order' %}
	{% assign length = types.size | minus: 1 %}
	{% for type in types %}
	"{{ type.tag }}"{% unless type.order == length %},{% endunless %}
	{% endfor %}
];

const path = require("path");
const fs = require('fs');
const request = require('sync-request');

let token = null;
try {
	token = fs.readFileSync(path.join(process.env.HOME, "Desktop/github.txt"), 'utf8');
} catch (error) {
	console.error("No GitHub Token:", error);
}

try {
	let repos = JSON.parse(request('GET', "https://api.github.com/users/TheAndroidMaster/repos?per_page=1000", {
		headers: { 
			"User-Agent": "TheAndroidMaster.github.io",
			"Authorization": token ? "token " + token : null
		}
	}).getBody('utf8'));

	for (let i = 0; i < repos.length; i++) {
		if (!repos[i].fork && (!repos[i].description || !repos[i].description.startsWith("("))) {
			let topics = JSON.parse(request('GET', "https://api.github.com/repos/" + repos[i].full_name + "/topics", {
				headers: { 
					"Accept": "application/vnd.github.mercy-preview+json",
					"User-Agent": "TheAndroidMaster.github.io",
					"Authorization": token ? "token " + token : null
				}
			}).getBody('utf8'));

			let type = null;
			for (let i2 = 0; i2 < types.length; i2++) {
				if (topics.names.includes(types[i2])) {
					type = types[i2];
					break;
				}
			}

			if (type) {
				let readme = null;
				try {
					readme = request('GET', "https://raw.githubusercontent.com/" + repos[i].full_name + "/master/README.md").getBody('utf8');
					readme = readme.replace(/(!\[img\]\(.)([A-Za-z\/.?=]{0,})(\))/g, "![img](https://raw.githubusercontent.com/" + repos[i].full_name + "/master/.$2)")
						.replace(/(\[)([A-Za-z]{0,})(\]\(.)([A-Za-z\/.?=]{0,})(\))/g, "[$2](" + repos[i].html_url + "/blob/master/.$4)");
				} catch (error) {
					console.error("NO README:", repos[i].full_name);
					continue;
				}
				
				let repo = JSON.parse(request('GET', "https://api.github.com/repos/" + repos[i].full_name, {
					headers: { 
						"User-Agent": "TheAndroidMaster.github.io",
						"Authorization": token ? "token " + token : null
					}
				}).getBody('utf8'));
				let contributors = JSON.parse(request('GET', "https://api.github.com/repos/" + repos[i].full_name + "/contributors", {
					headers: { 
						"User-Agent": "TheAndroidMaster.github.io",
						"Authorization": token ? "token " + token : null
					}
				}).getBody('utf8'));

				let links = "";
				links += "  - name: GitHub\n"
					+ "    url: " + repo.html_url + "\n"
					+ "    icon: https://github.com/favicon.ico\n";

				if (repo.homepage) {
					if (repo.homepage.includes("jfenn.me")) {
						links += "  - name: Google Play\n"
							+ "    url: " + repo.homepage + "\n"
							+ "    icon: https://jfenn.me/images/favicon-32.ico\n";
					} else if (repo.homepage.includes("play.google.com")) {
						links += "  - name: Google Play\n"
							+ "    url: " + repo.homepage + "\n"
							+ "    icon: https://www.gstatic.com/android/market_images/web/favicon_v2.ico\n";
					} else if (repo.homepage.replace(/[^.]/g, "").length > 1) {
						let name = repo.homepage.substring(repo.homepage.indexOf(".") + 1);
						name = name.substring(0, name.indexOf("."));
						links += "  - name: " + name + "\n"
							+ "    url: " + repo.homepage + "\n"
							+ "    icon: https://" + repo.homepage.split("/")[2] + "/favicon.ico\n";
					} else if (repo.homepage.replace(/[^.]/g, "").length > 0) {
						let name = repo.homepage.substring(repo.homepage.indexOf("/") + 2);
						name = name.substring(0, name.indexOf("."));
						links += "  - name: " + name + "\n"
							+ "    url: " + repo.homepage + "\n"
							+ "    icon: https://" + repo.homepage.split("/")[2] + "/favicon.ico\n";
					} else {
						links += "  - name: Link\n"
							+ "    url: " + repo.homepage + "\n"
							+ "    icon: https://" + repo.homepage.split("/")[2] + "/favicon.ico\n";
					}
				}

				//TODO: read front matter in `readme` to obtain more links

				let people = "";
				for (let i2 = 0; i2 < contributors.length; i2++) {
					people += "  - login: " + contributors[i2].login + "\n"
						+ "    avatar: " + contributors[i2].avatar_url + "\n"
						+ "    url: " + contributors[i2].html_url + "\n";
				}				

				fs.writeFileSync(path.resolve("../../_projects/" + repo.name.toLowerCase() + ".md"), "---\n"
					+ "layout: project\n"
					+ "type: " + type + "\n"
					+ "title: " + repo.name.split("_").join(" ").split("-").join(" ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([A-Z])([A-Z][a-z])/g,"$1 $2") + "\n"
					+ "description: " + repo.description + "\n"
					+ "repo: " + repo.full_name + "\n"
					+ "links:\n" + links
					+ "contributors:\n" + people
					+ "---\n\n" + readme);
			} else console.error("NULL TYPE:", repos[i].full_name);
		}
	}
} catch (error) {
	console.error(error);
}
