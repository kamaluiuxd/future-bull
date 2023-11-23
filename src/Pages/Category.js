import DateComponent from "../Components/DateComponent";

import { TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useTrade } from "../Context/TradeContext";

const columns = [
	{ id: "date", label: "Date", minWidth: 100 },
	{ id: "netlongposition", label: "Net Long Position", minWidth: 100 },
	{
		id: "netol",
		label: "Net OI",
		minWidth: 100,
	},
	{
		id: "changeinol",
		label: "Change in OI",
		minWidth: 100,
	},
	{
		id: "spot",
		label: "Spot",
		minWidth: 100,
	},
	{
		id: "spotChannge",
		label: "Spot Change",
		minWidth: 100,
	},
];

const Category = () => {
	const { table } = useTrade();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	return (
		<>
			<section className="mx-auto mt-10 w-[80%]">
				<h1 className="font-bold text-3xl text-center uppercase">Index Futures Positions – Category</h1>
				<DateComponent />
				<div class="relative overflow-x-auto ">
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
									{table &&
										table.map((row, i) => {
											return (
												<TableRow hover role="checkbox" key={i} tabIndex={-1}>
													<TableCell className="border border-slate-800">
														{row.tradeDate.split("-").reverse().join("-")}
													</TableCell>
													<TableCell className="border border-slate-800">Nil</TableCell>
													<TableCell className="border border-slate-800">{row.intradayCallsNet}</TableCell>
													<TableCell className="border border-slate-800">{row.intradayPutsNet}</TableCell>
													<TableCell className="border border-slate-800">{row.indexFutures}</TableCell>
													<TableCell className="border border-slate-800">{row.futureIndexOI}</TableCell>
												</TableRow>
											);
										})}
								</TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							rowsPerPageOptions={[10, 25, 100]}
							component="div"
							count={table.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</Paper>
				</div>
			</section>
		</>
	);
};
export default Category;
