import { LiaSortSolid } from "react-icons/lia";

import DataTable, { defaultThemes } from "react-data-table-component";
import { useTrade } from "../Context/TradeContext";
import MonthYear from "./MonthYear";

const DailyChangeAlt = () => {
	const { ifpdTable, months } = useTrade();

	console.log(ifpdTable);

	const columns = [
		{
			name: "Date",
			selector: (row) => row.tradeDate,
			sortable: true,
		},
		{
			name: "FII Long",
			selector: (row) => <span className={`${row.fii_longValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.fii_longValue}</span>,
		},
		{
			name: "FII Short",
			selector: (row) => <span className={`${row.fii_shortValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.fii_shortValue}</span>,
		},
		{
			name: "DII Long",
			selector: (row) => <span className={`${row.dii_longValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.dii_longValue}</span>,
		},
		{
			name: "DII Short",
			selector: (row) => <span className={`${row.dii_shortValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.dii_shortValue}</span>,
		},
		{
			name: "Pro Long",
			selector: (row) => <span className={`${row.pro_longValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.pro_longValue}</span>,
		},
		{
			name: "Pro Short",
			selector: (row) => <span className={`${row.pro_shortValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.pro_shortValue}</span>,
		},
		{
			name: "Client Long",
			selector: (row) => <span className={`${row.client_longValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.client_longValue}</span>,
		},
		{
			name: "Client Short",
			selector: (row) => <span className={`${row.client_shortValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.client_shortValue}</span>,
		},
		{
			name: "Spot",
			selector: (row) => <span className={`${row.spotValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.spotValue}</span>,
		},
		{
			name: "Spot Change",
			selector: (row) => <span className={`${row.spotValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.spotValue}</span>,
		},
	];

	const sortIcon = <LiaSortSolid />;

	const customStyles = {
		header: {
			style: {
				minHeight: "3rem",
			},
		},
		headRow: {
			style: {
				borderTopStyle: "solid",
				borderTopWidth: "1px",
				fontSize: "1em",
				color: "#101868",
				borderColor: "#000000",
			},
		},
		rows: {
			highlightOnHoverStyle: {
				backgroundColor: "rgb(221 223 255)",
				borderColor: "#FFFFFF",
				outline: "1px solid #fafafa",
			},
		},
		headCells: {
			style: {
				"&:not(:last-of-type)": {
					borderRightStyle: "solid",
					borderRightWidth: "1px",
					borderRightColor: defaultThemes.default.divider.default,
				},
			},
		},
		cells: {
			style: {
				"&:not(:last-of-type)": {
					borderRightStyle: "solid",
					borderRightWidth: "1px",
					borderRightColor: defaultThemes.default.divider.default,
				},
			},
		},
	};

	return (
		<>
			<section className="mx-auto mt-10">
				<h1 className="font-bold text-3xl text-center uppercase">Index Futures Positions – Daily Changes</h1>

				<MonthYear months={months} />

				<section className="">
					<div className="">
						<div className="container mx-auto my-8">
							<DataTable
								columns={columns}
								data={ifpdTable}
								pagination
								sortIcon={sortIcon}
								highlightOnHover
								striped
								persistTableHead
								fixedHeader
								fixedHeaderScrollHeight="600px"
								customStyles={customStyles}
								// actions={actionsMemo}
								// subHeader
								// subHeaderComponent={<input type="text" placeholder="Search" className="outline-none border border-b-black" />}
							></DataTable>
						</div>
					</div>
				</section>
			</section>
		</>
	);
};
export default DailyChangeAlt;
