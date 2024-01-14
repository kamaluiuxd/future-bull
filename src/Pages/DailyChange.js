import { TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
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

const DailyChange = () => {
	const { months, ifpdTable } = useTrade();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	console.log(ifpdTable);
	return (
		<>
			<section className="mx-auto mt-10 w-[70%]">
				<h1 className="font-bold text-3xl text-center uppercase">Index Futures Positions – Daily Change</h1>
				<MonthYear months={months} />
				<div className="relative overflow-x-auto ">
					<Paper sx={{ width: "100%", overflow: "hidden" }}>
						<TableContainer sx={{ maxHeight: 600 }}>
							<Table stickyHeader aria-label="sticky table">
								<TableHead>
									<TableRow style={{ textAlign: "centre" }}>
										<TableCell>DATE</TableCell>
										<TableCell>
											<TableRow>
												<TableCell>FII</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Long</TableCell>
												<TableCell>{ifpdTable.longValue}</TableCell>
												<TableCell>Short</TableCell>
												<TableCell>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>
											<TableRow>
												<TableCell>DII</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Long</TableCell>
												<TableCell>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>
											<TableRow>
												<TableCell>CLIENT</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Long</TableCell>
												<TableCell>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>
											<TableRow>
												<TableCell>PRO</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Long</TableCell>
												<TableCell>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>SPOT</TableCell>
										<TableCell>SPOT CHANGES</TableCell>
									</TableRow>
								</TableHead>
								<TableBody></TableBody>
							</Table>
						</TableContainer>
						<TablePagination
							rowsPerPageOptions={[10, 25, 100]}
							component="div"
							count={ifpdTable.length}
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
export default DailyChange;
