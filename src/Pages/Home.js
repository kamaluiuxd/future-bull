/* eslint-disable react-hooks/exhaustive-deps */
import ChartData from "../Components/ChartData";
import CompanyFilter from "../Components/CompanyFilter";
import DateComponent from "../Components/DateComponent";
import FiiActivity from "../Components/FiiActivity";
import OutstandingOF from "../Components/OutstandingOF";
import { useTrade } from "../Context/TradeContext";

const Home = () => {
	const { date, response, item, months, chart } = useTrade();

	let newDate = date.split("-").reverse().join("-");

	console.log(months);
	return (
		<section className="md:w-[1400px] md:mx-auto my-10">
			<CompanyFilter />
			<DateComponent />

			<section className="my-10 ">
				<h1 className="m-5">
					Outstanding OI of <span className="text-fb_prime font-bold">{item}</span> in Index options as on &nbsp;
					<span className="px-3 py-1 bg-blue-700  text-white rounded-sm"> {newDate}</span>{" "}
				</h1>
				<OutstandingOF response={response} />
			</section>

			<section className="my-10 ">
				<h1 className="m-5">
					<span className="text-fb_prime font-bold">{item}</span> Activity - Index options as on &nbsp;
					<span className="px-3 py-1 bg-blue-700 text-white rounded-sm"> {newDate}</span>{" "}
				</h1>
				<FiiActivity response={response} />
				<p className="m-5">This Shows Only One day's Activity. Please use this along with Overall OI above </p>
			</section>
			<section className="m-5">
				<ChartData chart={chart} />
			</section>
		</section>
	);
};
export default Home;
