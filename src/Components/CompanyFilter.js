import { useTrade } from "../Context/TradeContext";

const CompanyFilter = () => {
	const { setItem } = useTrade();

	const filterItem = (company) => {
		setItem(company);
	};
	return (
		<div className="flex justify-center container">
			<div className=" my-5 flex justify-center">
				<div className="flex justify-evenly space-x-4 text-white ">
					<button className="bg-black	 px-5 py-2 rounded-full" onClick={() => filterItem("Client")}>
						Client
					</button>
					<button className="bg-black px-5 py-2 rounded-full" onClick={() => filterItem("DII")}>
						DII
					</button>
					<button className="bg-black px-5 py-2 rounded-full" onClick={() => filterItem("FII")}>
						FII
					</button>
					<button className="bg-black px-5 py-2 rounded-full" onClick={() => filterItem("Pro")}>
						Pro
					</button>
				</div>
			</div>
		</div>
	);
};
export default CompanyFilter;
