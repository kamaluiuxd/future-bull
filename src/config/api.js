/// All Api Data

export const setCompanyDetails = (item, date) =>
	`http://103.154.252.16:8080/futureBull/api/findByClientTypeAndTradeDate?client=${item}&date=${date}`;

// Chart Data
export const chartData = (item, months) =>
	`http://103.154.252.16:8080/futureBull/api/fetchMonthlyChart?clientType=${item}&monthYear=${months}`;

//Fetch Available Dates
export const tradeDates = () => `http://103.154.252.16:8080/futureBull/api/fetchTradeDates`;

//Fetch Month Year
export const tradeMy = () => `http://103.154.252.16:8080/futureBull/api/fetchTradeMonthsYear`;

//Fetch Daily Table Data
export const tableData = () => `http://103.154.252.16:8080/futureBull/api/fetchDailyData`;

//Fetch Index Feature Position Category
export const ifpCategory = (date) => `http://103.154.252.16:8080/futureBull/api/fetchPositionsByCategory?date=${date}`;

//Fetch Index Feature Position
export const ifpHistory = (item) =>
	`http://103.154.252.16:8080/futureBull/api/fetchPositionsHistory?clientType=${item}`;

//Index Futures Positions – Daily Change
export const ifpDailyChanges = (months) =>
	`http://103.154.252.16:8080/futureBull/api/fetchPositionsDailyChange?monthYear=${months}`;
