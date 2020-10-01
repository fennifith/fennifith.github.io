const _request = require('./request.js')(process.env.GITHUB_TOKEN);
const _cheerio = require('cheerio');

async function getRepo(partialRepo) {
	let repo = await _request.github("repos/" + partialRepo.full_name);
	
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

async function getWebsiteLink(url) {
    let link = {
        name: "Website",
        url: url,
		icon: "/images/ic/launch.svg"
	};
    
	if (url.includes("jfenn.me")) {
		link.icon = "https://jfenn.me/images/favicon-32.ico";
	} else if (url.includes("play.google.com")) {
		link.name = "Google Play";
    	link.icon = "/images/ic/play-store.svg";
    } else if (url.includes("jitpack.io")) {
    	link.name = "JitPack";
    } else if (url.includes("bintray.com")) {
    	link.name = "Bintray";
    } else {
    	link.icon = "https://" + url.split("/")[2] + "/favicon.ico";
    		    
    	let text = await _request.text(url);
    	if (!text)
    	    return link;
    	
        let page = _cheerio.load(text);
        if (!page)
            return link;

        link.name = page("head > title").text().trim();
    
        ['-', ':', '|'].forEach(separator => {
            while (link.name.includes(separator)) {
                let parts = link.name.split(separator);
                if (parts[0].length > parts[1].length)
                    link.name = parts[1].trim();
                else link.name = parts[0].trim();
            }
        });
    }

    return link;
}

async function getLinks(repo) {
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
		let link = await getWebsiteLink(repo.homepage);
		if (link)
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

module.exports = {
    getRepo: getRepo,
    getLinks: getLinks
};
