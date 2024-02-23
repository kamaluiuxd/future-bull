/* eslint-disable react-hooks/exhaustive-deps */

import Banner from "../Components/Banner";

// import chart from "../assets/chart.webp";
const Home = () => {
	return (
		<section>
			<Banner />
			<section className=" w-[80%] mx-auto my-5">
				<section className="grid md:grid-cols-12 items-center">
					<section className="col-span-6">{/* <GetStockData /> */}</section>

					<section className="col-span-6"></section>
				</section>
				<section>
					<h1 className="text-2xl font-bold my-5">Feature</h1>
					<ul className="space-y-5 list-decimal">
						<li>Personalized Strategies: Tailored trading plans based on your goals and risk tolerance.</li>
						<li>Cutting-Edge Analysis: In-depth market research and trend forecasting for informed decisions.</li>
						<li>24/7 Support: Expert guidance and support round the clock, ensuring you never trade alone.</li>
						<li>Risk Management: Proven techniques to safeguard your investments and minimize losses.</li>
						<li>Education Hub: Resources and webinars to enhance your trading knowledge and skills.</li>
						<li>Performance Tracking: Transparent reporting to monitor and celebrate your trading achievements.</li>
					</ul>
				</section>
			</section>
		</section>
	);
};
export default Home;
