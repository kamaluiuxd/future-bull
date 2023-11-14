import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Activities from "../Pages/Activities";
import Category from "../Pages/Category";
import Chart from "../Pages/Chart";
import Contact from "../Pages/Contact";
import DailyChange from "../Pages/DailyChange";
import History from "../Pages/History";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import TradingActivities from "../Pages/TradingActivities";

const Navig = () => {
	return (
		<section>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/activities" element={<Activities />} />
				<Route path="/chart" element={<Chart />} />
				<Route path="/trading-activities" element={<TradingActivities />} />
				<Route path="/category" element={<Category />} />
				<Route path="/history" element={<History />} />
				<Route path="/daily-changes" element={<DailyChange />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</section>
	);
};
export default Navig;
