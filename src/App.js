import "./App.css";
import Header from "./components/Header";
import TextFrom from "./components/TextFrom";

function App() {
	return (
		<>
			<Header title="TextUtils" />
			<div className="container my-3">
				<TextFrom heading="Enter the text to analyze below" />
			</div>
		</>
	);
}

export default App;
