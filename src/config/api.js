/// All Api Data///

export const setCompanyDetails = (item, date) => `http://103.154.252.16:8080/futureBull/api/findByClientTypeAndTradeDate?client=${item}&date=${date}`;

// Chart Data
export const chartData = (item, selectedMonth) =>
	`http://103.154.252.16:8080/futureBull/api/fetchMonthlyChart?clientType=${item}&monthYear=${selectedMonth}`;

//Fetch Available Dates
export const tradeDates = () => "http://103.154.252.16:8080/futureBull/api/fetchTradeDates";

//Fetch Month Year
export const tradeMy = () => "http://103.154.252.16:8080/futureBull/api/fetchTradeMonthsYear";

//Fetch Daily Table Data
export const tableData = () => "http://103.154.252.16:8080/futureBull/api/fetchDailyData";

//Fetch Index Feature Position Category
export const ifpCategory = (date) => `http://103.154.252.16:8080/futureBull/api/fetchPositionsByCategory?date=${date}`;

//http://103.154.252.16:8080/futureBull/api/fetchPositionsByCategory?date=20-12-2023

//Fetch Index Feature Position
export const ifpHistory = (item) => `http://103.154.252.16:8080/futureBull/api/fetchPositionsHistory?clientType=${item}`;

//Index Futures Positions – Daily Change
export const ifpDailyChanges = (selectedMonth) => `http://103.154.252.16:8080/futureBull/api/fetchPositionsDailyChange?monthYear=${selectedMonth}`;

// http://103.154.252.16:8080/futureBull/api/fetchPositionsDailyChange?monthYear=NOVEMBER 2023

// export const tradeMy = ["AUGUST 2023", "SEPTEMBER 2023", "OCTOBER 2023", "NOVEMBER 2023"];

//
export const fiiData = () => "http://103.154.252.16:8080/futureBull/api/fetchFIIDataCalculations";

// Client Type
export const clientTypeData = (item) => `http://103.154.252.16:8080/futureBull/api/fetchParticipantsByClientType?client=${item}`;
