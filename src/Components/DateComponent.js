import { useTrade } from "../Context/TradeContext";

const DateComponent = () => {
	const { date, setDate, dates } = useTrade();

	return (
		<div>
			<div className="space-y-5 m-5">
				<h1 className="text-2xl font-bold">Expiry</h1>
				<input
					className="border border-black p-2 cursor-pointer"
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
