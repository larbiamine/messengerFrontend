/** @type {import('tailwindcss').Config} */
const colors = {
	danger: "#D52941",

	var3: "#FB2576",
	var2: "#3F0071",
	var1: "#150050",
	light: "#E5F2C9",
	background: "#03001C",
};
const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		// colors: {
// 		// 	nice: "#A8DADC",
// 		// 	bg1: "#1D3557",
// 		// 	lighterbg: "#457B9D",
// 		// 	lightbg: "#24436D",
// 		// 	light: "#F1FAEE",
// 		// 	danger: "#EF7F88",
// 		// 	lightOrange: "#FFA69E",
// 		// },
// 		colors: colors,
// 		extend: {},
// 	},
// 	plugins: [require("flowbite/plugin")],
// };

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: { colors: colors },
	},
	plugins: [],
});
