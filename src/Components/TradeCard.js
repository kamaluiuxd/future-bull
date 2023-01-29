const TradeCard = () => {
	return (
		<div>
			{/* Card Start */}
			<div className="bg-white border border-black p-8 m-4 rounded-2xl">
				<div className="flex justify-between items-center">
					<p className="font-bold">CALLS(CE)</p>
					<p className="font-bold">
						-11,308<span> QTY</span>
					</p>
					<p className="w-10 h-10 bg-green-500 rounded-full"></p>
				</div>
				<div className="grid grid-cols-2">
					<div className="bg-white border border-red-500 p-5 m-4 rounded-xl">
						<div className="space-y-3">
							<p className="font-bold">LONG OI Ch</p>
							<div className="flex justify-between items-center">
								<p className="font-bold">73232.0</p>
								<p className="font-bold"> -11%</p>
							</div>
							<p className="font-bold">Long Unwind</p>
						</div>
					</div>
					<div className="bg-red-500 p-5 m-4 rounded-xl text-white">
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
	);
};
export default TradeCard;
