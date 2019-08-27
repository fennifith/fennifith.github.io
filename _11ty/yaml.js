const _yaml = require('js-yaml');

/**
 * Formats a YAML array, with little error checking.
 * Basically just calls formYaml on all the child values
 * and concatenates them into a single string.
 * 
 * @param arr       The array (that is definitely an
 *                  array) to be formatted.
 * @return          A string of the formatted YAML.
 */
function formYamlArray(arr) {
	let str = "";

	arr.forEach((val) => {
		let yaml = formYaml(val, "\n");
		if (yaml === null)
			return;

        if (yaml.startsWith("\n"))
            yaml = yaml.substring(1);

        str += "\n- " + yaml.replace(/\n/g, "\n  ");
	});

	return str;
}

/**
 * Formats a YAML object, with little error checking.
 * Basically just calls formYaml on all the child values
 * and concatenates them into a single string.
 * 
 * @param obj       The object (that is definitely an
 *                  object) to be formatted.
 * @return          A string of the formatted YAML.
 */
function formYamlObject(obj) {
	let str = "";

	for (let key in obj) {
		let yaml = formYaml(obj[key], "\n");
		if (yaml === null)
			continue;

		str += "\n" + key + ": " + yaml.replace(/\n/g, "\n  ");
	}

	return str;
}

/**
 * Creates a YAML representation of an object, array, or
 * other value by iterating recursively through all of its
 * children.
 *
 * @param obj       The object to parse.
 * @param start     The string to start the parsed YAML with
 *                  (but only if it is an object/array).
 * @return          A string of the YAML representation of
 *                  the passed object.
 */
function formYaml(obj, start) {
	if (obj === null)
		return null;

	start = start || "";
    let str = start;

    if (Array.isArray(obj)) {
    	let arrStr = formYamlArray(obj);
    	if (arrStr)
    		str += arrStr;
    	else return null;
    } else if (obj === Object(obj)) {
    	let objStr = formYamlObject(obj);
    	if (objStr)
    		str += objStr;
    	else return null;
    }

    if (str.length > start.length)
        return str.substring(1);
    else {
        return "\"" + obj.toString()
        	.replace(/([^\\])\"/g, "$1\\\"")
            .replace(/\n/g, "\\n") + "\"";
    }
}

module.exports.stringify = formYaml;
module.exports.parse = _yaml.safeLoad;
