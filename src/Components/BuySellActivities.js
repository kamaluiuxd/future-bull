import { useTrade } from "../Context/TradeContext";

const BuySellActivities = ({ response: { fiiStatsCalculations } }) => {
	const { date } = useTrade();

	let newDate = date.split("-").reverse().join("-");
	console.log(fiiStatsCalculations);

	if (undefined != fiiStatsCalculations || null != fiiStatsCalculations) {
		return (
			<div>
				<div className="md:grid md:grid-cols-4">
					{/* Card Start */}

					<div className="bg-white border border-black p-3 m-5 rounded-2xl text-xs">
						<div className="flex justify-between space-x-5 items-center p-5">
							<p className="font-bold text-lg">Stocks</p>
							{/* <p className="px-2 py-1 rounded-md text-white bg-red-500">{fiiStatsCalculations.indexFutures}</p> */}
						</div>

						<div className="grid md:grid-cols-2 m-5 justify-center">
							<div>
								<p className="font-bold">FII</p>
								<p>888.5 Cr</p>
							</div>

							<div>
								<p className="font-bold">DII</p>
								<p>258.5 Cr</p>
							</div>
						</div>
					</div>

					{/* Card End */}

					{/* Card Start */}
					<div className="bg-white border border-black p-3 m-5 rounded-2xl text-xs">
						<div className="flex justify-between space-x-5 items-center p-5">
							<p className="font-bold text-lg">FII Index Futures</p>
							<p className="px-2 py-1 rounded-md text-white bg-red-500">{fiiStatsCalculations.indexFutures}</p>
						</div>

						<div className="grid md:grid-cols-3 m-5 justify-around">
							<div>
								<p className=" font-bold">Nifty</p>
								<p>{fiiStatsCalculations.niftyFutures}</p>
							</div>

							<div>
								<p className=" font-bold">Bank Nifty</p>
								<p>{fiiStatsCalculations.bankNiftyFutures}</p>
							</div>
							<div>
								<p className=" font-bold">Others</p>
								<p>{fiiStatsCalculations.finNiftyFutures}</p>
							</div>
						</div>
					</div>
					{/* Card End */}
				</div>
			</div>
		);
	} else {
		return (
			<div className="bg-fb_green text-fb_white p-20">
				<h1>Data Unavailable on {newDate}</h1>
			</div>
		);
	}
};
export default BuySellActivities;
