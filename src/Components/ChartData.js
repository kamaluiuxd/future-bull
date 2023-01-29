import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip);

const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Company Open Index",
		},
	},
};

const ChartData = ({ tradeData }) => {
	console.log(tradeData);
	const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	const data = {
		labels,
		datasets: [
			{
				label: "Net Call OI",
				// data: labels.companyOpenIndex.map((lb) => lb.intraDayCallNet),
				data: [12, 15, 13, 18, 11, 19, 16, 14, 12, 18, 17, 15],
				backgroundColor: "green",
			},
			{ label: "Put Call OI", data: [8, 5, 7, 2, 9, 1, 4, 8, 2, 3, 5, 5], backgroundColor: "red" },
		],
	};
	console.log(data);
	return (
		<div className="h-[300px]">
			<Bar options={options} data={data} />
		</div>
	);
};
export default ChartData;
