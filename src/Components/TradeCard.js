const TradeCard = ({ response: { sameDayData } }) => {
	console.log(sameDayData);

	return (
		<div>
			<div className="md:grid md:grid-cols-3">
				{/* Card Start */}
				<div className="bg-white border border-black p-3 m-2 rounded-2xl text-xs">
					<div className="flex justify-between items-center">
						<p className="font-bold">CALLS(CE)</p>
						<p className="font-bold">
							-11,308<span> QTY</span>
						</p>
						<p className=" px-2 py-1 rounded-md text-white bg-red-500 ">Bearish</p>
					</div>

					<div className="grid grid-cols-2">
						<div className="bg-white border border-red-500 p-4 m-2 w-48 rounded-xl">
							<div className="space-y-2">
								<p className="font-bold">LONG OI Ch</p>
								<div className="flex justify-between items-center">
									<p className="font-bold">{}</p>
									<p className="font-bold"> -11%</p>
								</div>
								<p className="font-bold">Long Unwind</p>
							</div>
						</div>

						<div className="bg-red-500 p-4 m-2 rounded-xl w-48 text-white">
							<div className="space-y-3">
								<p className="font-bold">SHORT OI Ch</p>
								<div className="flex justify-between items-center">
									<p className="font-bold">{}</p>
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
						<p className="font-bold">CALLS(CE)</p>
						<p className="font-bold">
							-11,308<span> QTY</span>
						</p>
						<p className=" px-2 py-1 rounded-md text-white bg-green-500 ">Bullish</p>
					</div>

					<div className="grid grid-cols-2">
						<div className="bg-white border border-red-500 p-4 m-2 w-48 rounded-xl">
							<div className="space-y-2">
								<p className="font-bold">LONG OI Ch</p>
								<div className="flex justify-between items-center">
									<p className="font-bold">73232.0</p>
									<p className="font-bold"> -11%</p>
								</div>
								<p className="font-bold">Long Unwind</p>
							</div>
						</div>

						<div className="bg-green-500 p-4 m-2 rounded-xl w-48 text-white">
							<div className="space-y-3">
								<p className="font-bold">SHORT OI Ch</p>
								<div className="flex justify-between items-center">
									<p className="font-bold">73232.0</p>
									<p className="font-bold"> -11%</p>
								</div>
								<p>Long Unwind</p>
							</div>
						</div>
					</div>
				</div>
				{/* Card End */}
			</div>
			;
		</div>
	);
	// <div className="md:grid md:grid-cols-3">
	// 	{/* Card Start */}
	// 	<div className="bg-white border border-black p-3 m-2 rounded-2xl text-xs">
	// 		<div className="flex justify-between items-center">
	// 			<p className="font-bold">CALLS(CE)</p>
	// 			<p className="font-bold">
	// 				-11,308<span> QTY</span>
	// 			</p>
	// 			<p className=" px-2 py-1 rounded-md text-white bg-red-500 ">Bearish</p>
	// 		</div>

	// 		<div className="grid grid-cols-2">
	// 			<div className="bg-white border border-red-500 p-4 m-2 w-48 rounded-xl">
	// 				<div className="space-y-2">
	// 					<p className="font-bold">LONG OI Ch</p>
	// 					<div className="flex justify-between items-center">
	// 						<p className="font-bold">73232.0</p>
	// 						<p className="font-bold"> -11%</p>
	// 					</div>
	// 					<p className="font-bold">Long Unwind</p>
	// 				</div>
	// 			</div>

	// 			<div className="bg-red-500 p-4 m-2 rounded-xl w-48 text-white">
	// 				<div className="space-y-3">
	// 					<p className="font-bold">SHORT OI Ch</p>
	// 					<div className="flex justify-between items-center">
	// 						<p className="font-bold">73232.0</p>
	// 						<p className="font-bold"> -11%</p>
	// 					</div>
	// 					<p>Long Unwind</p>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	{/* Card End */}

	// 	{/* Card Start */}
	// 	<div className="bg-white border border-black p-3 m-2 rounded-2xl text-xs">
	// 		<div className="flex justify-between items-center">
	// 			<p className="font-bold">CALLS(CE)</p>
	// 			<p className="font-bold">
	// 				-11,308<span> QTY</span>
	// 			</p>
	// 			<p className=" px-2 py-1 rounded-md text-white bg-green-500 ">Bullish</p>
	// 		</div>

	// 		<div className="grid grid-cols-2">
	// 			<div className="bg-white border border-red-500 p-4 m-2 w-48 rounded-xl">
	// 				<div className="space-y-2">
	// 					<p className="font-bold">LONG OI Ch</p>
	// 					<div className="flex justify-between items-center">
	// 						<p className="font-bold">73232.0</p>
	// 						<p className="font-bold"> -11%</p>
	// 					</div>
	// 					<p className="font-bold">Long Unwind</p>
	// 				</div>
	// 			</div>

	// 			<div className="bg-green-500 p-4 m-2 rounded-xl w-48 text-white">
	// 				<div className="space-y-3">
	// 					<p className="font-bold">SHORT OI Ch</p>
	// 					<div className="flex justify-between items-center">
	// 						<p className="font-bold">73232.0</p>
	// 						<p className="font-bold"> -11%</p>
	// 					</div>
	// 					<p>Long Unwind</p>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	{/* Card End */}
	// </div>
};
export default TradeCard;
