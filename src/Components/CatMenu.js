import { useState } from "react";
const currentDate = new Date().toISOString().slice(0, 10);

const CatMenu = ({ tradeData, setTradeData }) => {
	const [date, setDate] = useState(currentDate);

	console.log(date);

	const filterItem = (company) => {
		// 	const updatedItem = tradeData.filter((currentElement) => {
		// 		return currentElement.companyName === company;
		// 	});
		// 	setTradeData(updatedItem);
	};

	return (
		<>
			<div className="flex justify-center container">
				<div className=" my-5 flex justify-center">
					<div className="flex justify-evenly space-x-4 text-white">
						<button className="bg-black px-5 py-2 rounded-md" onClick={() => filterItem("Client")}>
							Client
						</button>
						<button className="bg-black px-5 py-2 rounded-md" onClick={() => filterItem("DII")}>
							DII
						</button>
						<button className="bg-black px-5 py-2 rounded-md" onClick={() => filterItem("FII")}>
							FII
						</button>
						<button className="bg-black px-5 py-2 rounded-md" onClick={() => filterItem("Pro")}>
							Pro
						</button>
					</div>
				</div>
			</div>
			<div className="space-y-5">
				<h1 className="text-2xl font-bold">Expiry</h1>
				<input className="border border-black p-2" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
				<h1 className="text-2xl font-bold">{date}</h1>
			</div>
		</>
	);
};
export default CatMenu;
