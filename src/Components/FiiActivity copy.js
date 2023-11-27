import { useTrade } from "../Context/TradeContext";

/* eslint-disable eqeqeq */
const FiiActivity = ({ response: { faoParticipants } }) => {
	const { date } = useTrade();

	let newDate = date.split("-").reverse().join("-");

	if (undefined != faoParticipants || null != faoParticipants) {
		/// Set IsProfit?
		const callProfit = faoParticipants.intradayCallsNet >= 0;
		const putProfit = faoParticipants.intradayPutsNet >= 0;
		return (
			<main>
				{/* <div className="md:grid md:grid-cols-3">

					<div className="bg-white border border-black p-3 m-5 rounded-2xl text-xs">
						<div className="flex justify-center space-x-5 items-center">
							<p className="font-bold">CALLS(CE)</p>
							<p className={callProfit ? "text-fb_green font-bold" : "text-fb_prime font-bold"}>
								{faoParticipants.intradayCallsNet}
								<span className="text-fb_black font-bold"> QTY</span>
							</p>
							<p
								className={
									callProfit
										? "px-2 py-1 rounded-md text-white bg-green-500"
										: "px-2 py-1 rounded-md text-white bg-red-500"
								}
							>
								{callProfit ? "Bullish" : "Bearish"}
							</p>
						</div>

						<div className="grid md:grid-cols-2 m-5 justify-center">
							<div className="bg-white border border-red-500 p-4 m-2 w-64 md:w-40  rounded-xl">
								<div className="space-y-2">
									<p className="font-bold">LONG OI Ch</p>
									<div className="flex justify-between items-center">
										<p className="font-bold">{faoParticipants.callsLongChange}</p>
										<p className="font-bold"> -11%</p>
									</div>
									<p className="font-bold">Long Unwind</p>
								</div>
							</div>

							<div className="bg-red-500 p-4 m-2 rounded-xl text-white">
								<div className="space-y-3">
									<p className="font-bold">SHORT OI Ch</p>
									<div className="flex justify-between items-center">
										<p className="font-bold">{faoParticipants.callsShortChange}</p>
										<p className="font-bold"> -11%</p>
									</div>
									<p>Long Unwind</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white border border-black p-3 m-5 rounded-2xl text-xs">
						<div className="flex justify-center space-x-5 items-center">
							<p className="font-bold">PUT(PE)</p>
							<p className={putProfit > 0 ? "text-fb_green font-bold" : "text-fb_prime font-bold"}>
								{faoParticipants.intradayPutsNet}
								<span className="text-fb_black font-bold"> QTY</span>
							</p>
							<p
								className={
									putProfit
										? "px-2 py-1 rounded-md text-white bg-green-500"
										: "px-2 py-1 rounded-md text-white bg-red-500"
								}
							>
								{callProfit ? "Bullish" : "Bearish"}
							</p>
						</div>

						<div className="grid md:grid-cols-2 m-5  justify-center">
							<div className="bg-white border border-red-500 p-4 m-2 w-64 md:w-40 rounded-xl">
								<div className="space-y-2">
									<p className="font-bold">LONG OI Ch</p>
									<div className="flex justify-between items-center">
										<p className="font-bold">{faoParticipants.putsLongChange}</p>
										<p className="font-bold"> -11%</p>
									</div>
									<p className="font-bold">Long Unwind</p>
								</div>
							</div>

							<div className="bg-green-500 p-4 m-2 rounded-xl text-white">
								<div className="space-y-3">
									<p className="font-bold">SHORT OI Ch</p>
									<div className="flex justify-between items-center">
										<p className="font-bold">{faoParticipants.putsShortChange}</p>
										<p className="font-bold"> -11%</p>
									</div>
									<p>Long Unwind</p>
								</div>
							</div>
						</div>
					</div>
					</div> */}
			</main>
		);
	} else {
		return (
			<div className="bg-fb_green text-fb_white p-20">
				<h1>Data Unavailable on {newDate}</h1>
			</div>
		);
	}
};
export default FiiActivity;