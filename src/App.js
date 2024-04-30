
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import MarsRover from "./components/MarsRover";
import APOD from "./components/APOD";
import CME from "./components/CME";

function App() {
	

	return (
		<Routes>
			<Route path="/" exact element={<Main />} />
			
			<Route path="/apod" exact element={<APOD />} />
			<Route path="/cme" exact element={<CME />} />
			<Route path="/marseRover" exact element={<MarsRover />} />
			<Route path="/" element={<Navigate replace to="/" />} />
		</Routes>
	);
}

export default App;
