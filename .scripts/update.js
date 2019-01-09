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
const _request = require('then-request');
const _cheerio = require('cheerio');
const _yaml = require('js-yaml');
const _clone = require('git-clone-sync');
const _javadoc = require('mdjavadoc-api');

function titleize(str) {
	return str.split("_").join(" ").split("-").join(" ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([A-Z])([A-Z][a-z])/g,"$1 $2");
}

function safestrize(str) {
	return "\"" + str.replace(/(\")/g, "\\\"") + "\"";
}

function unhighlightize(str) {
	return str.replace(/(\n{2,})\`{3} *(\n{1,})/g, "$1```nohighlight$2");
}

function request(url, headers, data) {
	return _request('GET', url, {
		headers: headers,
		json: data
	}).then(result => {
		return result.getBody('utf8');
	}).catch(err => null);
}

function jsonRequest(url, headers, data) {
	return request(url, headers, data).then(result => {
		return JSON.parse(result);
	}).catch(err => null);
}

function yamlRequest(url, headers, data) {
	return request(url, headers, data).then(result => {
		return _yaml.safeLoad(result);
	}).catch(err => null);
}

function githubRequest(endpoint, headers, data) {
	return jsonRequest("https://api.github.com/" + endpoint, Object.assign({
		"User-Agent": "fennifith",
		"Authorization": token ? "token " + token : null
	}, headers), data);
}

let token = process.env.GITHUB_TOKEN;

async function main() {
	{% assign github = site.links | where: "title", "github" | first %}

	let repos = await githubRequest("users/{{ github.name }}/repos?per_page=1000");

	for (let i = 0; i < repos.length; i++) {
		if (repos[i].description && !repos[i].description.startsWith("(")) {
			let projectFile = null;
			try {
				projectFile = _fs.readFileSync(_path.resolve("../../_projects/" + repos[i].name.toLowerCase() + ".md"), "utf8");
			} catch (e) {
				console.log("New project: " + repos[i].full_name);
			}

			if (projectFile && repos[i].pushed_at && repos[i].pushed_at.length > 0) {
				let frontMatter = projectFile.split("---")[1];
				if (frontMatter && frontMatter.includes("pushed: ")) {
					let date = new Date(frontMatter.split("pushed: ")[1].split("\n")[0]);
					let pushDate = new Date(repos[i].pushed_at);
					if (!isNaN(date) && !isNaN(pushDate) && date >= pushDate) {
						console.log("Skipping " + repos[i].full_name + " - last push was " + repos[i].pushed_at);
						continue;
					}
				}
			}

			let topics = await githubRequest("repos/" + repos[i].full_name + "/topics", {
				"Accept": "application/vnd.github.mercy-preview+json"
			});

			let type = "undefined";
			for (let i2 = 0; i2 < types.length; i2++) {
				if (topics.names.includes(types[i2])) {
					type = types[i2];
					break;
				}
			}

			let readme = await request("https://raw.githubusercontent.com/" + repos[i].full_name + "/master/README.md");
			if (readme) {
				readme = readme.replace(/\[([A-Za-z0-9.`'" ]*)\]\((\.[A-Za-z0-9\/\-\.\?\=]*)\)/g, "[$1](" + repos[i].html_url + "/blob/master/$2)");
			} else {
				console.error("NO README:", repos[i].full_name);
				continue;
			}

			let repo = await githubRequest("repos/" + repos[i].full_name);
			let contributors = await githubRequest("repos/" + repos[i].full_name + "/contributors");
			let releases = await githubRequest("repos/" + repos[i].full_name + "/releases");
			let languages = await githubRequest("repos/" + repos[i].full_name + "/languages");

			let links = "";
			links += "  - name: GitHub\n"
				+ "    url: " + repo.html_url + "\n"
				+ "    icon: https://github.com/favicon.ico\n";

			links += "  - name: Issues\n"
				+ "    url: " + repo.html_url + "/issues\n"
				+ "    icon: /images/ic/bug.svg\n";

			if (repo.license && repo.license.key) {
				links += "  - name: " + (repo.license.name ? repo.license.name : "License") + "\n"
					+ "    url: https://choosealicense.com/licenses/" + repo.license.key + "/\n"
					+ "    icon: /images/ic/copyright.svg\n"
			}

			if (repo.homepage && !repo.fork) {
				if (repo.homepage.includes("jfenn.me")) {
					links += "  - name: Website\n"
						+ "    url: " + repo.homepage + "\n"
						+ "    icon: https://jfenn.me/images/favicon-32.ico\n";
				} else if (repo.homepage.includes("play.google.com")) {
					links += "  - name: Google Play\n"
						+ "    url: " + repo.homepage + "\n"
						+ "    icon: /images/ic/play-store.svg\n";
				} else if (repo.homepage.includes("jitpack.io")) {
					links += "  - name: JitPack\n"
						+ "    url: " + repo.homepage + "\n"
						+ "    icon: /images/ic/launch.svg\n";
				} else {
					let page = _cheerio.load(await request(repo.homepage));
					let linkTitle = page("head > title").text().trim();
					if (repo.homepage.includes("bintray.com"))
						linkTitle = "Bintray";

					['-', ':', '|'].forEach(separator => {
						while (linkTitle.includes(separator)) {
							let parts = linkTitle.split(separator);
							if (parts[0].length > parts[1].length)
								linkTitle = parts[1].trim();
							else linkTitle = parts[0].trim();
						}
					});

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

			let meta = await yamlRequest("https://raw.githubusercontent.com/" + repo.full_name + "/master/.meta.yml");

			let screenshots = "";
			for (let i2 = 0; meta && meta.screenshots && i2 < meta.screenshots.length; i2++) {
				screenshots += "  - \"https://raw.githubusercontent.com/" + repo.full_name + "/master/" + meta.screenshots[i2] + "\"\n";
			}

			let people = "";
			for (let i2 = 0; i2 < contributors.length; i2++) {
				people += "  - login: " + contributors[i2].login + "\n"
					+ "    avatar: " + contributors[i2].avatar_url + "\n"
					+ "    url: " + contributors[i2].html_url + "\n";
			}

			let langs = "";
			for (let language in languages) {
				langs += "  - " + language + "\n";
			}

			console.log("Fetched project " + repo.full_name);

			let isDocs = false;
			if (repo.language == "Java" && !repo.fork) {
				let docsDir = _path.resolve("../../projects/" + repo.name.toLowerCase() + "/docs");
				if (!_fs.existsSync(docsDir)) {
					if (!_fs.existsSync(_path.resolve("../../projects/" + repo.name.toLowerCase())))
						_fs.mkdirSync(_path.resolve("../../projects/" + repo.name.toLowerCase()));

					_fs.mkdirSync(docsDir);
				}

				if (!_fs.existsSync(docsDir + "/.temp"))
					_fs.mkdirSync(docsDir + "/.temp");

				_clone("https://github.com/" + repo.full_name, docsDir + "/.temp");
				let files = _javadoc.generateMarkdownFiles(docsDir + "/.temp", docsDir, {
					reg: repo.language == "Java" ? /.*(\.java)$/ : /.*(\.js)$/,
					breadcrumbs: true,
					index: "index.md",
					template: "../../.scripts/.docs.template.md",
					indexTemplate: "../../.scripts/.docs-index.template.md",
					sourcePrefix: "https://github.com/" + repo.full_name + "/blob/master"
				});

				isDocs = files.length > 0;
				console.log("Generated project docs " + repo.full_name);
			}

			let isWiki = false;
			if (repo.has_wiki && !repo.fork) {
				let wikiDir = _path.resolve("../../projects/" + repo.name.toLowerCase() + "/wiki");
				if (!_fs.existsSync(wikiDir)) {
					if (!_fs.existsSync(_path.resolve("../../projects/" + repo.name.toLowerCase())))
						_fs.mkdirSync(_path.resolve("../../projects/" + repo.name.toLowerCase()));

					_fs.mkdirSync(wikiDir);
				}

				if (!_fs.existsSync(wikiDir + "/.temp"))
					_fs.mkdirSync(wikiDir + "/.temp");

				_clone("https://github.com/" + repo.full_name + ".wiki", wikiDir + "/.temp");
				if (_fs.existsSync(wikiDir + "/.temp")) {
					_fs.readdirSync(wikiDir + "/.temp").forEach((fileName) => {
						if (fileName.endsWith(".md")) {
							let wiki = unhighlightize(_fs.readFileSync(wikiDir + "/.temp/" + fileName, "utf8"));
							if (fileName.startsWith("_")) {
								_fs.writeFileSync(wikiDir + "/" + fileName, wiki);
							} else {
								_fs.writeFileSync(wikiDir + "/" + fileName, "---\n"
									+ "layout: wiki\n"
									+ "title: " + titleize(fileName.substring(0, fileName.length - 3)) + "\n"
									+ "languages:\n" + langs
									+ "---\n\n" + wiki);

								if (fileName == "Home.md") {
									isWiki = true;
									_fs.writeFileSync(wikiDir + "/index.md", "---\n"
										+ "layout: wiki\n"
										+ "title: " + titleize(repo.name) + " Wiki\n"
										+ "languages:\n" + langs
										+ "project: " + repo.name.toLowerCase() + "\n"
										+ "---\n\n" + wiki);
								}
							}
						}
					});

					console.log("Fetched project wiki " + repo.full_name);
				}
			}

			_fs.writeFileSync(_path.resolve("../../_projects/" + repo.name.toLowerCase() + ".md"), "---\n"
				+ "layout: project\n"
				+ "type: " + type + "\n"
				+ "title: \"" + (repo.fork && repo.parent ? repo.parent.full_name : titleize(repo.name)) + "\"\n"
				+ (repo.description ? "description: " + safestrize(repo.description.split(":").join("&#58;")) + "\n" : "")
				+ (meta && meta.icon ? "icon: \"https://raw.githubusercontent.com/" + repo.full_name + "/master/" + meta.icon + "\"\n" : "")
				+ "repo: " + repo.full_name + "\n"
				+ "git: " + repo.git_url + "\n"
				+ "links:\n" + links
				+ "contributors:\n" + people
				+ "isDocs: " + isDocs + "\n"
				+ "isWiki: " + isWiki + "\n"
				+ "languages:\n" + langs
				+ (screenshots.length > 0 ? "screenshots:\n" + screenshots : "")
				+ (repo.pushed_at && repo.pushed_at.length > 0 ? "pushed: " + repo.pushed_at + "\n" : "")
				+ "---\n\n" + unhighlightize(readme));
		}
	}

	let people = await githubRequest("users/{{ github.name }}/following?per_page=1000");

	for (let i = 0; i < people.length; i++) {
		let person = await githubRequest("users/" + people[i].login);

		_fs.writeFileSync(_path.resolve("../../_people/" + person.login.toLowerCase() + ".md"), "---\n"
			+ "title: " + (person.name ? person.name : person.login) + "\n"
			+ "description: " + (person.bio && person.bio.trim().length > 0 ? person.bio.trim().replace(/(\n)/g, " ").replace(/(\:)/g, "&#58;") : "This is a person.") + "\n"
			+ "avatar: " + person.avatar_url + "\n"
			+ "link: " + person.html_url + "\n"
			+ "---\n");

		console.log("Fetched person " + person.login);
	}

	let orgs = await githubRequest("users/{{ github.name }}/orgs");

	for (let i = 0; i < orgs.length; i++) {
		_fs.writeFileSync(_path.resolve("../../_orgs/" + orgs[i].login.toLowerCase() + ".md"), "---\n"
			+ "title: " + orgs[i].login + "\n"
			+ "description: " + (orgs[i].description ? orgs[i].description : "Things happen.") + "\n"
			+ "avatar: " + orgs[i].avatar_url + "\n"
			+ "link: https://github.com/" + orgs[i].login + "\n"
			+ "---\n");

		console.log("Fetched org " + orgs[i].login);
	}
}

try {
	main();
} catch (err) {
	console.error(err);
}
