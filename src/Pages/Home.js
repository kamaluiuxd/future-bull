import { useEffect, useState } from "react";
import TradeCard from "../Components/TradeCard";

import data from "../data.json";

const Home = () => {
	const [tradeData, setTradeData] = useState([]);

	useEffect(() => {
		setTradeData(data.openIndex);
	}, []);

	return (
		<section className="w-[1400px] mx-auto">
			<section className="m-10">
				<TradeCard tradeData={tradeData} />
			</section>
		</section>
	);
};
export default Home;