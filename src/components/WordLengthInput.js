export default function WordlengthInput({
	wordLength,
	setWordLength,
	initializeStringAndArray,
}) {
	function changeWordLength(event) {
		event.preventDefault();
		let lengthValue = event.target.value;
		setWordLength(lengthValue);
		initializeStringAndArray(lengthValue);
	}

	return (
		<div>
			<label>Word Length:</label>
			<input
				className="rounded"
				type="number"
				size="2"
				min="0"
				max="47"
				value={wordLength}
				onChange={changeWordLength}
			/>
		</div>
	);
}
