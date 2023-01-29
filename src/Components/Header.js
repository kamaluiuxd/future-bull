import { Link } from "react-router-dom";
import logo from "../assets/futurebull.jpg";

const Header = () => {
	return (
		<section className="bg-[#cf1d37]">
			<ul className="w-[1400px] mx-auto p-3 text-white">
				<li className="flex justify-between items-center">
					<img src={logo} alt="" srcset="" className="w-[10%]" />

					<ul className="flex justify-between space-x-5">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</li>
			</ul>
		</section>
	);
};
export default Header;
