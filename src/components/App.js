import React, { useEffect, useState } from "react";
import "../styles.css";
import WordLengthInput from "./WordLengthInput";
import InputRow from "./InputRow";
//import listOfLists from "../ListOfLists.js";

export default function App() {
	const [searchString, setSearchString] = useState("");
	const [inputArray, setInputArray] = useState([]);
	const [wordLength, setWordLength] = useState(0);
	const [clear, setClear] = useState(false);
	const [searchStringError, setSearchStringError] = useState(false);
	const testArray = [
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
		"abcdefghijklmnopqrstuvwxyz",
	];

	//Functions for wordLengthInput:
	const initializeStringAndArray = (length) => {
		let tempString = "";
		let tempArray = [];
		for (let i = 0; i < length; i++) {
			tempArray.push({ id: i });
			tempString += ".";
		}
		setSearchString("");
		setInputArray([]);
		setSearchString(tempString);
		setInputArray(tempArray);
	};

	//Functions for InputRow:
	const updateSearchString = (position, inputLetterValue) => {
		let tempString = searchString;
		tempString =
			tempString.slice(0, position) +
			inputLetterValue +
			tempString.slice(position + 1);
		validateString(tempString); //If the search string contains non-alphanumeric characters,
		setSearchString(tempString); // the UI will display a warning and the search will occur,
	}; // returning an empty array.

	const validateString = (str) => {
		const disallowedCharacters = /[^A-Za-z0-9.]/;
		if (str.match(disallowedCharacters)) {
			setSearchStringError(true);
		} else {
			setSearchStringError(false);
		}
	};

	//Functions for buttons:

	//Lookup button

	//Clear button
	const clearInputs = (event) => {
		event.preventDefault();
		setClear(true);
	};

	useEffect(() => {
		setClear(false);
		initializeStringAndArray(wordLength);
		setSearchStringError(false);
	}, [clear]);

	//Clear button
	const resetWordLength = (event) => {
		event.preventDefault();
		setWordLength(0);
		setInputArray([]);
		setSearchString("");
	};

	//Functions for the output div:
	const makeListEntry = (word) => {
		return <div className="col col-md-6 col-lg-4">{word}</div>;
	};

	return (
		<div className="App">
			<br />
			<div className="input-panel container rounded mb-2">
				<h1>The Metadictionary </h1>
				<p> Look up words by their length and any known letters</p>
				<WordLengthInput
					wordLength={wordLength}
					setWordLength={setWordLength}
					initializeStringAndArray={initializeStringAndArray}
				/>
				<InputRow
					inputArray={inputArray}
					updateSearchString={updateSearchString}
					wordLength={wordLength}
					clear={clear}
				/>
				{console.log(searchString)}
				<div className="row justify-content-center m-3">
					<button
						type="button"
						className="btn btn-primary m-2"
						onClick={clearInputs}
					>
						Find Words
					</button>
					<button
						type="button"
						className="btn btn-primary m-2"
						onClick={clearInputs}
					>
						Clear Characters
					</button>
					<button
						type="button"
						className="btn btn-primary m-2"
						onClick={resetWordLength}
					>
						Reset
					</button>
				</div>
				<h3 style={{ color: "midnightblue" }}>
					{searchStringError
						? "Each character should be a letter or a digit."
						: null}
				</h3>
				<br />
			</div>
			<div className="output-panel container border border-2 border-success rounded">
				<div className="row">{testArray.map(makeListEntry)}</div>
			</div>
		</div>
	);
}
