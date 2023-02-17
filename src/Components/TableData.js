const TableData = ({ tradeData }) => {
	return (
		<div>
			{tradeData.map((trData, i) => {
				return (
					<div key={i} className="w-[600px]">
						<h1 className="text-2xl font-bold">{trData.date}</h1>
						<div>
							<table className="border-collapse border-slate-500 w-[600px] border-2 p-10">
								<thead className="text-left">
									<tr className="space-x-10">
										<th className="border border-black p-2">Company</th>
										<th className="border border-black p-2">Call</th>
										<th className="border border-black p-2">Pull</th>
									</tr>
								</thead>
								{tradeData.sameDayData.map((coi, ci) => {
									return (
										<tbody key={ci}>
											<tr className="border border-black">
												<td className="border border-black p-2 ">{coi.companyName}</td>
												<td className="border border-black p-2">{coi.tillDateCallNet}</td>
												<td className="border border-black p-2">{coi.tillDatePutNet}</td>
											</tr>
										</tbody>
									);
								})}
							</table>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default TableData;
