import { useTrade } from "../Context/TradeContext";
import BuySellActivities from "./BuySellActivities";

/* eslint-disable eqeqeq */
const FiiActivity = ({ response: { faoParticipants } }) => {
	const { date, response } = useTrade();

	let newDate = date.split("-").reverse().join("-");

	if (undefined != faoParticipants || null != faoParticipants) {
		/// Set IsProfit?
		// const callProfit = faoParticipants.intradayCallsNet >= 0;
		// const putProfit = faoParticipants.intradayPutsNet >= 0;

		const {
			outstandingCallsNet,
			outstandingPutsNet,
			callsLongChange,
			callsShortChange,
			intradayCallsNet,
			intradayPutsNet,
			putsLongChange,
			putsShortChange,
			optionCallLong,
			optionCallShort,
			optionPutLong,
			optionPutShort,
			callLongOIPercentage,
			callShortOIPercentage,
			putsLongOIPercentage,
			putsShortOIPercentage,
		} = faoParticipants;

		const callsProfit = outstandingCallsNet > 0;
		const putsProfit = outstandingPutsNet > 0;
		const iOcallsProfit = intradayCallsNet > 0;
		const iOputsProfit = intradayPutsNet > 0;

		const formatAmountCN = (outstandingCallsNet) => {
			if (outstandingCallsNet >= 100000) {
				// If amount is in lakh
				return (outstandingCallsNet / 100000).toFixed(2) + "L";
			} else {
				// If amount is in thousand
				return outstandingCallsNet;
			}
		};

		const formatAmountPN = (outstandingPutsNet) => {
			if (outstandingPutsNet >= 100000) {
				// If amount is in lakh
				return (outstandingPutsNet / 100000).toFixed(2) + " L";
			} else {
				// If amount is in thousand
				return outstandingPutsNet;
			}
		};
		console.log(formatAmountPN(outstandingPutsNet));
		// const {} = fiiStatsCalculations;
		return (
			<main>
				<section className="grid grid-cols-3 children:p-4 children:border border-black font-bold">
					<div>Activity</div>
					<div>Calls</div>
					<div>Puts</div>
				</section>
				<section className={`grid grid-cols-3 children:p-4 children:border border-black text-center font-bold `}>
					<div>Outstanding OI</div>
					{/* Calls */}
					<div>
						<div className={`border border-b-0 border-black ${callsProfit ? "text-green-500" : "text-red-500"}`}>
							{formatAmountCN(outstandingCallsNet)} QTY
						</div>
						<div className="grid grid-cols-2 children:border children:border-black">
							<div>
								<p>Long</p>
								<p>{optionCallLong}</p>
							</div>
							<div>
								<p>Short</p>
								<p>{optionCallShort}</p>
							</div>
						</div>
					</div>

					{/* Puts */}
					<div>
						<div className={`border border-b-0 border-black ${putsProfit ? "text-green-500" : "text-red-500"}`}>
							{formatAmountPN(outstandingPutsNet)} QTY
						</div>
						<div className="grid grid-cols-2 children:border children:border-black">
							<div>
								<p>Long</p>
								<p>{optionPutLong}</p>
							</div>
							<div>
								<p>Short</p>
								<p>{optionPutShort}</p>
							</div>
						</div>
					</div>
				</section>
				<section className="grid grid-cols-3 children:p-4 children:border border-black text-center font-bold">
					<div>Index Options</div>
					<div>
						<div className={`"border border-b-0 border-black" ${iOcallsProfit ? "text-green-500" : "text-red-500"}`}>{intradayCallsNet} QTY</div>
						<div className="grid grid-cols-2 children:border children:border-black">
							<div>
								<p>Long</p>
								<p>
									{callsLongChange} ({callLongOIPercentage.toFixed()} %)
								</p>
							</div>
							<div>
								<p>Short</p>
								<p>
									{callsShortChange} ({callShortOIPercentage.toFixed()} %)
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className={`"border border-b-0 border-black" ${iOputsProfit ? "text-green-500" : "text-red-500"}`}>{intradayPutsNet} QTY</div>
						<div className="grid grid-cols-2 children:border children:border-black">
							<div>
								<p>Long</p>
								<p>
									{putsLongChange} ({putsLongOIPercentage.toFixed()} %)
								</p>
							</div>
							<div>
								<p>Short</p>
								<p>
									{putsShortChange} <span className=" text-red-500 rounded-sm">{putsShortOIPercentage.toFixed()} %</span>
								</p>
							</div>
						</div>
					</div>
				</section>

				{/*BuySellActivities  */}
				<section className="grid grid-cols-12 children:p-4 children:border border-black text-center font-bold">
					<div className="col-span-4">Buy Sell Activity</div>
					<div className="col-span-8 ">
						<BuySellActivities response={response} />
					</div>
				</section>
			</main>
		);
	} else {
		return (
			<div className="bg-fb_prime text-fb_white p-20">
				<h1>Data Unavailable on {newDate}</h1>
			</div>
		);
	}
};
export default FiiActivity;
