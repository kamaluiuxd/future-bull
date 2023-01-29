import { useEffect, useState } from "react";
import CatMenu from "../Components/CatMenu";
import ChartData from "../Components/ChartData";
import TradeCard from "../Components/TradeCard";

import data from "../data.json";

const Home = () => {
	const [tradeData, setTradeData] = useState([]);
	useEffect(() => {
		setTradeData(data.openIndex);
	}, []);

	console.log(tradeData);
	return (
		<section className="md:w-[1400px] md:mx-auto">
			<CatMenu />
			<section className="my-10 ">
				<section>
					<TradeCard tradeData={tradeData} />
					<p>This Shows Only One day's Activity. Please use this along with Overall OI above </p>
				</section>
			</section>
			<ChartData />
		</section>
	);
};
export default Home;
