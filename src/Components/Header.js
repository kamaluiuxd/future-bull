import { useEffect, useState } from "react";
import { PiCaretDownThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
	const [fmenu, setFMenu] = useState(false);
	const [imenu, setIMenu] = useState(false);

	useEffect(() => {}, []);
	return (
		<>
			<section className="bg-fb_prime ">
				<ul className=" md:container md:mx-auto md:py-5 md:px-8 p-4 text-white">
					<li className="flex justify-between items-center">
						<img src={logo} alt="" srcset="" className="md:w-[8%] w-[25%]" />

						<ul className="flex justify-between items-center space-x-7">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<div
									className="relative cursor-pointer flex items-center space-x-1"
									onClick={() => setFMenu((prev) => !prev)}
								>
									<div>FII Activities</div> <PiCaretDownThin />
								</div>
								{fmenu && (
									<ul className="absolute mt-5 bg-black p-5 space-y-3">
										<li>
											<Link to="/activities">Activities</Link>
										</li>
										<li>
											<Link to="/chart">Chart</Link>
										</li>
										<li>
											<Link to="/trading-activities">Trading Activities</Link>
										</li>
									</ul>
								)}
							</li>
							<li>
								<div
									className="relative cursor-pointer flex items-center space-x-1"
									onClick={() => setIMenu((prev) => !prev)}
								>
									<div>Index futures</div> <PiCaretDownThin />
								</div>
								{imenu && (
									<ul className="absolute mt-5 bg-black p-5 space-y-3">
										<li>
											<Link to="/category">Category</Link>
										</li>
										<li>
											<Link to="/history">History</Link>
										</li>
										<li>
											<Link to="/daily-changes">Daily Change</Link>
										</li>
									</ul>
								)}
							</li>

							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</li>
				</ul>
			</section>
		</>
	);
};
export default Header;
