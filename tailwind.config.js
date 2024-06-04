const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	important: "#root",
	theme: {
		extend: {
			colors: {
				fb_prime: "#101868",
				fb_second: "#A81F18",
				fb_accent: "#E06963",
				fb_dark: "#5C2B28",
				fb_text: "#5C110D",
				fb_green: "#058265",
				fb_white: "#ffffff",
				fb_black: "#000000",
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant("children", "&>*");
		}),
	],
};
