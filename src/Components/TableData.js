import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

const columns = [
	{ id: "name", label: "Date", minWidth: 100 },
	{ id: "nifty", label: "Nifty", minWidth: 100 },
	{
		id: "fiicall",
		label: "FII Call",
		minWidth: 100,
	},
	{
		id: "fiiput",
		label: "FII Put",
		minWidth: 100,
	},
	{
		id: "fiifuture",
		label: "FII Future",
		minWidth: 100,
	},
	{
		id: "fiifutureoi",
		label: "FII Index future OI",
		minWidth: 100,
	},
	{
		id: "fiiindexfuture",
		label: "FII Index future OI Chg",
		minWidth: 100,
	},
	{
		id: "fiicash",
		label: "FII Cash",
		minWidth: 100,
	},
	{
		id: "diicash",
		label: "DII Future",
		minWidth: 100,
	},
];

const TableData = ({ table }) => {
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
		<section className="mt-36">
			<Paper sx={{ width: "100%", overflow: "hidden" }}>
				<TableContainer sx={{ maxHeight: 440 }}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{table &&
								table.map((row, i) => {
									return (
										<TableRow hover role="checkbox" key={i} tabIndex={-1}>
											<TableCell>{row.tradeDate.split("-").reverse().join("-")}</TableCell>
											<TableCell>Nil</TableCell>
											<TableCell>{row.intradayCallsNet}</TableCell>
											<TableCell>{row.intradayPutsNet}</TableCell>
											<TableCell>{row.indexFutures}</TableCell>
											<TableCell>{row.futureIndexOI}</TableCell>
											<TableCell>{row.futureIndexOIChg}</TableCell>
											<TableCell>Nil</TableCell>
											<TableCell>Nil</TableCell>
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
		</section>
	);
};
export default TableData;
