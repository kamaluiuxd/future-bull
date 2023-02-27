import { createContext, useContext, useState } from "react";

const Trade = createContext();

const currentCompany = "Client";
const currentDate = "2022-12-27";
// const currentDate = new Date().toISOString().slice(0, 10);

const TradeContext = ({ children }) => {
	const [item, setItem] = useState(currentCompany);
	const [date, setDate] = useState(currentDate);

	return <Trade.Provider value={{ item, date, setItem, setDate }}>{children}</Trade.Provider>;
};
export default TradeContext;

export const useTrade = () => {
	return useContext(Trade);
};
