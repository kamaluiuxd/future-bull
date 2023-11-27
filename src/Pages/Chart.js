import ChartData from "../Components/ChartData";
import CompanyFilter from "../Components/CompanyFilter";
import MonthYear from "../Components/MonthYear";
import { useTrade } from "../Context/TradeContext";

const Chart = () => {
	const { months, chart } = useTrade();

	console.log(months);
	return (
		<div>
			<section className="m-5 w-[80%] mx-auto">
				<CompanyFilter />
				<MonthYear months={months} />
				<ChartData chart={chart} />
			</section>
		</div>
	);
};
export default Chart;
