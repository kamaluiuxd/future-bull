import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip);

const options = {
	// responsive: true,
	// maintainAspectRatio: false,
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

const ChartData = ({ response: { monthData } }) => {
	if (undefined != monthData || null != monthData) {
		// const labels = [monthData[0].date, monthData[1].date, monthData[2].date];
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
					// data: [monthData[0].tillDatePutNet, monthData[1].tillDatePutNet, monthData[2].tillDatePutNet],
					backgroundColor: "red",
				},
			],
		};

		return (
			<div className="h-[300px]">
				<h2 className=" font-bold text-xl">{monthData[0].companyName}</h2>
				<Bar options={options} data={data} />
			</div>
		);
	}
};
export default ChartData;
