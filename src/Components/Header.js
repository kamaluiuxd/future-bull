import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<section className="bg-fb_prime ">
			<ul className=" md:container md:mx-auto md:py-5 md:px-8 p-4 text-white">
				<li className="flex justify-between items-center">
					<img src={logo} alt="" srcset="" className="md:w-[8%] w-[25%]" />

					<ul className="flex justify-between items-center space-x-7">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/uploadfile">Upload</Link>
						</li>
					</ul>
				</li>
			</ul>
		</section>
	);
};
export default Header;
