import DateComponent from "../Components/DateComponent";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTrade } from "../Context/TradeContext";

const columns = [
	{
		id: "date",
		label: "Date",
		minWidth: 100,
	},
	{
		id: "fii",
		label: "FII",
		minWidth: 100,
	},
	{
		id: "dii",
		label: "DII",
		minWidth: 100,
	},
	{
		id: "pro",
		label: "PRO",
		minWidth: 100,
	},
	{
		id: "client",
		label: "CLIENT",
		minWidth: 100,
	},
	{
		id: "total",
		label: "TOTAL",
		minWidth: 100,
	},
];

const Category = () => {
	const { ifpcTable } = useTrade();

	// const { netLongPosition, netOI, changeInOI } = ifpcTable;

	console.log(ifpcTable);
	return (
		<>
			<section className="mx-auto mt-10 w-[80%]">
				<h1 className="font-bold text-3xl text-center uppercase">Index Futures Positions – Category</h1>
				<DateComponent />
				<div className="relative overflow-y-auto ">
					<Paper sx={{ width: "100%", overflow: "hidden" }}>
						<TableContainer sx={{ maxHeight: 600 }}>
							<Table stickyHeader aria-label="sticky table">
								<TableHead>
									<TableRow>
										{columns.map((column) => (
											<TableCell
												className="border border-slate-800"
												key={column.id}
												align={column.align}
												style={{ minWidth: column.minWidth }}
											>
												<p className="font-bold">{column.label}</p>
											</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow hover role="checkbox" tabIndex={-1}>
										<TableCell className="border border-slate-800">Net Long Position</TableCell>
										{ifpcTable &&
											ifpcTable.map((row) => {
												return <TableCell className="border border-slate-800">{row.netLongPosition}</TableCell>;
											})}
									</TableRow>
									<TableRow>
										<TableCell className="border border-slate-800">Net OI</TableCell>
										{ifpcTable &&
											ifpcTable.map((row) => {
												return <TableCell className="border border-slate-800">{row.netOI}</TableCell>;
											})}
									</TableRow>
									<TableRow>
										<TableCell className="border border-slate-800">Change in OI</TableCell>
										{ifpcTable &&
											ifpcTable.map((row) => {
												return <TableCell className="border border-slate-800">{row.changeInOI}</TableCell>;
											})}
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
				</div>
			</section>
		</>
	);
};
export default Category;
