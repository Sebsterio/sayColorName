// ----------------------- speech detection ----------------------

(function () {
	window.SpeechRecognition =
		window.SpeechRecognition || window.webkitSpeechRecognition;
	const recognition = new SpeechRecognition();
	recognition.interimResults = true;

	recognition.addEventListener("result", (e) => {
		console.log(e);
		let transcript = [...e.results]
			.map((result) => result[0].transcript)
			.join("")
			.replace(" ", "");

		transcript = transcript.replace(/\s+/gi, "");
		console.log(transcript);

		const match = getMatch(transcript, keywords);

		if (match) updateView(match);
	});

	recognition.addEventListener("end", recognition.start);
	recognition.start();
})();
