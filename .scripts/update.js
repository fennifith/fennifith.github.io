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

const _languages = {
    "Java": true,
    "Kotlin": true,
    "Javascript": true
};

const _path = require("path");
const _fs = require('fs');
const _request = require('./request.js')(process.env.GITHUB_TOKEN);
const _yaml = require('./yaml.js');
const _clone = require('git-clone-sync');
const _javadoc = require('mdjavadoc-api');
const _strings = require('./strings.js');
const _github = require('./github.js');

/**
 * Generate documentation files for the passed
 * repository object. Return true if the files
 * were successfully created, false if not.
 */
function getRepoDocs(repo) {
    if (_languages[repo.language]) {
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
			breadcrumbs: true,
			reg: /.*(\.java|\.kt|\.js)$/,
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

/**
 * Generate wiki files for the passed repository
 * object. Return true if they were created
 * successfully, false if not.
 */
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
					let wiki = _strings.unhighlightize(_fs.readFileSync(wikiDir + "/.temp/" + fileName, "utf8"));
					if (fileName.startsWith("_")) {
						_fs.writeFileSync(wikiDir + "/" + fileName, wiki);
					} else {
						_fs.writeFileSync(wikiDir + "/" + fileName, "---\n"
							+ _yaml.stringify({
								layout: "wiki",
								title: _strings.titleize(fileName.substring(0, fileName.length - 3)),
								languages: Object.keys(repo.languages)
							}) + "\n---\n\n" + wiki);
						if (fileName == "Home.md") {
							isWiki = true;
							
							_fs.writeFileSync(wikiDir + "/index.md", "---\n"
								+ _yaml.stringify({
									layout: "wiki",
									title: _strings.titleize(repo.name) + " Wiki",
									languages: Object.keys(repo.languages),
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

/**
 * Parses the front matter of a file's content.
 * This assumes that the file follows Jekyll's
 * format of containing the YAML matter between
 * "---" sequences at the start of the file.
 *
 * @param file      string: the content of the file.
 */
function parseFrontMatter(file) {
    if (!file || typeof file !== "string")
        return;

    let frontMatter = file.split("---")[1];
    if (!frontMatter)
        return;

    return _yaml.parse(frontMatter);
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

			if (repos[i].pushed_at && repos[i].pushed_at.length > 0) {
				let frontMatter = parseFrontMatter(projectFile);
				if (frontMatter && 'pushed' in frontMatter) {
					let date = new Date(frontMatter.pushed);
					let pushDate = new Date(repos[i].pushed_at);
					if (!isNaN(date) && !isNaN(pushDate) && date >= pushDate) {
						console.log("Skipping " + repos[i].full_name + " - last push was " + repos[i].pushed_at);
						continue;
					}
				}
			}

			let repo = await _github.getRepo(repos[i]);
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
				title: repo.fork && repo.parent ? repo.parent.full_name : _strings.titleize(repo.name),
				description: repo.description ? _strings.safestrize(repo.description) : null,
				icon: repo.meta && repo.meta.icon ? "https://raw.githubusercontent.com/" + repo.full_name + "/master/" + repo.meta.icon : null,
				googleplay: repo.meta && repo.meta.googleplay ? repo.meta.googleplay : null,
				package: repo.meta && repo.meta.package ? repo.meta.package : null,
				repo: repo.full_name,
				git: repo.git_url,
				links: await _github.getLinks(repo),
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
							screenshots.push("https://raw.githubusercontent.com/" + repo.full_name + "/master/" + repo.meta.screenshots[i]);
						}

						return screenshots;
					} else return null;
				})(),
				languages: Object.keys(repo.languages),
				isDocs: getRepoDocs(repo),
				isWiki: getRepoWiki(repo),
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
				+ "---\n\n" + _strings.unhighlightize(readme));
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
