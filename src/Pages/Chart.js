import ChartData from "../Components/ChartData";
import { useTrade } from "../Context/TradeContext";

const Chart = () => {
	const { months, chart } = useTrade();
	return (
		<div>
			<section className="m-5">
				<select name="" id="" className="my-10 border border-blue-800 outline-none">
					{months.map((month) => (
						<option value={month}>{month}</option>
					))}
				</select>
				<ChartData chart={chart} />
			</section>
		</div>
	);
};
export default Chart;
