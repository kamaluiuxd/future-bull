/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { chartData, ifpCategory, ifpDailyChanges, ifpHistory, setCompanyDetails, tableData, tradeDates, tradeMy } from "../config/api";

const Trade = createContext();

const currentCompany = "Client";

const currentDate = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
// const currentDate = "2023-05-29";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date().getMonth();
const year = new Date().getFullYear();

const currentMonth = `${months[date]} ${year}`;

const TradeContext = ({ children }) => {
	const [item, setItem] = useState(currentCompany);
	const [dates, setDates] = useState([]);
	const [date, setDate] = useState(currentDate);
	const [response, setResponse] = useState([]);
	const [months, setMonth] = useState([]);
	const [chart, setChart] = useState([]);
	const [table, setTable] = useState([]);
	const [ifpcTable, setIfpcTable] = useState([]);
	const [ifphTable, setIfphTable] = useState([]);
	const [spot, setSpot] = useState([]);
	const [ifpdTable, setIfpdTable] = useState([]);
	const [selectedMonth, setSelectedMonth] = useState(currentMonth);

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
			// setMonth(tradeMy);
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
			const { data } = await axios.get(chartData(item, selectedMonth));
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

	//=========ifp Category ===============================================//
	const fetchifpc = async () => {
		try {
			const { data } = await axios.get(ifpCategory(date));
			setIfpcTable(data.faoParticipantsList);
		} catch (error) {
			console.log(error);
		}
	};
	//===========================================================================//

	//=========ifp Category ===============================================//
	const fetchifph = async () => {
		try {
			const { data } = await axios.get(ifpHistory(item));
			setIfphTable(data.faoParticipantsList);
			setSpot(data.niftyInputsList);
		} catch (error) {
			console.log(error);
		}
	};
	//===========================================================================//

	//=========ifp Daily Changes ===============================================//
	const fetchIfpd = async () => {
		try {
			const { data } = await axios.get(ifpDailyChanges(selectedMonth));
			setIfpdTable(data.faoParticipantsList);
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
		fetchifpc();
		fetchifph();
		fetchIfpd();
	}, [item, date, months, selectedMonth]);

	console.log(selectedMonth);

	return (
		<Trade.Provider
			value={{
				item,
				months,
				date,
				setItem,
				setDate,
				response,
				dates,
				setSelectedMonth,
				chart,
				setChart,
				table,
				ifpcTable,
				ifphTable,
				spot,
				ifpdTable,
			}}
		>
			{children}
		</Trade.Provider>
	);
};

export default TradeContext;

export const useTrade = () => {
	return useContext(Trade);
};
