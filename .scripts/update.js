---
layout: null
---

const _types = [
	{% assign types = site.types | sort: 'order' %}
	{% assign length = types.size | minus: 1 %}
	{% for type in types %}
	"{{ type.tag }}"{% unless type.order == length %},{% endunless %}
	{% endfor %}
];

const _path = require("path");
const _fs = require('fs');
const _request = require('./request.js')(process.env.GITHUB_TOKEN);
const _yaml = require('./yaml.js');
const _cheerio = require('cheerio');
const _clone = require('git-clone-sync');
const _javadoc = require('mdjavadoc-api');

function titleize(str) {
	return str.split("_").join(" ").split("-").join(" ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([A-Z])([A-Z][a-z])/g,"$1 $2");
}

function safestrize(str) {
	return str.replace(/(\")/g, "\\\"").replace(/(\:)/g, "&#58;");
}

function unhighlightize(str) {
	return str.replace(/(\n{2,})\`{3} *(\n{1,})/g, "$1```nohighlight$2");
}

async function getRepo(repo) {
	let repo = await _request.github("repos/" + repo.full_name);
	
	repo.contributors = await _request.github("repos/" + repo.full_name + "/contributors");
	for (let i in repo.contributors) {
		repo.contributors[i] = await _request.github("users/" + repo.contributors[i].login) || repo.contributors[i];
	}
	
	repo.releases = await _request.github("repos/" + repo.full_name + "/releases") || repo.releases;
	repo.languages = await _request.github("repos/" + repo.full_name + "/languages") || repo.languages;
	repo.meta = await _request.yaml("https://raw.githubusercontent.com/" + repo.full_name + "/master/.meta.yml");
	repo.topics = await _request.github("repos/" + repo.full_name + "/topics", {
		"Accept": "application/vnd.github.mercy-preview+json"
	});

	return repo;
}

async function getRepoLinks(repo) {
	let links = [
		{
			name: "GitHub",
			url: repo.html_url,
			icon: "https://github.com/favicon.ico"
		},
		{
			name: "Issues",
			url: repo.html_url + "/issues",
			icon: "/images/ic/bug.svg"
		}
	];

	if (repo.license && repo.license.key) {
		links.push({
			name: repo.license.name ? repo.license.name : "License",
			url: "https://choosealicense.com/licenses/" + repo.license.key + "/",
			icon: "/images/ic/copyright.svg"
		});
	}

	if (repo.homepage && !repo.fork) {
		let link = {
			name: "Website",
			url: repo.homepage,
			icon: "/images/ic/launch.svg"
		};

		if (repo.homepage.includes("jfenn.me")) {
			link.icon = "https://jfenn.me/images/favicon-32.ico";
		} else if (repo.homepage.includes("play.google.com")) {
			link.name = "Google Play";
			link.icon = "/images/ic/play-store.svg";
		} else if (repo.homepage.includes("jitpack.io")) {
			link.name = "JitPack";
		} else if (repo.homepage.includes("bintray.com")) {
			link.name = "Bintray";
		} else {
			let page = _cheerio.load(await _request.text(repo.homepage));
			link.name = page("head > title").text().trim();

			['-', ':', '|'].forEach(separator => {
				while (link.name.includes(separator)) {
					let parts = link.name.split(separator);
					if (parts[0].length > parts[1].length)
						link.name = parts[1].trim();
					else link.name = parts[0].trim();
				}
			});

			link.icon = "https://" + repo.homepage.split("/")[2] + "/favicon.ico";
		}

		links.push(link);
	}

	for (let i2 = 0; repo.releases[0] && i2 < repo.releases[0].assets.length; i2++) {
		links.push({
			name: repo.releases[0].assets[i2].name + " (" + repo.releases[0].tag_name + (repo.releases[0].prerelease ? " unstable" : " stable") + ")",
			url: repo.releases[0].assets[i2].browser_download_url,
			icon: "/images/ic/download.svg"						
		});
	}

	return links;
}

function getRepoDocs(repo) {
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

		console.log("Generated project docs " + repo.full_name);
		return true;
	}

	return false;
}

function getRepoWiki(repo) {
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
							+ _yaml.stringify({
								layout: "wiki",
								title: titleize(fileName.substring(0, fileName.length - 3)),
								languages: content.languages
							}) + "\n---\n\n" + wiki);
						if (fileName == "Home.md") {
							isWiki = true;
							
							_fs.writeFileSync(wikiDir + "/index.md", "---\n"
								+ _yaml.stringify({
									layout: "wiki",
									title: titleize(repo.name) + " Wiki",
									languages: content.languages,
									project: repo.name.toLowerCase()
								}) + "\n---\n\n" + wiki);
						}
					}
				}
			});
			
			console.log("Fetched project wiki " + repo.full_name);
		}
	}

	return isWiki;
}

