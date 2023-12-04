import DataTable from "react-data-table-component";
import MonthYear from "../Components/MonthYear";
import { useTrade } from "../Context/TradeContext";

const columns = [
	{ id: "fii", label: "FII", minWidth: 100 },
	{
		id: "dii",
		label: "DII",
		minWidth: 200,
	},
	{
		id: "client",
		label: "CLIENT",
		minWidth: 200,
	},
	{
		id: "pro",
		label: "PRO",
		minWidth: 200,
	},
	{
		id: "spot",
		label: "SPOT",
		minWidth: 200,
	},
	{
		id: "spotchanges",
		label: "SPOT CHANGES",
		minWidth: 200,
	},
];
const Daily = () => {
	const { months, ifpdTable } = useTrade();
	console.log(ifpdTable);
	return (
		<>
			<MonthYear months={months} />
			<DataTable columns={columns} data={ifpdTable}></DataTable>
		</>
	);
};
export default Daily;
