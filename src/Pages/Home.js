/* eslint-disable react-hooks/exhaustive-deps */
import ChartData from "../Components/ChartData";
import TradeCard from "../Components/TradeCard";
import { useTrade } from "../Context/TradeContext";

const Home = () => {
	const { setItem, date, setDate, response } = useTrade();

	const filterItem = (company) => {
		setItem(company);
	};

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
			<div className="space-y-5 m-5">
				<h1 className="text-2xl font-bold">Expiry</h1>
				<input className="border border-black p-2 cursor-pointer" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
			</div>

			<section className="my-10 ">
				<TradeCard response={response} />
			</section>
			<section className="m-5">
				<ChartData response={response} />
			</section>
		</section>
	);
};
export default Home;
