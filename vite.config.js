import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
	server: {
		proxy: {
			"/futureBull/api": "http://103.154.252.16:8080",
		},
	},
	plugins: [react()],
});
