import { useTrade } from "../Context/TradeContext";

const DateComponent = () => {
	const { date, setDate, dates } = useTrade();

	console.log(date);

	return (
		<div>
			<div className="space-y-5 my-5">
				<input
					className=" border-black border-b p-2 cursor-pointer"
					type="date"
					id="datepicker"
					value={date}
					onChange={(e) => setDate(e.target.value)}
					min={dates[0]}
					max={dates[dates.length - 1]}
					// disable={disabledDates}
				/>
			</div>
		</div>
	);
};

export default DateComponent;
