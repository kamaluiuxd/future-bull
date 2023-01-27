import { useEffect, useState } from "react";
import ChartData from "../Components/ChartData";
import TableData from "../Components/TableData";

import data from "../data.json";

const Home = () => {
	const [tradeData, setTradeData] = useState([]);

	useEffect(() => {
		setTradeData(data.openIndex);
	}, []);

	return (
		<section className="w-[1400px] mx-auto">
			<section className="grid grid-cols-2">
				<section className=" ">
					<TableData tradeData={tradeData} />
				</section>
				<section className="">
					<ChartData tradeData={tradeData} />
				</section>
			</section>
		</section>
	);
};
export default Home;
