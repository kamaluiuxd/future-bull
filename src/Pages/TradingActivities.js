import TableData from "../Components/TableData";
import TableDataComp from "../Components/TableDataComp";
import { useTrade } from "../Context/TradeContext";

const TradingActivities = () => {
	const { table } = useTrade();
	return (
		<>
			<section>
				{/* <TableData table={table} /> */}
				<TableDataComp table={table} />
			</section>
		</>
	);
};
export default TradingActivities;
