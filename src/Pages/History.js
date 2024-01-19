import { LiaSortSolid } from "react-icons/lia";

import DataTable, { defaultThemes } from "react-data-table-component";
import { useTrade } from "../Context/TradeContext";

const columns = [
	{
		name: "Date",
		selector: (row) => row.tradeDate,
		sortable: true,
		minWidth: 100,
	},
	{
		name: "Net Long Position",
		selector: (row) => <span className={`${row.netLongPosition < 0 ? "text-red-500" : "text-green-500"}`}>{row.netLongPosition}</span>,
		minWidth: 100,
	},
	{
		name: "Net OI",
		selector: (row) => <span className={`${row.netOI < 0 ? "text-red-500" : "text-green-500"}`}>{row.netOI}</span>,
		minWidth: 100,
	},
	{
		name: "Change in OI",
		selector: (row) => <span className={`${row.changeInOI < 0 ? "text-red-500" : "text-green-500"}`}>{row.changeInOI}</span>,
		minWidth: 100,
	},
	{
		name: "Spot",
		selector: (row) => <span className={`${row.closeValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.closeValue}</span>,
		minWidth: 100,
	},
	{
		name: "Spot Change",
		selector: (row) => <span className={`${row.changeValue < 0 ? "text-red-500" : "text-green-500"}`}>{row.changeValue}</span>,
		minWidth: 100,
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

const History = () => {
	const { ifphTable, setItem } = useTrade();

	const companyData = ["Client", "DII", "FII", "Pro"];

	const handleChange = (e) => {
		setItem(e.target.value);
	};

	return (
		<>
			<section className="mx-auto mt-10 w-[80%]">
				<h1 className="font-bold text-3xl text-center uppercase">Index Futures Positions – History</h1>

				<select onChange={handleChange} className="my-5 w-[10%] border border-black outline-none">
					{companyData.map((company, index) => (
						<option key={index} value={company}>
							{company}
						</option>
					))}
				</select>

				<section className="">
					<div className="">
						<div className="container mx-auto my-8">
							<DataTable
								columns={columns}
								data={ifphTable}
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
export default History;
