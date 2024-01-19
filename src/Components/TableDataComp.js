// import moment from "moment";
import React, { useMemo } from "react";
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
			selector: (row) => <span className={`${row.intradayCallsNet < 0 ? "text-red-500" : "text-green-500"}`}>{row.intradayCallsNet}</span>,
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
			selector: (row) => row.futureIndexOI,
			sortable: true,
			//maxWidth: "200px",
		},
		{
			name: "DII Cash",
			selector: (row) => row.futureIndexOI,
			sortable: true,
			//maxWidth: "200px",
		},
	];
	const sortIcon = <LiaSortSolid />;

	function convertArrayOfObjectsToCSV(array) {
		let result;

		const columnDelimiter = ",";
		const lineDelimiter = "\n";
		const keys = Object.keys(table[0]);

		result = "";
		result += keys.join(columnDelimiter);
		result += lineDelimiter;

		array.forEach((item) => {
			let ctr = 0;
			keys.forEach((key) => {
				if (ctr > 0) result += columnDelimiter;

				result += item[key];

				ctr++;
			});
			result += lineDelimiter;
		});

		return result;
	}

	const downloadCSV = (array) => {
		const link = document.createElement("a");
		let csv = convertArrayOfObjectsToCSV(array);
		if (csv == null) return;

		const filename = "Future-bull.csv";

		if (!csv.match(/^data:text\/csv/i)) {
			csv = `data:text/csv;charset=utf-8,${csv}`;
		}

		link.setAttribute("href", encodeURI(csv));
		link.setAttribute("download", filename);
		link.click();
	};

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

	const Export = ({ onExport }) => (
		<section>
			<button className="pointer bg-blue-600 py-2 px-4 text-white text-sm" onClick={(e) => onExport(e.target.value)}>
				Export
			</button>
		</section>
	);

	const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(table)} />, []);

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
				// actions={actionsMemo}
				actions={actionsMemo}
				// subHeader
				// subHeaderComponent={<input type="text" placeholder="Search" className="outline-none border border-b-black" />}
			></DataTable>
		</div>
	);
};
export default TableDataComp;
