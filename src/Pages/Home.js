import axios from "axios";
import { useEffect, useState } from "react";
import ChartData from "../Components/ChartData";
import TradeCard from "../Components/TradeCard";

// const currentDate = new Date().toISOString().slice(0, 10);

const Home = () => {
	const [date, setDate] = useState("2022-12-27");

	const [item, setItem] = useState("Client");

	const [response, setResponse] = useState({});

	const filterItem = (company) => {
		setItem(company);
	};

	const getCompanyDetails = async () => {
		const result = await axios.get(`http://103.154.252.16:8080/futureBull/api/openIndexByDateType?clientType=${item}&startDate=${date}`);

		setResponse(result.data);
	};

	useEffect(() => {
		getCompanyDetails();
	}, [date, item]);

	console.log(response);
	return (
		<section className="md:w-[1400px] md:mx-auto">
			<div className="flex justify-center container">
				<div className=" my-5 flex justify-center">
					<div className="flex justify-evenly space-x-4 text-white">
						<button className="bg-black px-5 py-2 rounded-full" onClick={() => filterItem("Client")}>
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
				<h1 className="text-2xl font-bold">{date}</h1>
			</div>

			<section className="my-10 ">
				<section>
					{/* <TradeCard response={response} /> */}
					<p>This Shows Only One day's Activity. Please use this along with Overall OI above </p>
				</section>
			</section>
			<ChartData />
		</section>
	);
};
export default Home;
