import { useTrade } from "../Context/TradeContext";

const MonthYear = () => {
	const { setSelectedMonth } = useTrade();

	const months = ["AUGUST 2023", "SEPTEMBER 2023", "OCTOBER 2023", "NOVEMBER 2023"];

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
