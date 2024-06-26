import { useTrade } from "../Context/TradeContext";

const CompanyFilter = () => {
	const { setItem } = useTrade();

	const companyData = ["FII", "DII", "Client", "Pro"];

	const filterItem = (company) => {
		setItem(company);
	};
	return (
		<div className="flex">
			<div className=" my-5 flex justify-center">
				<div className="flex justify-evenly space-x-4 text-white ">
					{companyData.map((cd, index) => {
						return (
							<button key={index} className="bg-black	 px-5 py-2 rounded-full" onClick={() => filterItem(cd)}>
								{cd}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default CompanyFilter;
