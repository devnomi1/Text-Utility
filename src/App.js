import "./App.css";
import Alerts from "./components/Alerts";
import Header from "./components/Header";
import TextFrom from "./components/TextFrom";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [mode, setDarkMode] = useState("light");
	const toggleMode = () => {
		if (mode === "light") {
			setDarkMode("dark");
			document.body.style.backgroundColor = "#042743";
		} else {
			setDarkMode("light");
			document.body.style.backgroundColor = "white";
		}
	};
	return (
		<>
			<Router>
				<Header title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alerts alerts="this is a alerts" />
				<div className="container my-3">
					<Switch>
						<Route path="/about">
							<About />
						</Route>

						<Route path="/">
							<TextFrom heading="Enter the text to analyze below" mode={mode} />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
