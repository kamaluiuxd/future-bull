const BuySellActivities = ({ response: { fiiStatsCalculations } }) => {
	// const { date } = useTrade();

	// let newDate = date.split("-").reverse().join("-");

	// eslint-disable-next-line eqeqeq
	if (undefined != fiiStatsCalculations || null != fiiStatsCalculations) {
		// const { niftyFutures, bankNiftyFutures, finNiftyFutures } = fiiStatsCalculations;

		return (
			<div>
				<div className="grid grid-cols-3 children:border children:border-[#c9c9c9]">
					<div>
						<h2>Index Future</h2>
						<h3>{fiiStatsCalculations.niftyFutures} Cr</h3>
					</div>
					<div>
						<h2>Nifty</h2>
						<h3>{fiiStatsCalculations.bankNiftyFutures} Cr</h3>
					</div>
					<div>
						<h2>Bank Nifty</h2>
						<h3>{fiiStatsCalculations.finNiftyFutures} Cr</h3>
					</div>
				</div>
			</div>
		);
	}
};
export default BuySellActivities;
