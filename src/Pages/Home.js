import axios from "axios";
import React, { useEffect, useState } from "react";
import ChartData from "../Components/ChartData";
import TradeCard from "../Components/TradeCard";

// const currentDate = new Date().toISOString().slice(0, 10);
const currentDate = "2022-12-27";
const currentCompany = "Client";

const Home = () => {
	const [item, setItem] = useState(currentCompany);
	const [date, setDate] = useState(currentDate);

	const [response, setResponse] = useState({});

	const API = `http://103.154.252.16:8080/futureBull/api/openIndexByDateType?clientType=${item}&startDate=${date}`;

	// console.log(response.sameDayData);

	const filterItem = (company) => {
		setItem(company);
	};

	const getCompanyDetails = async (url) => {
		try {
			const result = await axios.get(url);
			const data = await result.data;

			setResponse(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getCompanyDetails(API);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item, date]);

	return (
		<section className="md:w-[1400px] md:mx-auto my-10">
			<div className="flex justify-center container">
				<div className=" my-5 flex justify-center">
					<div className="flex justify-evenly space-x-4 text-white">
						<button className="bg-black	 px-5 py-2 rounded-full" onClick={() => filterItem("Client")}>
							Client
						</button>
						<button className="bg-black px-5 py-2 rounded-full" onClick={() => filterItem("DII")}>
							DII
						</button>
						<button className="bg-black px-5 py-2 rounded-full" onClick={() => filterItem("FII")}>
							FII
						</button>
						<button className="bg-black px-5 py-2 rounded-full" onClick={() => filterItem("Pro")}>
							Pro
						</button>
					</div>
				</div>
			</div>
			<div className="space-y-5">
				<h1 className="text-2xl font-bold">Expiry</h1>
				<input className="border border-black p-2" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
			</div>

			<section className="my-10 ">
				<section>
					<TradeCard response={response} />

					<p>This Shows Only One day's Activity. Please use this along with Overall OI above </p>
				</section>
			</section>
			<ChartData response={response} />
		</section>
	);
};
export default Home;
