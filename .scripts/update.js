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

const _path = require("path");
const _fs = require('fs');
const _request = require('sync-request');
const _cheerio = require('cheerio');
const _clone = require('git-clone-sync');

function titleize(str) {
	return str.split("_").join(" ").split("-").join(" ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([A-Z])([A-Z][a-z])/g,"$1 $2");
}

function safestrize(str) {
	return "\"" + str.replace(/(\")/g, "\\\"") + "\"";
}

let token = null;
try {
	token = _fs.readFileSync(_path.join(process.env.HOME, "keys/github.txt"), 'utf8');
} catch (error) {
	console.error("No GitHub Token:", error);
}

try {
	let repos = JSON.parse(_request('GET', "https://api.github.com/users/TheAndroidMaster/repos?per_page=1000", {
		headers: { 
			"User-Agent": "TheAndroidMaster.github.io",
			"Authorization": token ? "token " + token : null
		}
	}).getBody('utf8'));

	for (let i = 0; i < repos.length; i++) {
		if (!repos[i].fork && (!repos[i].description || !repos[i].description.startsWith("("))) {
			let topics = JSON.parse(_request('GET', "https://api.github.com/repos/" + repos[i].full_name + "/topics", {
				headers: { 
					"Accept": "application/vnd.github.mercy-preview+json",
					"User-Agent": "TheAndroidMaster.github.io",
					"Authorization": token ? "token " + token : null
				}
			}).getBody('utf8'));

			let type = "undefined";
			for (let i2 = 0; i2 < types.length; i2++) {
				if (topics.names.includes(types[i2])) {
					type = types[i2];
					break;
				}
			}

			let readme = null;
			try {
				readme = _request('GET', "https://raw.githubusercontent.com/" + repos[i].full_name + "/master/README.md").getBody('utf8');
				readme = readme.replace(/(!\[img\]\(.)([A-Za-z\/.?=]{0,})(\))/g, "![img](https://raw.githubusercontent.com/" + repos[i].full_name + "/master/.$2)")
					.replace(/(\[)([A-Za-z.`\s]{0,})(\]\(.)([A-Za-z\/.?=`]{0,})(\))/g, "[$2](" + repos[i].html_url + "/blob/master/.$4)");
			} catch (error) {
				console.error("NO README:", repos[i].full_name);
				continue;
			}
				
			let repo = JSON.parse(_request('GET', "https://api.github.com/repos/" + repos[i].full_name, {
				headers: { 
					"User-Agent": "TheAndroidMaster.github.io",
					"Authorization": token ? "token " + token : null
				}
			}).getBody('utf8'));
				
			let contributors = JSON.parse(_request('GET', "https://api.github.com/repos/" + repos[i].full_name + "/contributors", {
				headers: { 
					"User-Agent": "TheAndroidMaster.github.io",
					"Authorization": token ? "token " + token : null
				}
			}).getBody('utf8'));

			let releases = JSON.parse(_request('GET', "https://api.github.com/repos/" + repos[i].full_name + "/releases", {
				headers: { 
					"User-Agent": "TheAndroidMaster.github.io",
					"Authorization": token ? "token " + token : null
				}
			}).getBody('utf8'));

			let links = "";
			links += "  - name: GitHub\n"
				+ "    url: " + repo.html_url + "\n"
				+ "    icon: https://github.com/favicon.ico\n";

			links += "  - name: Issues\n"
				+ "    url: " + repo.html_url + "/issues\n"
				+ "    icon: /images/ic/bug.svg\n";

			if (repo.has_wiki) {
				links += "  - name: Wiki\n"
					+ "    url: wiki\n"
					+ "    icon: /images/ic/assignment.svg\n"
			}

			if (repo.license && repo.license.key) {
				links += "  - name: " + (repo.license.name ? repo.license.name : "License") + "\n"
					+ "    url: https://choosealicense.com/licenses/" + repo.license.key + "/\n"
					+ "    icon: /images/ic/copyright.svg\n"
			}

			if (repo.homepage) {				
				if (repo.homepage.includes("jfenn.me")) {
					links += "  - name: Website\n"
						+ "    url: " + repo.homepage + "\n"
						+ "    icon: https://jfenn.me/images/favicon-32.ico\n";
				} else if (repo.homepage.includes("play.google.com")) {
					links += "  - name: Google Play\n"
						+ "    url: " + repo.homepage + "\n"
						+ "    icon: /images/ic/play-store.svg\n";
				} else {
					let page = _cheerio.load(_request('GET', repo.homepage).getBody('utf8'));
					let linkTitle = page("head > title").text().trim();
					if (repo.homepage.includes("bintray.com"))
						linkTitle = "Bintray";

					while (linkTitle.includes("-")) {
						let parts = linkTitle.split("-");
						if (parts[0].length > parts[1].length)
							linkTitle = parts[1].trim();
						else linkTitle = parts[0].trim();
					}

					while (linkTitle.includes(":")) {
						let parts = linkTitle.split(":");
						if (parts[0].length > parts[1].length)
							linkTitle = parts[1].trim();
						else linkTitle = parts[0].trim();
					}

					links += "  - name: " + linkTitle + "\n"
						+ "    url: " + repo.homepage + "\n"
						+ "    icon: https://" + repo.homepage.split("/")[2] + "/favicon.ico\n";
				}
			}

			if (releases[0]) {
				for (let i2 = 0; i2 < releases[0].assets.length; i2++) {
					links += "  - name: " + releases[0].assets[i2].name + " (" + releases[0].tag_name + (releases[0].prerelease ? " unstable" : " stable") + ")\n"
						+ "    url: " + releases[0].assets[i2].browser_download_url + "\n"
						+ "    icon: /images/ic/download.svg\n"; 
				}
			}

			//TODO: read front matter in `readme` to obtain more links

			let people = "";
			for (let i2 = 0; i2 < contributors.length; i2++) {
				people += "  - login: " + contributors[i2].login + "\n"
					+ "    avatar: " + contributors[i2].avatar_url + "\n"
					+ "    url: " + contributors[i2].html_url + "\n";
			}				

			_fs.writeFileSync(_path.resolve("../../_projects/" + repo.name.toLowerCase() + ".md"), "---\n"
				+ "layout: project\n"
				+ "type: " + type + "\n"
				+ "title: \"" + titleize(repo.name) + "\"\n"
				+ (repo.description ? "description: " + safestrize(repo.description.split(":").join("&#58;")) + "\n" : "")
				+ "repo: " + repo.full_name + "\n"
				+ "git: " + repo.git_url + "\n"
				+ "links:\n" + links
				+ "contributors:\n" + people
				+ "---\n\n" + readme);
				
			console.log("Fetched project " + repo.full_name);
				
			if (repo.has_wiki) {
				let wikiDir = _path.resolve("../../projects/" + repo.name.toLowerCase() + "/wiki");
				if (!_fs.existsSync(wikiDir)) {
					if (!_fs.existsSync(_path.resolve("../../projects/" + repo.name.toLowerCase())))
						_fs.mkdirSync(_path.resolve("../../projects/" + repo.name.toLowerCase()));
					
					_fs.mkdirSync(wikiDir);
				}
				
				if (!_fs.existsSync(wikiDir + "/.temp"))
					_fs.mkdirSync(wikiDir + "/.temp");
				
				_clone("https://github.com/" + repo.full_name + ".wiki", wikiDir + "/.temp");
				_fs.readdirSync(wikiDir + "/.temp").forEach((fileName) => {
					if (fileName.endsWith(".md")) {
						let wiki = _fs.readFileSync(wikiDir + "/.temp/" + fileName, "utf8");
						_fs.writeFileSync(wikiDir + "/" + fileName, "---\n"
							+ "layout: wiki\n"
							+ "title: " + titleize(fileName.substring(0, fileName.length - 3)) + "\n"
							+ "---\n\n" + wiki);
						
						if (fileName == "Home.md") {
							_fs.writeFileSync(wikiDir + "/index.md", "---\n"
								+ "layout: wiki\n"
								+ "title: " + titleize(repo.name) + " Wiki\n"
								+ "---\n\n" + wiki);
						}
					}
				});
				
				console.log("Fetched project wiki " + repo.full_name);
			}
		}
	}

	let people = JSON.parse(_request('GET', "https://api.github.com/users/TheAndroidMaster/following?per_page=1000", {
		headers: { 
			"User-Agent": "TheAndroidMaster.github.io",
			"Authorization": token ? "token " + token : null
		}
	}).getBody('utf8'));

	for (let i = 0; i < people.length; i++) {
		let person = JSON.parse(_request('GET', "https://api.github.com/users/" + people[i].login, {
			headers: { 
				"User-Agent": "TheAndroidMaster.github.io",
				"Authorization": token ? "token " + token : null
			}
		}).getBody('utf8'));

		_fs.writeFileSync(_path.resolve("../../_people/" + person.login.toLowerCase() + ".md"), "---\n"
			+ "title: " + (person.name ? person.name : person.login) + "\n"
			+ "description: " + (person.bio && person.bio.trim().length > 0 ? person.bio.trim().replace(/(\n)/g, " ").replace(/(\:)/g, "&#58;") : "This is a person.") + "\n"
			+ "avatar: " + person.avatar_url + "\n"
			+ "link: " + person.html_url + "\n"
			+ "---\n");

		console.log("Fetched person " + person.login);
	}

	let orgs = JSON.parse(_request('GET', "https://api.github.com/users/TheAndroidMaster/orgs", {
		headers: { 
			"User-Agent": "TheAndroidMaster.github.io",
			"Authorization": token ? "token " + token : null
		}
	}).getBody('utf8'));

	for (let i = 0; i < orgs.length; i++) {
		_fs.writeFileSync(_path.resolve("../../_orgs/" + orgs[i].login.toLowerCase() + ".md"), "---\n"
			+ "title: " + orgs[i].login + "\n"
			+ "description: " + (orgs[i].description ? orgs[i].description : "Things happen.") + "\n"
			+ "avatar: " + orgs[i].avatar_url + "\n"
			+ "link: https://github.com/" + orgs[i].login + "\n"
			+ "---\n");

		console.log("Fetched org " + orgs[i].login);
	}
} catch (error) {
	console.error(error);
}
