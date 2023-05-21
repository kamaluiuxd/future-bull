/* eslint-disable react-hooks/exhaustive-deps */
import ChartData from "../Components/ChartData";
import CompanyFilter from "../Components/CompanyFilter";
import FiiActivity from "../Components/FiiActivity";
import { useTrade } from "../Context/TradeContext";

const Home = () => {
	const { date, setDate, response } = useTrade();

	return (
		<section className="md:w-[1400px] md:mx-auto my-10">
			<CompanyFilter />
			<div className="space-y-5 m-5">
				<h1 className="text-2xl font-bold">Expiry</h1>
				<input
					className="border border-black p-2 cursor-pointer"
					type="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
			</div>

			<section className="my-10 ">
				<FiiActivity response={response} />
			</section>
			<section className="m-5">
				<ChartData response={response} />
			</section>
		</section>
	);
};
export default Home;
