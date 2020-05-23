(function () {
	const message = document.querySelector(".message-container");

	// ------------------------ Aux ------------------------

	// Invert hue
	function invert(hue) {
		hue += 180;
		if (hue > 360) hue -= 360;
		return hue;
	}

	// Lower the value if high; increase it if low
	function taper(val) {
		if (val > 50) val -= 10;
		else val += 10;

		return Math.round(val);
	}

	function opposite(val) {
		if (val > 50) return 0;
		return 100;
	}

	// Make hsl string from values
	function getHslStr(hue, sat, lum) {
		return `hsl(${hue},${sat}%,${lum}%)`;
	}

	// ------------------------ Model ------------------------

	window.updateView = function (newColor) {
		// // hue: [0-360], sat: [0-100], lum: [0-100]
		const { hue, sat, lum } = nameToHSL(newColor);

		console.log(newColor, hue, sat, lum);

		const inverted = getHslStr(invert(hue), sat, opposite(lum));
		const tapered = getHslStr(hue, taper(sat), taper(lum));

		document.documentElement.style.setProperty(`--bg-color`, newColor);
		document.documentElement.style.setProperty(`--text-color`, tapered);
		document.documentElement.style.setProperty(`--active-color`, inverted);

		colors.forEach((color, i) => {
			if (color.name === newColor) color.el.classList.add("active");
			else color.el.classList.remove("active");
		});

		message.classList.add("hidden");
		setTimeout(() => {
			message.style.display = "none";
		}, 2000);
	};
})();
