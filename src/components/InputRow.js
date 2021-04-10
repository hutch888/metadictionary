import LetterInput from "./LetterInput";

export default function InputRow({
	inputArray,
	updateSearchString,
	wordLength,
	clear,
}) {
	function makeLetterInput(arrayElement) {
		return (
			<LetterInput
				key={arrayElement.id}
				position={arrayElement.id}
				updateSearchString={updateSearchString}
				wordLength={wordLength}
				clear={clear}
			/>
		);
	}

	if (wordLength > -1 && wordLength < 48) {
		return (
			<div className="d-flex justify-content-left flex-wrap row-hl">
				{inputArray.map(makeLetterInput)}
			</div>
		);
	} else {
		return (
			<>
				<br />
				<h5>Please enter an integer from 0 to 47.</h5>
			</>
		);
	}
}
