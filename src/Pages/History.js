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
];
const columnsSpot = [
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

const History = () => {
	const { ifphTable, setItem, spot } = useTrade();

	const companyData = ["Client", "DII", "FII", "Pro"];

	const handleChange = (e) => {
		setItem(e.target.value);
	};

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
				<h1 className="font-bold text-3xl text-center uppercase">Index Futures Positions – History</h1>

				<select onChange={handleChange} className="my-5 w-[10%] border border-black outline-none">
					{companyData.map((company, index) => (
						<option key={index} value={company}>
							{company}
						</option>
					))}
				</select>

				<section className="">
					<div className="">
						<Paper sx={{ width: "100%", overflow: "hidden" }}>
							<TableContainer sx={{ maxHeight: 600 }} className="flex">
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
										{ifphTable &&
											ifphTable.map((row, i) => {
												return (
													<TableRow hover role="checkbox" key={i} tabIndex={-1}>
														<TableCell className="border border-slate-800">
															{row.tradeDate.split("-").reverse().join("-")}
														</TableCell>
														<TableCell className="border border-slate-800">{row.netLongPosition}</TableCell>
														<TableCell className="border border-slate-800">{row.netOI}</TableCell>
														<TableCell className="border border-slate-800">{row.changeInOI}</TableCell>
													</TableRow>
												);
											})}
									</TableBody>
								</Table>

								<Table stickyHeader aria-label="sticky table">
									<TableHead>
										<TableRow>
											{columnsSpot.map((column) => (
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
										{spot &&
											spot.map((s, i) => {
												return (
													<TableRow hover role="checkbox" key={i} tabIndex={-1}>
														<TableCell className="border border-slate-800">{s.closeValue}</TableCell>
														<TableCell className="border border-slate-800">{s.changeValue}</TableCell>
													</TableRow>
												);
											})}
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								rowsPerPageOptions={[10, 25, 100]}
								component="div"
								count={ifphTable.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</Paper>
					</div>
				</section>
			</section>
		</>
	);
};
export default History;
