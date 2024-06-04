// import { TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import { useState } from "react";
// import DailyChangeAlt from "../Components/DailyChangeAlt";
import MonthYear from "../Components/MonthYear";
import { useTrade } from "../Context/TradeContext";

const DailyChange = () => {
	const { months, ifpdTable } = useTrade();
	// const [page, setPage] = useState(0);
	// const [rowsPerPage, setRowsPerPage] = useState(10);

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

	// const handleChangePage = (event, newPage) => {
	// 	setPage(newPage);
	// };

	// const handleChangeRowsPerPage = (event) => {
	// 	setRowsPerPage(+event.target.value);
	// 	setPage(0);
	// };

	return (
		<>
			<section className="mx-auto mt-10 w-[80%]">
				<section className="flex space-x-10 my-10 items-center">
					<MonthYear months={months} />
					<h1 className="font-bold text-3xl text-center uppercase">Index Futures Positions – Daily Change</h1>
				</section>
				<div className="relative overflow-x-auto ">
					<Paper sx={{ width: "100%", overflow: "hidden" }}>
						<TableContainer sx={{ maxHeight: 600 }}>
							<Table stickyHeader aria-label="sticky table">
								<TableHead style={{ border: "1px solid black" }}>
									<TableRow style={{ textAlign: "left" }}>
										<TableCell style={{ width: "14%" }}>DATE</TableCell>
										<TableCell style={{ minWidth: "80px" }}>
											<TableRow style={{ textAlign: "left" }}>FII</TableRow>
											<TableRow>
												<TableCell style={{ textAlign: "left", minWidth: "80px" }}>Long</TableCell>
												<TableCell style={{ textAlign: "left", minWidth: "80px" }}>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>
											<TableRow>DII</TableRow>
											<TableRow>
												<TableCell style={{ textAlign: "left", minWidth: "80px" }}>Long</TableCell>
												<TableCell style={{ textAlign: "left", minWidth: "80px" }}>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>
											<TableRow>CLIENT</TableRow>
											<TableRow>
												<TableCell style={{ textAlign: "left", minWidth: "80px" }}>Long</TableCell>
												<TableCell style={{ textAlign: "left", minWidth: "80px" }}>Short</TableCell>
											</TableRow>
										</TableCell>
										<TableCell>
											<TableRow>PRO</TableRow>
											<TableRow>
												<TableCell style={{ textAlign: "left", minWidth: "80px" }}>Long</TableCell>
												<TableCell style={{ textAlign: "left", minWidth: "80px" }}>Short</TableCell>
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
												<TableCell style={{ textAlign: "left" }}>{row.tradeDate}</TableCell>
												<TableCell>
													<TableRow>
														<TableCell
															className={`text-white ${row.fii_longValue < 0 ? "bg-red-500" : "bg-green-500"}`}
															style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid", borderRight: "none" }}
														>
															{(row.fii_longValue * 100).toFixed(0)} %
														</TableCell>
														<TableCell
															className={`text-white ${row.fii_shortValue < 0 ? "bg-red-500" : "bg-green-500"}`}
															style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid" }}
														>
															{(row.fii_shortValue * 100).toFixed(0)} %
														</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>
													<TableRow>
														<TableCell
															className={`text-white ${row.dii_longValue < 0 ? "bg-red-500" : "bg-green-500"}`}
															style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid", borderRight: "none" }}
														>
															{(row.dii_longValue * 100).toFixed(0)} %
														</TableCell>
														<TableCell
															className={`text-white ${row.dii_shortValue < 0 ? "bg-red-500" : "bg-green-500"}`}
															style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid" }}
														>
															{(row.dii_shortValue * 100).toFixed(0)} %
														</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>
													<TableRow>
														<TableCell
															className={`text-white ${row.pro_longValue < 0 ? "bg-red-500" : "bg-green-500"}`}
															style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid", borderRight: "none" }}
														>
															{(row.pro_longValue * 100).toFixed(0)} %
														</TableCell>

														<TableCell
															className={`text-white ${row.pro_shortValue < 0 ? "bg-red-500" : "bg-green-500"}`}
															style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid" }}
														>
															{(row.pro_shortValue * 100).toFixed(0)} %
														</TableCell>
													</TableRow>
												</TableCell>
												<TableCell>
													<TableRow>
														<TableCell
															className={`text-white ${row.client_longValue < 0 ? "bg-red-500" : "bg-green-500"}`}
															style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid", borderRight: "none" }}
														>
															{(row.client_longValue * 100).toFixed(0)} %
														</TableCell>
														<TableCell
															className={`text-white ${row.client_shortValue < 0 ? "bg-red-500" : "bg-green-500"}`}
															style={{ textAlign: "center", minWidth: "80px", border: "0.5px solid" }}
														>
															{(row.client_shortValue * 100).toFixed(0)} %
														</TableCell>
													</TableRow>
												</TableCell>
												<TableCell className={`${row.spotValue < 0 ? "text-red-500" : "text-green-500"}`} style={{ minWidth: "80px" }}>
													{row.spotValue}
												</TableCell>
												<TableCell className={`${row.spotChange < 0 ? "text-red-500" : "text-green-500"}`} style={{ minWidth: "80px" }}>
													{row.spotChange}
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</TableContainer>
						{/* <TablePagination
							rowsPerPageOptions={[10, 25, 100]}
							component="div"
							count={ifpdTable.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/> */}
					</Paper>
				</div>

				{/* <DailyChangeAlt /> */}
			</section>
		</>
	);
};
export default DailyChange;
