(function () {
	const container = document.querySelector(".colors-container");

	let fontSize = 20;

	// ----------------------------------------------------

	function generateColorElements(colors) {
		return colors.map((color) => {
			const el = document.createElement("SPAN");
			el.classList.add("color");
			el.innerText = color + " ";

			return { name: color, el };
		});
	}

	function insertColorElements(colors) {
		colors.forEach((color) => container.appendChild(color.el));
	}

	// function tryFontSize(val = 1) {
	// 	fontSize = fontSize + val;
	// 	document.documentElement.style.setProperty(`--font-size`, fontSize + "px");
	// 	setTimeout(() => {
	// 		console.log(container.offsetHeight, window.innerHeight);
	// 		if (container.offsetHeight < window.innerHeight) tryFontSize();
	// 	}, 0);
	// }
	// tryFontSize();

	// ---------------------- Init -----------------------

	window.colors = generateColorElements(keywords);
	insertColorElements(colors);
})();
