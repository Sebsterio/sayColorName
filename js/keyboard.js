(function () {
	let maxKeywordLength;

	// log of keys typed
	let keyLog = [];

	// --------------------------------------------------------

	// Get the length of the longest keyword
	function updateMaxKeywordLength(keywords) {
		return keywords.reduce((acc, keyword) => {
			return acc > keyword.length ? acc : keyword.length;
		}, 0);
	}

	function logKey(e) {
		keyLog.push(e.key);
		// limit keyLog length to that of the longest keyword
		keyLog = keyLog.splice(-maxKeywordLength);
	}

	function handleKey(e) {
		logKey(e);
		const keyLogString = keyLog.join("");
		const match = getMatch(keyLogString, keywords);
		if (match) updateView(match);
	}

	// ------------------------ Init --------------------------

	maxKeywordLength = updateMaxKeywordLength(keywords);
	document.addEventListener("keyup", handleKey);
})();