async function main() {
	{% assign github = site.links | where: "title", "github" | first %}

	let repos = await _request.github("users/{{ github.name }}/repos?per_page=1000");

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

			console.log(repo);
			repo = await getRepo(repos[i]);
			if (!repo) {
				console.log("Failed to obtain repository info.");
				continue;
			}

			let content = {
				layout: "project",
				type: (() => {
					for (let i in _types) {
						if (repo.topics.names.includes(_types[i]))
							return _types[i];
					}

					return "undefined";
				})(),
				title: repo.fork && repo.parent ? repo.parent.full_name : titleize(repo.name),
				description: repo.description ? safestrize(repo.description) : null,
				icon: repo.meta && repo.meta.icon ? "https://raw.githubusercontent.com/" + repo.full_name + "/master/" + repo.meta.icon : null,
				repo: repo.full_name,
				git: repo.git_url,
				links: await getRepoLinks(repo),
				contributors: (() => {
					let contributors = [];
					
					for (let i in repo.contributors) {
						contributors.push({
							login: repo.contributors[i].login,
							avatar: repo.contributors[i].avatar_url,
							url: repo.contributors[i].html_url
						})
					}

					return contributors;
				})(),
				screenshots: (() => {
					if (repo.meta && repo.meta.screenshots) {
						let screenshots = [];

						for (let i in repo.meta.screenshots) {
							screenshots.push("https://raw.githubusercontent.com/" + repo.full_name + "/master/" + meta.screenshots[i]);
						}

						return screenshots;
					} else return null;
				})(),
				languages: Object.keys(repo.languages),
				isDocs: getRepoDocs(repo),
				isWiki: getRepoWiki(wiki),
				pushed: repo.pushed_at && repo.pushed_at.length > 0 ? repo.pushed_at : null
			};

			console.log("Fetched project " + repo.full_name);

			let readme = await _request.text("https://raw.githubusercontent.com/" + repos[i].full_name + "/master/README.md");
			if (readme) {
				readme = readme.replace(/\[([A-Za-z0-9.`'" ]*)\]\((\.[A-Za-z0-9\/\-\.\?\=]*)\)/g, "[$1](" + repos[i].html_url + "/blob/master/$2)");
			} else {
				console.error("NO README:", repos[i].full_name);
				continue;
			}

			_fs.writeFileSync(_path.resolve("../../_projects/" + repo.name.toLowerCase() + ".md"), "---\n"
				+ _yaml.stringify(content) + "\n"
				+ "---\n\n" + unhighlightize(readme));
		}
	}

	let people = await _request.github("users/{{ github.name }}/following?per_page=1000");

	for (let i = 0; i < people.length; i++) {
		let person = await _request.github("users/" + people[i].login);

		_fs.writeFileSync(_path.resolve("../../_people/" + person.login.toLowerCase() + ".md"), "---\n"
			+ _yaml.stringify({
				title: person.name ? person.name : person.login,
				description: person.bio && person.bio.trim().length > 0 ? person.bio.trim().replace(/(\n)/g, " ").replace(/(\:)/g, "&#58;") : "This is a person.",
				avatar: person.avatar_url,
				link: person.html_url
			}) + "\n---\n");

		console.log("Fetched person " + person.login);
	}

	let orgs = await _request.github("users/{{ github.name }}/orgs");

	for (let i = 0; i < orgs.length; i++) {
		_fs.writeFileSync(_path.resolve("../../_orgs/" + orgs[i].login.toLowerCase() + ".md"), "---\n"
			+ _yaml.stringify({
				title: orgs[i].login,
				description: orgs[i].description ? orgs[i].description : "Things happen.",
				avatar: orgs[i].avatar_url,
				link: "https://github.com/" + orgs[i].login
			}) + "\n---\n");

		console.log("Fetched org " + orgs[i].login);
	}
}

try {
	main();
} catch (err) {
	console.error(err);
}
