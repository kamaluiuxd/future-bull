import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

const Navig = () => {
	return (
		<section>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</section>
	);
};
export default Navig;
