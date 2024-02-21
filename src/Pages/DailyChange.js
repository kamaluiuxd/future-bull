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
								<TableHead style={{ border: "1px solid black" }}>
									<TableRow style={{ textAlign: "center" }}>
										<TableCell>DATE</TableCell>
										<TableCell>
											<TableRow style={{ textAlign: "centre" }}>FII</TableRow>
											<TableRow>
												<TableCell style={{ textAlign: "center", minWidth: "80px" }}>Long</TableCell>

												<TableCell style={{ textAlign: "center", minWidth: "80px" }}>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>
											<TableRow>DII</TableRow>
											<TableRow>
												<TableCell style={{ textAlign: "center", minWidth: "80px" }}>Long</TableCell>
												<TableCell style={{ textAlign: "center", minWidth: "80px" }}>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>
											<TableRow>CLIENT</TableRow>
											<TableRow>
												<TableCell style={{ textAlign: "center", minWidth: "80px" }}>Long</TableCell>
												<TableCell style={{ textAlign: "center", minWidth: "80px" }}>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>
											<TableRow>PRO</TableRow>
											<TableRow>
												<TableCell style={{ textAlign: "center", minWidth: "80px" }}>Long</TableCell>
												<TableCell style={{ textAlign: "center", minWidth: "80px" }}>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>SPOT</TableCell>
										<TableCell>SPOT CHANGES</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{ifpdTable.map((row) => {
										return (
											<TableRow style={{ textAlign: "center" }}>
												<TableCell style={{ textAlign: "center" }}>{row.tradeDate}</TableCell>
												<TableCell>
													<TableRow>
														<TableCell style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid", borderRight: "none" }}>
															{row.fii_longValue}
														</TableCell>
														<TableCell style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid" }}>{row.fii_shortValue}</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>
													<TableRow>
														<TableCell style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid", borderRight: "none" }}>
															{row.dii_longValue}
														</TableCell>
														<TableCell style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid" }}>{row.dii_shortValue}</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>
													<TableRow>
														<TableCell style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid", borderRight: "none" }}>
															{row.pro_longValue}
														</TableCell>
														<TableCell style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid" }}>{row.pro_shortValue}</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>
													<TableRow>
														<TableCell style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid", borderRight: "none" }}>
															{row.client_longValue}
														</TableCell>
														<TableCell style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid" }}>{row.client_shortValue}</TableCell>
													</TableRow>
												</TableCell>
												<TableCell style={{ minWidth: "80px" }}>{row.spotValue}</TableCell>
												<TableCell style={{ minWidth: "80px" }}>{row.spotChange}</TableCell>
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
