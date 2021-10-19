import React, { useState } from "react";

export default function TextFrom(props) {
	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};
	const handleLoClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};
	const onChangeHandle = (event) => {
		setText(event.target.value);
	};
	const [text, setText] = useState("");
	return (
		<>
			<div className="container">
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
					></textarea>
				</div>
				<button className="btn btn-primary mx-2" onClick={handleUpClick}>
					Convert to Uppercase
				</button>
				<button className="btn btn-primary mx-2" onClick={handleLoClick}>
					Convert to Lowercase
				</button>
			</div>
			<div className="container my-3">
				<h1>Summary</h1>
				<p>
					{text.split(" ").length} words {text.length} characters
				</p>
				<p>{0.008 * text.split(" ").length} minutes Read</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}
