import React, { useMemo } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import { LiaSortSolid } from "react-icons/lia";
import { MdDownloadForOffline } from "react-icons/md";

const TableDataComp = ({ table }) => {
	const columns = [
		{ name: "Date", selector: (row) => row.tradeDate, sortable: true, maxWidth: "200px" },
		{ name: "Nifty", selector: (row) => row.intradayCallsNet, sortable: true, maxWidth: "200px" },
		{
			name: "FII Call",
			selector: (row) => row.intradayCallsNet,
			sortable: true,
			maxWidth: "200px",
		},
		{
			name: "FII Put",
			selector: (row) => row.intradayPutsNet,
			sortable: true,
			maxWidth: "200px",
		},
		{
			name: "FII Future",
			selector: (row) => row.indexFutures,
			sortable: true,
			maxWidth: "200px",
		},
		{
			name: "FII Index future OI",
			selector: (row) => row.futureIndexOI,
			sortable: true,
			maxWidth: "200px",
		},
		{
			name: "FII Index future OI Chg",
			selector: (row) => row.fiiindexfuture,
			sortable: true,
			maxWidth: "200px",
		},
		{
			name: "FII Cash",
			selector: (row) => row.fiicash,
			sortable: true,
			maxWidth: "200px",
		},
		{
			name: "DII Cash",
			selector: (row) => row.diicash,
			sortable: true,
			maxWidth: "200px",
		},
	];
	console.log(table);
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

	function downloadCSV(array) {
		const link = document.createElement("a");
		let csv = convertArrayOfObjectsToCSV(array);
		if (csv == null) return;

		const filename = `${table[0].tradeDate}.csv`;

		if (!csv.match(/^data:text\/csv/i)) {
			csv = `data:text/csv;charset=utf-8,${csv}`;
		}

		link.setAttribute("href", encodeURI(csv));
		link.setAttribute("download", filename);
		link.click();
	}

	const customStyles = {
		header: {
			style: {
				minHeight: "56px",
			},
		},
		headRow: {
			style: {
				borderTopStyle: "solid",
				borderTopWidth: "1px",
				fontSize: "1em",
				color: "#101868",
				borderColor: "black",
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
			<MdDownloadForOffline className="pointer" onClick={(e) => onExport(e.target.value)} />
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
				actions={actionsMemo}
			></DataTable>
		</div>
	);
};
export default TableDataComp;
