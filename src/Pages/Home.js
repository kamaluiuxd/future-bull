/* eslint-disable react-hooks/exhaustive-deps */
import BuySellActivities from "../Components/BuySellActivities";
import CompanyFilter from "../Components/CompanyFilter";
import DateComponent from "../Components/DateComponent";
import FiiActivity from "../Components/FiiActivity";
import OutstandingOF from "../Components/OutstandingOF";
import TableData from "../Components/TableData";
import { useTrade } from "../Context/TradeContext";

const Home = () => {
	const { date, response, item, table } = useTrade();

	let newDate = date.split("-").reverse().join("-");

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

			<section className="my-10 ">
				<h1 className="m-5">
					Buy Sell Activity for &nbsp;
					<span className="px-3 py-1 bg-blue-700 text-white rounded-sm"> {newDate}</span>{" "}
				</h1>
				<BuySellActivities response={response} />
				<p className="m-5">This Shows Only One day's Activity. Please use this along with Overall OI above </p>
			</section>

			<section>
				<TableData table={table} />
			</section>
		</section>
	);
};
export default Home;
