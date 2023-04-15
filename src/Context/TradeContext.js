/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { setCompanyDetails } from "../config/api";

const Trade = createContext();

const currentCompany = "Client";
const currentDate = "2022-12-27";
// const currentDate = new Date().toISOString().slice(0, 10);

const TradeContext = ({ children }) => {
	const [item, setItem] = useState(currentCompany);
	const [date, setDate] = useState(currentDate);
	const [response, setResponse] = useState({});

	const getCompanyDetails = async () => {
		try {
			const result = await axios.get(setCompanyDetails(item, date));
			const data = await result.data;
			setResponse(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getCompanyDetails();
	}, [item, date]);

	console.log(response);

	return <Trade.Provider value={{ item, date, setItem, setDate, response }}>{children}</Trade.Provider>;
};
export default TradeContext;

export const useTrade = () => {
	return useContext(Trade);
};
