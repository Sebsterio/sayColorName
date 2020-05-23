(function () {
	function CalculateLightness({ R, G, B }) {
		let Max = 0.0;
		let Min = 0.0;

		let fR = R / 255.0;
		let fG = G / 255.0;
		let fB = B / 255.0;

		if (fR >= fG && fR >= fB) Max = fR;
		else if (fG >= fB && fG >= fR) Max = fG;
		else if (fB >= fG && fB >= fR) Max = fB;

		if (fR <= fG && fR <= fB) Min = fR;
		else if (fG <= fB && fG <= fR) Min = fG;
		else if (fB <= fG && fB <= fR) Min = fB;

		let Lightness = (Min + Max) / 2.0;

		return Lightness;
	}

	function CalculateSaturation({ R, G, B }) {
		let Max = 0.0;
		let Min = 0.0;

		let fR = R / 255.0;
		let fG = G / 255.0;
		let fB = B / 255.0;

		if (fR >= fG && fR >= fB) Max = fR;
		else if (fG >= fB && fG >= fR) Max = fG;
		else if (fB >= fG && fB >= fR) Max = fB;

		if (fR <= fG && fR <= fB) Min = fR;
		else if (fG <= fB && fG <= fR) Min = fG;
		else if (fB <= fG && fB <= fR) Min = fB;

		let Lightness = CalculateLightness(R, G, B);

		let Saturation;

		if (Max == Min) {
			Saturation = 0;
		} else {
			if (Lightness < 0.5) {
				Saturation = (Max - Min) / (Max + Min);
			} else {
				Saturation = (Max - Min) / (2.0 - Max - Min);
			}
		}

		return Saturation;
	}

	function CalculateHue({ R, G, B }) {
		let Max = 0.0;
		let Min = 0.0;

		let fR = R / 255.0;
		let fG = G / 255.0;
		let fB = B / 255.0;

		if (fR >= fG && fR >= fB) Max = fR;
		else if (fG >= fB && fG >= fR) Max = fG;
		else if (fB >= fG && fB >= fR) Max = fB;

		if (fR <= fG && fR <= fB) Min = fR;
		else if (fG <= fB && fG <= fR) Min = fG;
		else if (fB <= fG && fB <= fR) Min = fB;

		let Hue;

		if (Max == Min) {
			Hue = 0;
		} else {
			if (Max == fR) {
				Hue = (fG - fB) / (Max - Min);
			} else if (Max == fG) {
				Hue = 2.0 + (fB - fR) / (Max - Min);
			} else if (Max == fB) {
				Hue = 4.0 + (fR - fG) / (Max - Min);
			}

			Hue *= 60.0;

			if (Hue < 0.0) {
				Hue += 360.0;
			}
		}

		return Hue;
	}

	function RGBToHSL(rgb) {
		rgb = rgb.replace("rgb(", "").replace(")", "").replace(" ", "").split(",");
		const rgbObj = {
			R: rgb[0],
			G: rgb[1],
			B: rgb[2],
		};
		return {
			hue: Math.round(CalculateHue(rgbObj)),
			sat: Math.round(CalculateSaturation(rgbObj) * 100),
			lum: Math.round(CalculateLightness(rgbObj) * 100),
		};
	}

	function nameToRGB(colorName) {
		d = document.createElement("div");
		d.style.color = colorName;
		document.body.appendChild(d);
		return window.getComputedStyle(d).color;
	}

	window.nameToHSL = function (colorName) {
		return RGBToHSL(nameToRGB(colorName));
	};
})();
