import DataTable from "react-data-table-component";
import { LiaSortSolid } from "react-icons/lia";
import { useTrade } from "../Context/TradeContext";

const FiiData = () => {
	const { fii } = useTrade();
	console.log(fii[0]);

	const columnNF = [
		{
			name: "Date",
			selector: (row) => row.tradeDate,
			sortable: true,
			minWidth: 100,
		},
		{
			name: "Net Contracts",
			selector: (row) => row.netContract,
			minWidth: 100,
		},
		{
			name: "Net Amount",
			selector: (row) => row.netAmount,
			minWidth: 100,
		},
		{
			name: "COI",
			selector: (row) => row.netChange,
			minWidth: 100,
		},
		{
			name: "Position Buildup",
			selector: (row) => row.positionBuildUp,
			minWidth: 100,
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
						<section className="space-x-3 justify-center flex children:px-10 children:py-5 align-middle children:bg-indigo-600 children: w-64 text-white">
							<h2>NIFTY FEATURES</h2>
							<h2>NIFTY OPTIONS</h2>
							<h2>BANKNIFTY FEATURES</h2>
							<h2>BANKNIFTY OPTIONS</h2>
						</section>

						<div className="mt-8 space-y-8">
							<h1>NIFTY FUTURES</h1>
							<DataTable
								columns={columnNF}
								data={fii[0]["NIFTY FUTURES"]}
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
							<h1>BANKNIFTY OPTIONS</h1>
							<DataTable
								columns={columnNF}
								data={fii[1]["NIFTY OPTIONS"]}
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
							<h1>BANKNIFTY FEATURES</h1>
							<DataTable
								columns={columnNF}
								data={fii[2]["BANKNIFTY FUTURES"]}
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
							<h1>BANKNIFTY OPTIONS</h1>
							<DataTable
								columns={columnNF}
								data={fii[3]["BANKNIFTY OPTIONS"]}
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
export default FiiData;
