import BuySellActivities from "../Components/BuySellActivities";
import CompanyFilter from "../Components/CompanyFilter";
import DateComponent from "../Components/DateComponent";
import FiiActivity from "../Components/FiiActivity";
import { useTrade } from "../Context/TradeContext";

const Activities = () => {
	const { response, date, item } = useTrade();
	let newDate = date.split("-").reverse().join("-");
	return (
		<div className="grid">
			<section className="md:w-[1400px] md:mx-auto my-10 col-span-6">
				<CompanyFilter />
				<DateComponent />

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
			</section>
			<section className="col-span-6">Hio</section>
		</div>
	);
};
export default Activities;
