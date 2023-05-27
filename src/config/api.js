/// All Api Data

export const setCompanyDetails = (item, date) =>
	`http://103.154.252.16:8080/futureBull/api/findByClientTypeAndTradeDate?client=${item}&date=${date}`;

// Chart Data
export const chartData = (item, months) =>
	`http://103.154.252.16:8080/futureBull/api/fetchMonthlyChart?clientType=${item}&monthYear=${months}`;

export const tradeDates = () => `http://103.154.252.16:8080/futureBull/api/fetchTradeDates`;

export const tradeMy = () => `http://103.154.252.16:8080/futureBull/api/fetchTradeMonthsYear`;
