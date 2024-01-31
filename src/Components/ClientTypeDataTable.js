import { Button } from "@mui/material";
import DataTable, { defaultThemes } from "react-data-table-component";
import { LiaSortSolid } from "react-icons/lia";

const ClientTypeDataTable = ({ clientType }) => {
	console.log(clientType);

	const columnFeature = [
		{
			name: "Date",
			selector: (row) => row.tradeDate,
			sortable: true,
		},
		{
			name: "Net %",
			selector: (row) => row.futureIndexNetPercentage,
		},
		{
			name: "Diff in Long",
			selector: (row) => row.futureIndexLongChange,
		},
		{
			name: "Diff in Short",
			selector: (row) => row.futureIndexShortChange,
		},
		{
			name: "Net OI",
			selector: (row) => row.futureIndexNetOI,
		},
		{
			name: "Position (Long vs Short)",
			selector: (row) => row.futureIndexPosition,
		},
	];
	const columnIndexCall = [
		{
			name: "Date",
			selector: (row) => row.tradeDate,
			sortable: true,
		},
		{
			name: "Net %",
			selector: (row) => row.indexCallLongNetPercentage,
		},
		{
			name: "Diff in Long",
			selector: (row) => row.callsLongChange,
		},
		{
			name: "Diff in Short",
			selector: (row) => row.callsShortChange,
		},
		{
			name: "Net OI",
			selector: (row) => row.indexCallLongNetOI,
		},
		{
			name: "Position (Long vs Short)",
			selector: (row) => row.indexCallLongPosition,
		},
	];
	const columnIndexPut = [
		{
			name: "Date",
			selector: (row) => row.tradeDate,
			sortable: true,
		},
		{
			name: "Net %",
			selector: (row) => row.indexPutLongNetPercentage,
		},
		{
			name: "Diff in Long",
			selector: (row) => row.putsLongChange,
		},
		{
			name: "Diff in Short",
			selector: (row) => row.putsShortChange,
		},
		{
			name: "Net OI",
			selector: (row) => row.indexPutLongNetOI,
		},
		{
			name: "Position (Long vs Short)",
			selector: (row) => row.indexPutLongPosition,
		},
	];

	// row.positionBuildUp

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
				borderColor: "#000000",

				borderWidth: "1px",
			},
		},
		headCells: {
			style: {
				"&:not(:last-of-type)": {
					borderRightStyle: "solid",
					borderRightWidth: "1px",
					borderRightColor: "#000000",
				},
			},
		},
		cells: {
			style: {
				"&:not(:last-of-type)": {
					borderRightStyle: "solid",
					borderRightWidth: "1px",
					borderRightColor: "#000000",
				},
			},
		},
	};
	return (
		<div>
			<section className="">
				<div className="">
					<div className="w-[50%] mx-auto my-8">
						<div className="mt-8 space-y-8">
							<h1>FUTURES</h1>
							<DataTable
								columns={columnFeature}
								data={clientType}
								sortIcon={sortIcon}
								highlightOnHover
								striped
								persistTableHead
								fixedHeader
								fixedHeaderScrollHeight="600px"
								customStyles={customStyles}
							></DataTable>
						</div>

						<div className="mt-8 space-y-8">
							<h1>INDEX CALL</h1>
							<DataTable
								columns={columnIndexCall}
								data={clientType}
								sortIcon={sortIcon}
								highlightOnHover
								striped
								persistTableHead
								fixedHeader
								fixedHeaderScrollHeight="600px"
								customStyles={customStyles}
							></DataTable>
						</div>

						<div className="mt-8 space-y-8">
							<h1>INDEX PUT</h1>
							<DataTable
								columns={columnIndexPut}
								data={clientType}
								sortIcon={sortIcon}
								highlightOnHover
								striped
								persistTableHead
								fixedHeader
								fixedHeaderScrollHeight="600px"
								customStyles={customStyles}
							></DataTable>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default ClientTypeDataTable;
