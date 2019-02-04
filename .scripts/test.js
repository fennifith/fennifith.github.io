const expect = require('chai').expect;
const _yaml = require("./yaml.js");

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
