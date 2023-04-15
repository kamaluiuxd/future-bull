/// All Api Data

export const setCompanyDetails = (item, date) => `http://103.154.252.16:8080/futureBull/api/openIndexByDateType?clientType=${item}&startDate=${date}`;

export const writeTradeData = () => "http://103.154.252.16:8080/futureBull/api/writeTradeData";
// export const writeTradeData = () => "http://localhost:8000/upload";
