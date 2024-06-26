import CompanyFilter from "../Components/CompanyFilter";
import DateComponent from "../Components/DateComponent";
import FiiActivity from "../Components/FiiActivity";
import { useTrade } from "../Context/TradeContext";

const Activities = () => {
	const { response } = useTrade();

	return (
		<section className="md:w-[80%] md:mx-auto my-10">
			<section className="container flex justify-center space-x-20">
				<DateComponent />
				<CompanyFilter />
			</section>
			<section className="my-20 ">
				<FiiActivity response={response} />
				<p className="m-5 text-center mt-20">This Shows Only One day's Activity. Please use this along with Overall OI above </p>
			</section>
		</section>
	);
};
export default Activities;
