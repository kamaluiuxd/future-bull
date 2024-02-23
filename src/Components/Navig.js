import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Activities from "../Pages/Activities";
import Category from "../Pages/Category";
import Chart from "../Pages/Chart";
import ClientType from "../Pages/ClientType";
import Contact from "../Pages/Contact";
import Daily from "../Pages/Daily";
import DailyChange from "../Pages/DailyChange";
import FiiData from "../Pages/FiiData";
import History from "../Pages/History";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SecurityQuestion from "../Pages/SecurityQuestion";
import Signup from "../Pages/Signup";
import TradingActivities from "../Pages/TradingActivities";

const Navig = () => {
	return (
		<section>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/activities" element={<Activities />} />
				<Route path="/chart" element={<Chart />} />
				<Route path="/trading-activities" element={<TradingActivities />} />
				<Route path="/category" element={<Category />} />
				<Route path="/history" element={<History />} />
				<Route path="/daily-change" element={<DailyChange />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/daily" element={<Daily />} />
				<Route path="/fiidata" element={<FiiData />} />
				<Route path="/fao-participants" element={<ClientType />} />
				<Route path="/security-question" element={<SecurityQuestion />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</section>
	);
};
export default Navig;
