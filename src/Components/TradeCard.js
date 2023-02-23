const TradeCard = ({ response: { sameDayData } }) => {
	if (undefined !== sameDayData || null != sameDayData) {
		console.log("Not Empty");
		console.log(sameDayData.date == null ? "No data" : "Data on");
		return (
			<div>
				<div className="md:grid md:grid-cols-3">
					{/* Card Start */}
					<div className="bg-white border border-black p-3 m-2 rounded-2xl text-xs">
						<div className="flex justify-between items-center">
							<p className="font-bold">CALLS(CE)</p>
							<p className="font-bold">
								{sameDayData.tillDateCallNet}
								<span> QTY</span>
							</p>
							<p className=" px-2 py-1 rounded-md text-white bg-red-500 ">Bearish</p>
						</div>

						<div className="grid grid-cols-2">
							<div className="bg-white border border-red-500 p-4 m-2 w-48 rounded-xl">
								<div className="space-y-2">
									<p className="font-bold">LONG OI Ch</p>
									<div className="flex justify-between items-center">
										<p className="font-bold">{sameDayData.callLong}</p>
										<p className="font-bold"> -11%</p>
									</div>
									<p className="font-bold">Long Unwind</p>
								</div>
							</div>

							<div className="bg-red-500 p-4 m-2 rounded-xl w-48 text-white">
								<div className="space-y-3">
									<p className="font-bold">SHORT OI Ch</p>
									<div className="flex justify-between items-center">
										<p className="font-bold">{sameDayData.callShort}</p>
										<p className="font-bold"> -11%</p>
									</div>
									<p>Long Unwind</p>
								</div>
							</div>
						</div>
					</div>
					{/* Card End */}

					{/* Card Start */}
					<div className="bg-white border border-black p-3 m-2 rounded-2xl text-xs">
						<div className="flex justify-between items-center">
							<p className="font-bold">PUT(PE)</p>
							<p className="font-bold">
								{sameDayData.tillDatePutNet}
								<span> QTY</span>
							</p>
							<p className=" px-2 py-1 rounded-md text-white bg-green-500 ">Bullish</p>
						</div>

						<div className="grid grid-cols-2">
							<div className="bg-white border border-red-500 p-4 m-2 w-48 rounded-xl">
								<div className="space-y-2">
									<p className="font-bold">LONG OI Ch</p>
									<div className="flex justify-between items-center">
										<p className="font-bold">{sameDayData.putLong}</p>
										<p className="font-bold"> -11%</p>
									</div>
									<p className="font-bold">Long Unwind</p>
								</div>
							</div>

							<div className="bg-green-500 p-4 m-2 rounded-xl w-48 text-white">
								<div className="space-y-3">
									<p className="font-bold">SHORT OI Ch</p>
									<div className="flex justify-between items-center">
										<p className="font-bold">{sameDayData.putShort}</p>
										<p className="font-bold"> -11%</p>
									</div>
									<p>Long Unwind</p>
								</div>
							</div>
						</div>
					</div>
					{/* Card End */}
				</div>
			</div>
		);
	} else {
		return <div>Data Not Available</div>;
	}
};
export default TradeCard;
