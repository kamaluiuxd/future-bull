import TableDataComp from "../Components/TableDataComp";
import { useTrade } from "../Context/TradeContext";

const TradingActivities = () => {
	const { table } = useTrade();
	return (
		<>
			<section>
				<TableDataComp table={table} />
			</section>
		</>
	);
};
export default TradingActivities;
