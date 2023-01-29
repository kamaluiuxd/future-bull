import { useEffect, useState } from "react";
import CatMenu from "../Components/CatMenu";
import TradeCard from "../Components/TradeCard";

import data from "../data.json";

const Home = () => {
	const [tradeData, setTradeData] = useState([]);
	useEffect(() => {
		setTradeData(data.openIndex);
	}, []);

	console.log(tradeData);
	return (
		<section className="w-[1400px] mx-auto">
			<CatMenu />
			<section className="m-10">
				<section className="grid grid-cols-2">
					<TradeCard tradeData={tradeData} />
					<TradeCard tradeData={tradeData} />
				</section>
			</section>
		</section>
	);
};
export default Home;
