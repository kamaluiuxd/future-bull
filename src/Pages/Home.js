/* eslint-disable react-hooks/exhaustive-deps */
import ChartData from "../Components/ChartData";
import CompanyFilter from "../Components/CompanyFilter";
import FiiActivity from "../Components/FiiActivity";
import OutstandingOF from "../Components/OutstandingOF";
import { useTrade } from "../Context/TradeContext";

const Home = () => {
	const { date, setDate, response } = useTrade();

	let newDate = date.split("-").reverse().join("-");
	console.log(newDate);

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
				<h1 className="mx-5">
					Outstanding OI of FII in Index options as on &nbsp;
					<span className="px-3 py-1 bg-blue-700 text-white rounded-sm"> {newDate}</span>{" "}
				</h1>
				<OutstandingOF response={response} />
			</section>

			<section className="my-10 ">
				<h1 className="mx-5">
					FII Activity - Index options as on &nbsp;
					<span className="px-3 py-1 bg-blue-700 text-white rounded-sm"> {newDate}</span>{" "}
				</h1>
				<FiiActivity response={response} />
				<p className="mx-5">This Shows Only One day's Activity. Please use this along with Overall OI above </p>
			</section>
			<section className="m-5">
				<ChartData response={response} />
			</section>
		</section>
	);
};
export default Home;
