import TableData from "../Components/TableData";
import { useTrade } from "../Context/TradeContext";

const TradingActivities = () => {
	const { table } = useTrade();
	return (
		<>
			<section>
				<TableData table={table} />
			</section>
		</>
	);
};
export default TradingActivities;
