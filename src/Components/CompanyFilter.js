import { useTrade } from "../Context/TradeContext";

const CompanyFilter = () => {
	const { setItem } = useTrade();

	const companyData = ["Client", "DII", "FII", "Pro"];

	const filterItem = (company) => {
		setItem(company);
	};
	return (
		<div className="flex justify-center container">
			<div className=" my-5 flex justify-center">
				<div className="flex justify-evenly space-x-4 text-white ">
					{companyData.map((cd) => {
						return (
							<button className="bg-black	 px-5 py-2 rounded-full" onClick={() => filterItem(cd)}>
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
