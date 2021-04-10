import { useState, useEffect } from "react";

export default function LetterInput(props) {
	const { position, updateSearchString, wordLength, clear } = props;

	const [inputValue, setInputValue] = useState("");

	function changeLetter(event) {
		event.preventDefault();
		let newLetter = event.target.value;
		setInputValue(event.target.value);
		updateSearchString(position, newLetter);
	}

	useEffect(() => {
		setInputValue("");
	}, [wordLength, clear]);

	return (
		<div className="p-1 m-1 item-hl">
			<input
				type="text"
				size="1"
				maxLength="1"
				value={inputValue}
				onChange={changeLetter}
			/>
		</div>
	);
}
