const MonthYear = ({ months }) => {
	return (
		<select name="" id="" className="my-10 border border-blue-800 outline-none">
			{months.map((month) => (
				<option value={month}>{month}</option>
			))}
		</select>
	);
};
export default MonthYear;
