/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { chartData, setCompanyDetails, tableData, tradeDates, tradeMy } from "../config/api";

const Trade = createContext();

const currentCompany = "Client";
const currentDate = new Date().toISOString().slice(0, 10);
// const currentDate = "2023-05-29";

const TradeContext = ({ children }) => {
	const [item, setItem] = useState(currentCompany);
	const [dates, setDates] = useState([]);
	const [date, setDate] = useState(currentDate);
	const [response, setResponse] = useState([]);
	const [months, setMonth] = useState([]);
	const [chart, setChart] = useState([]);
	const [table, setTable] = useState([]);

	//=========Fetch Company Details with Date====================================//
	const getCompanyDetails = async () => {
		try {
			const { data } = await axios.get(setCompanyDetails(item, date));
			setResponse(data);
		} catch (error) {
			console.log(error);
		}
	};
	//===========================================================================//

	//=========Fetch Available Date=============================================//
	const fetchDate = async () => {
		try {
			const { data } = await axios.get(tradeDates());
			setDates(data.tradeDatesList);
		} catch (error) {
			console.log(error);
		}
	};

	//===========================================================================//

	//=========Fetch Available Month and Year====================================//
	const fetchMonth = async () => {
		try {
			const { data } = await axios.get(tradeMy());
			setMonth(data.tradeMonthsList);
		} catch (error) {
			console.log(error);
		}
	};
	//===========================================================================//

	//=========Fetch Chart Data=================================================//
	const fetchChartData = async () => {
		try {
			const { data } = await axios.get(chartData(item, months));
			setChart(data);
		} catch (error) {
			console.log(error);
		}
	};

	//=========Fetch Table Data ===============================================//
	const fetchTableData = async () => {
		try {
			const { data } = await axios.get(tableData());
			setTable(data.tradeActivityList);
		} catch (error) {
			console.log(error);
		}
	};
	//===========================================================================//

	useEffect(() => {
		fetchDate();
		fetchMonth();
		fetchTableData();
	}, []);

	useEffect(() => {
		getCompanyDetails();
		fetchChartData();
	}, [item, date, months]);

	return (
		<Trade.Provider value={{ item, date, setItem, setDate, response, dates, months, chart, setChart, table }}>
			{children}
		</Trade.Provider>
	);
};
export default TradeContext;

export const useTrade = () => {
	return useContext(Trade);
};
