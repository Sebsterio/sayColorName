// ----------------------- speech detection ----------------------

(function () {
	window.SpeechRecognition =
		window.SpeechRecognition || window.webkitSpeechRecognition;
	const recognition = new SpeechRecognition();
	recognition.interimResults = true;

	recognition.addEventListener("result", (e) => {
		let transcript = [...e.results]
			.map((result) => result[0].transcript)
			.join("")
			.replace(" ", "");

		transcript = transcript.replace(/\s+/gi, "");
		console.log(transcript);
		const match = getMatch(transcript, keywords);

		if (match) updateView(match);
		// if (e.results[0].isFinal) {}
	});

	recognition.addEventListener("end", recognition.start);
	recognition.start();
})();
