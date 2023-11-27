/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, FormControl, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import chart from "../assets/chart.webp";
const Home = () => {
	return (
		<section className=" w-[80%] mx-auto my-10">
			<section className="grid md:grid-cols-12 items-center">
				<img className="col-span-6" src={chart} alt="Nifty Chart" srcset="" />

				<section className="col-span-6">
					<div className="flex justify-center items-center">
						<div className="bg-white border border-black p-4 m-4 rounded-2xl ">
							<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
								<h1 className="font-bold text-center">Login</h1>
								<div className="text-center">
									<Box
										component="form"
										sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
										noValidate
										autoComplete="off"
									>
										<TextField label="User" type="text" autoComplete="current-password" variant="outlined" />
										<TextField label="Password" type="password" autoComplete="current-password" variant="outlined" />
										<Button variant="contained" color="error">
											Login
										</Button>

										<p className="mt-5">If you havn't Account</p>
										<p>
											<Link to="/signup"> Signup Here</Link>
										</p>
									</Box>
								</div>
							</FormControl>
						</div>
					</div>
				</section>
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
	);
};
export default Home;
