import ChartData from "../Components/ChartData";
import MonthYear from "../Components/MonthYear";
import { useTrade } from "../Context/TradeContext";

const Chart = () => {
	const { months, chart } = useTrade();

	console.log(months);
	console.log(chart);
	return (
		<div>
			<section className="m-5">
				<MonthYear months={months} />
				<ChartData chart={chart} />
			</section>
		</div>
	);
};
export default Chart;
