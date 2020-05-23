// Get the longest color name matching the ending of the string
function getMatch(string, keywords) {
	let longestMatch = "";
	keywords.forEach((keyword) => {
		const regex = new RegExp(keyword + "$", "i");
		if (string.match(regex) && keyword.length > longestMatch.length) {
			longestMatch = keyword;
		}
	});

	return longestMatch;
}
