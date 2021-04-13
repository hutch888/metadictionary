import React, { useEffect, useState } from "react";
import "../styles.css";
import WordLengthInput from "./WordLengthInput";
import InputRow from "./InputRow";
import Button from "./Button";
import InputWarning from "./InputWarning";
import OutputList from "./OutputList";
import Footer from "./Footer";
import listOfLists from "../listOfLists";

export default function App() {
	const [searchString, setSearchString] = useState("");
	const [inputArray, setInputArray] = useState([]);
	const [wordLength, setWordLength] = useState(0);
	const [clear, setClear] = useState(false);
	const [searchStringError, setSearchStringError] = useState(false);
	const [outputArray, setOutputArray] = useState([]);

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
	const wordSearch = (term, wordList) => {
		const searchExpression = new RegExp(term);
		setOutputArray(
			wordList[term.length].filter((word) => searchExpression.test(word))
		);
	};

	//Clear button
	const clearInputs = (event) => {
		event.preventDefault();
		setClear(true);
		setOutputArray([]);
	};

	useEffect(() => {
		setClear(false);
		initializeStringAndArray(wordLength);
		setSearchStringError(false);
	}, [clear, wordLength]);

	//Reset button
	const resetWordLength = (event) => {
		event.preventDefault();
		setWordLength(0);
		setInputArray([]);
		setSearchString("");
		setOutputArray([]);
	};

	return (
		<React.Fragment>
			<div className="App">
				<div className="app-container container-fluid">
					<br />
					<div className="row">
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
							<div className="row justify-content-center m-3">
								<Button
									activatesFunction={() =>
										wordSearch(searchString, listOfLists)
									}
									buttonLabel={"Find Words"}
								/>
								<Button
									activatesFunction={clearInputs}
									buttonLabel={"Clear Characters"}
								/>
								<Button
									activatesFunction={resetWordLength}
									buttonLabel={"Reset"}
								/>
							</div>
						</div>
						<br />
					</div>
					<InputWarning error={searchStringError} />
					<OutputList outputArray={outputArray} />
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}
