import { TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
// import DailyChangeAlt from "../Components/DailyChangeAlt";
import MonthYear from "../Components/MonthYear";
import { useTrade } from "../Context/TradeContext";

const DailyChange = () => {
	const { months, ifpdTable } = useTrade();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	// const {
	// 	tradeDate,
	// 	fii_longValue,
	// 	fii_shortValue,
	// 	dii_longValue,
	// 	dii_shortValue,
	// 	pro_longValue,
	// 	pro_shortValue,
	// 	client_longValue,
	// 	client_shortValue,
	// 	spotValue,
	// 	spotChange,
	// } = ifpdTable;

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
								<TableBody>
									{ifpdTable.map((row) => {
										return (
											<TableRow style={{ textAlign: "centre" }}>
												<TableCell>{row.tradeDate}</TableCell>
												<TableCell>
													<TableRow>
														<TableCell>{row.fii_longValue}</TableCell>
														<TableCell>{row.fii_shortValue}</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>
													<TableRow>
														<TableCell>{row.dii_longValue}</TableCell>
														<TableCell>{row.dii_shortValue}</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>
													<TableRow>
														<TableCell>{row.pro_longValue}</TableCell>
														<TableCell>{row.pro_shortValue}</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>
													<TableRow>
														<TableCell>{row.client_longValue}</TableCell>
														<TableCell>{row.client_shortValue}</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>{row.spotValue}</TableCell>
												<TableCell>{row.spotChange}</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
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

				{/* <DailyChangeAlt /> */}
			</section>
		</>
	);
};
export default DailyChange;
