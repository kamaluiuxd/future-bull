import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const Navig = () => {
	return (
		<section>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Routes>
					<Route path="" />
				</Routes> */}
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</section>
	);
};
export default Navig;
