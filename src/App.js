import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ColorGame from "./pages/ColorGame";
import AnimalGame from "./pages/AnimalGame";
import Homepage from "./pages/Homepage";
import SpellingGame from './pages/SpellingGame';
import './App.css'

function App() {
	return (
		<>
			<Router>
				<div>
					<Routes>
						<Route path="/" element={<Homepage/>} />
						<Route path="/colorgame" element={<ColorGame/>} />
						<Route path="/animalgame" element={<AnimalGame/>} />
						<Route path="/spellinggame" element={<SpellingGame/>} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
