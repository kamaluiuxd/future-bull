import { StyledEngineProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import TradeContext from "./Context/TradeContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StyledEngineProvider injectFirst>
		<TradeContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</TradeContext>
	</StyledEngineProvider>
);
