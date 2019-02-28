const expect = require('chai').expect;
const _yaml = require("./yaml.js");
const _strings = require("./strings.js");
const _github = require("./github.js");

describe("YAML Formatter (./yaml.js)", () => {
	it("should surround strings with quotes", () => {
		expect(_yaml.stringify("hi")).to.be.equal("\"hi\"");
	});

	it("should double-escape quotations in strings", () => {
		expect(_yaml.stringify("this is a \"quotation\"")).to.be.equal("\"this is a \\\"quotation\\\"\"");
	});

	it("returns null for empty objects", () => {
		expect(_yaml.stringify({})).to.be.equal(null);
	});

	it("returns null for empty arrays", () => {
		expect(_yaml.stringify([])).to.be.equal(null);
	});

	it("excludes null values from objects", () => {
		expect(_yaml.stringify({
			something: "hi",
			nonexistent: null
		})).to.be.equal("something: \"hi\"");
	});

	it("excludes null values from arrays", () => {
		expect(_yaml.stringify([null, "hi"])).to.be.equal("- \"hi\"");	
	});

	it("formats nested objects", () => {
		expect(_yaml.stringify({
			something: "hi",
			nested: {
				something: "hi again",
				nonexistent: null
			}
		})).to.be.equal(
			"something: \"hi\"\n" +
			"nested: \n" +
			"  something: \"hi again\""
		);
	});
});

describe("titleize() Title Formatting (./strings.js)", () => {
	it("replaces dashes with spaces", () => {
		expect(_strings.titleize("Something-Thing")).to.be.equal("Something Thing");
	});

	it("replaces underscores with spaces", () => {
		expect(_strings.titleize("Something_Thing")).to.be.equal("Something Thing");
	});

	it("capitalizes words split by hyphens", () => {
		expect(_strings.titleize("hyphen-splitting")).to.be.equal("Hyphen Splitting");
	});

	it("doesn't capitalize short words", () => {
		expect(_strings.titleize("capitalizing_the_short_words")).to.be.equal("Capitalizing the Short Words");
	});

	it("splits words in CamelCase", () => {
		expect(_strings.titleize("CamelCaseTitle")).to.be.equal("Camel Case Title");
	});

	it("capitalizes the first letter of camelCase", () => {
		expect(_strings.titleize("camelCaseTitle")).to.be.equal("Camel Case Title");
	});

	it("ignores acronyms in camelCaseSE", () => {
		expect(_strings.titleize("CamelCaseACRONYM")).to.be.equal("Camel Case ACRONYM");
	});

	it("separates words after an acronym", () => {
		expect(_strings.titleize("ACRonym")).to.be.equal("AC Ronym");
	});
});

describe("safestrize() String Escaping (./strings.js)", () => {
	it("should escape quotes", () => {
		expect(_strings.safestrize("This is \"something\"")).to.be.equal("This is \\\"something\\\"");
	});

	it("should replace colons with their html char sequences", () => {
		expect(_strings.safestrize("Something: yes")).to.be.equal("Something&#58; yes");
	});
});

describe("unhighlightize() Markdown Code Block Formatting (./strings.js)", () => {
	it("should explicitly specify 'nohighlight' on unhighlighted code blocks", () => {
		expect(_strings.unhighlightize(
			"\n\n" +
			"```\n" +
			"Some random unhighlighted stuff.\n" +
			"```"
		)).to.be.equal(
			"\n\n" +
			"```nohighlight\n" +
			"Some random unhighlighted stuff.\n" +
			"```"
		);
	});
	
	it("should leave highlighted code blocks unchanged", () => {
		expect(_strings.unhighlightize(
			"```java\n" +
			"thisIsSomeJavaCode();\n" +
			"```"
		)).to.be.equal(
			"```java\n" +
			"thisIsSomeJavaCode();\n" +
			"```"
		);
	});
});

describe("getRepo() GitHub repo fetcher (./github.js)", (strings) => {
    it("should fetch repository content without a terrible failure", async () => {
        expect(await _github.getRepo({
            full_name: "fennifith/fennifith.github.io"
        })).to.be.ok;
    });
});

describe("getRepoLinks() GitHub link finder (./github.js)", (strings) => {
    it("should generate basic links without failure", async () => {
        expect(await _github.getLinks({
            html_url: "https://example.com",
            releases: []
        })).to.be.ok;
    });

    it("should fetch info from other pages", async () => {
        expect(await _github.getLinks({
            html_url: "https://example.com",
            homepage: "https://example.com",
            releases: []
        })).to.include.deep.members([{
            name: "Example Domain",
            url: "https://example.com",
            icon: "https://example.com/favicon.ico"
        }]);
    });
});
