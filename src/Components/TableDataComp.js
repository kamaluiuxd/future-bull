/* eslint-disable react-hooks/exhaustive-deps */
// import moment from "moment";

import DataTable, { defaultThemes } from "react-data-table-component";
import { LiaSortSolid } from "react-icons/lia";

const TableDataComp = ({ table }) => {
	const columns = [
		{
			name: "Date",
			selector: (row) => row.tradeDate,
			sortable: true,
			maxWidth: "150px",
		},
		{
			name: "Nifty",
			selector: (row) => <span className={`${row.nifty < 0 ? "text-red-500" : "text-green-500"}`}>{row.nifty}</span>,
			maxWidth: "150px",
		},
		{
			name: "FII Call",
			selector: (row) => <span className={`${row.intradayCallsNet < 0 ? "text-red-500" : "text-green-500"}`}>{row.intradayCallsNet}</span>,
			maxWidth: "150px",
		},
		{
			name: "FII Put",
			selector: (row) => <span className={`${row.intradayPutsNet < 0 ? "text-red-500" : "text-green-500"}`}>{row.intradayPutsNet}</span>,
			maxWidth: "150px",
		},
		{
			name: "FII Future",
			selector: (row) => <span className={`${row.indexFutures < 0 ? "text-red-500" : "text-green-500"}`}>{row.indexFutures}</span>,
			maxWidth: "150px",
		},
		{
			name: "FII Index future OI",
			selector: (row) => <span className={`${row.futureIndexOI < 0 ? "text-red-500" : "text-green-500"}`}>{row.futureIndexOI}</span>,
			maxWidth: "200px",
		},
		{
			name: "FII Index future OI Chg",
			selector: (row) => row.futureIndexOI,
			sortable: true,
			//maxWidth: "200px",
		},
		{
			name: "FII Cash",
			selector: (row) => row.fiiCash,
			sortable: true,
			//maxWidth: "200px",
		},
		{
			name: "DII Cash",
			selector: (row) => row.diiCash,
			sortable: true,
			//maxWidth: "200px",
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
		<div className="container mx-auto my-8">
			<DataTable
				columns={columns}
				data={table}
				pagination
				sortIcon={sortIcon}
				highlightOnHover
				striped
				persistTableHead
				fixedHeader
				fixedHeaderScrollHeight="600px"
				customStyles={customStyles}
			></DataTable>
		</div>
	);
};
export default TableDataComp;
