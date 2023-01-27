import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "bottom",
		},
		title: {
			display: true,
			text: "Company Open Index",
		},
	},
};

const ChartData = ({ tradeData }) => {
	console.log(tradeData);
	const labels = tradeData.map((tr, i) => tr.date);

	const data = {
		labels,
		datasets: [
			{
				label: "Call",
				// data: labels.companyOpenIndex.map((lb) => lb.intraDayCallNet),
				data: [12, 15, 13, 18, 11, 19],
				backgroundColor: "green",
			},
			{ label: "Put", data: [8, 5, 7, 2, 9, 1], backgroundColor: "red" },
		],
	};
	console.log(data);
	return (
		<div>
			<Bar options={options} data={data} />
		</div>
	);
};
export default ChartData;
