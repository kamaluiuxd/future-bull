/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { chartData, setCompanyDetails, tradeDates, tradeMy } from "../config/api";

const Trade = createContext();

const currentCompany = "Client";
const currentDate = new Date().toISOString().slice(0, 10);

const TradeContext = ({ children }) => {
	const [item, setItem] = useState(currentCompany);
	const [dates, setDates] = useState([]);
	const [date, setDate] = useState(currentDate);
	const [response, setResponse] = useState({});
	const [months, setMonth] = useState({});
	const [chart, setChart] = useState({});

	const getCompanyDetails = async () => {
		try {
			const { data } = await axios.get(setCompanyDetails(item, date));
			setResponse(data);
		} catch (error) {
			console.log(error);
		}
	};
	const fetchDate = async () => {
		try {
			const { data } = await axios.get(tradeDates());
			setDates(data.tradeDatesList);
		} catch (error) {
			console.log(error);
		}
	};
	const fetchMonth = async () => {
		try {
			const { data } = await axios.get(tradeMy());
			setMonth(data.tradeMonthsList);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchChartData = async () => {
		const { data } = await axios.get(chartData(item, months));
		setChart(data);
	};
	useEffect(() => {
		fetchDate();
		fetchMonth();
	}, []);

	useEffect(() => {
		getCompanyDetails();
		fetchChartData();
	}, [item, date, months]);

	console.log(months.tradeMonthsList);

	return (
		<Trade.Provider value={{ item, date, setItem, setDate, response, dates, months, chart, setChart }}>
			{children}
		</Trade.Provider>
	);
};
export default TradeContext;

export const useTrade = () => {
	return useContext(Trade);
};
