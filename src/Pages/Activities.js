import CompanyFilter from "../Components/CompanyFilter";
import DateComponent from "../Components/DateComponent";
import FiiActivity from "../Components/FiiActivity";
import { useTrade } from "../Context/TradeContext";

const Activities = () => {
	const { response } = useTrade();

	return (
		<section className="md:w-[1400px] md:mx-auto my-10">
			<CompanyFilter />
			<DateComponent />
			<section className="my-10 ">
				<FiiActivity response={response} />
				<p className="m-5">This Shows Only One day's Activity. Please use this along with Overall OI above </p>
			</section>
		</section>
	);
};
export default Activities;
