/* eslint-disable eqeqeq */
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

const ChartData = ({ chart: { monthData } }) => {
	if (undefined != monthData || null != monthData) {
		const labels = monthData.map((md) => md.date);

		const data = {
			labels,
			datasets: [
				{
					label: "Net Call OI",
					data: monthData.map((md) => md.tillDateCallNet),
					backgroundColor: "green",
				},
				{
					label: "Put Call OI",
					data: monthData.map((md) => md.tillDatePutNet),
					backgroundColor: "red",
				},
			],
		};

		return (
			<div className="h-[300px]">
				<h2 className=" font-bold text-xl text-center">OI vs Time</h2>
				<Bar options={options} data={data} />
			</div>
		);
	}
};
export default ChartData;
