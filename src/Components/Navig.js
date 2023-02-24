import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import UploadFile from "../Pages/UploadFile";

const Navig = () => {
	return (
		<section>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/uploadfile" element={<UploadFile />} />
			</Routes>
		</section>
	);
};
export default Navig;
