import { useTrade } from "../Context/TradeContext";

const MonthYear = ({ months }) => {
	const { setSelectedMonth } = useTrade();

	const handleChange = (e) => {
		console.log(e.target.value);
		setSelectedMonth(e.target.value);
	};

	return (
		<select className="my-10 border border-blue-800 outline-none" onChange={handleChange}>
			{months.map((month, index) => (
				<option key={index} value={month}>
					{month}
				</option>
			))}
		</select>
	);
};
export default MonthYear;
