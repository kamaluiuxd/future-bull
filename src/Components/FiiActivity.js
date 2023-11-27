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
		} = faoParticipants;

		// const {} = fiiStatsCalculations;
		return (
			<main>
				<section className="grid grid-cols-3 children:p-4 children:border border-black font-bold">
					<div>Activity</div>
					<div>Calls</div>
					<div>Puts</div>
				</section>
				<section className="grid grid-cols-3 children:p-4 children:border border-black text-center font-bold">
					<div>Outstanding OI</div>
					{/* Calls */}
					<div>
						<div className="border border-black">{outstandingCallsNet} QTY</div>
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
						<div className="border border-black">{outstandingPutsNet} QTY</div>
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
						<div className="border border-black">{intradayCallsNet} QTY</div>
						<div className="grid grid-cols-2 children:border children:border-black">
							<div>
								<p>Long</p>
								<p>{callsLongChange}</p>
							</div>
							<div>
								<p>Short</p>
								<p>{callsShortChange}</p>
							</div>
						</div>
					</div>
					<div>
						<div className="border border-black">{intradayPutsNet} QTY</div>
						<div className="grid grid-cols-2 children:border children:border-black">
							<div>
								<p>Long</p>
								<p>{putsLongChange}</p>
							</div>
							<div>
								<p>Short</p>
								<p>{putsShortChange}</p>
							</div>
						</div>
					</div>
				</section>

				{/*  */}
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
			<div className="bg-fb_green text-fb_white p-20">
				<h1>Data Unavailable on {newDate}</h1>
			</div>
		);
	}
};
export default FiiActivity;
