import React, { useState } from "react";

export default function TextFrom(props) {
	const [text, setText] = useState("");

	const textUpperBtn = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};

	const textLowerBtn = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};

	const textClearBtn = () => {
		let newText = "";
		setText(newText);
	};

	const onChangeHandle = (event) => {
		setText(event.target.value);
	};

    return (
			<>
				<div
					className={`container text-${
						props.mode === "light" ? "black" : "white"
					}`}
				>
					<h1>{props.heading}</h1>
					<div className="mb-3">
						<textarea
							className="form-control"
							value={text}
							onChange={onChangeHandle}
							name="myBox"
							id="myBox"
							rows="8"
							placeholder="Type Your Text Here"
							style={{
								backgroundColor: props.mode === "dark" ? "#042743" : "white",
								color: props.mode === "dark" ? "white" : "black",
							}}
						></textarea>
					</div>
					<button className="btn btn-primary mx-2" onClick={textUpperBtn}>
						Convert to Uppercase
					</button>
					<button className="btn btn-primary mx-2" onClick={textLowerBtn}>
						Convert to Lowercase
					</button>
					<button className="btn btn-primary mx-2" onClick={textClearBtn}>
						Clear Text
					</button>
					<button className="btn btn-primary mx-2" onClick={textClearBtn}>
						Copy Text
					</button>
				</div>
				<div
					className={`container my-3 text-${
						props.mode === "light" ? "#042743" : "white"
					}`}
				>
					<h1>Summary</h1>
					<p>
						{
							text.split(" ").filter((element) => {
								return element.length !== 0;
							}).length
						}{" "}
						words {text.length} characters
					</p>
					<p>
						{0.008 *
							text.split(" ").filter((element) => {
								return element.length !== 0;
							}).length}{" "}
						minutes Read
					</p>
					<h2>Preview</h2>
					<p>
						{text.length > 0 ? text : "Enter your text to above for preview"}
					</p>
				</div>
			</>
		);
}
