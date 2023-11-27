import { useState } from "react";
import { PiCaretDownThin } from "react-icons/pi";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { menus } from "../config/Menu";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [click, setClick] = useState(false);
	return (
		<>
			<section className="md:bg-fb_prime ">
				<div className=" md:container md:mx-auto md:px-8  text-white">
					<div className="flex justify-between items-center flex-wrap p-4 bg-fb_prime">
						<img src={logo} alt="" srcset="" className="md:w-[8%] w-[25%]" />
						<ul className="hidden md:flex justify-between items-center wrap space-x-7  ">
							{menus.map((menu) => {
								return (
									<li onClick={() => setClick(!click)}>
										<Link to={menu.link}>{menu.name}</Link>
										{menu.subMenu && (
											<div className="group ">
												<div className="flex items-center cursor-pointer">
													<h1>{menu.head}</h1>
													<PiCaretDownThin />
												</div>

												<ul className="absolute top-14 p-4 bg-black space-y-3 hidden group-hover:block hover:block">
													{menu.subLinks.map((slink) => {
														return (
															<li>
																<Link to={slink.link}>{slink.name}</Link>
															</li>
														);
													})}
												</ul>
											</div>
										)}
									</li>
								);
							})}
						</ul>
						<div onClick={() => setOpen(!open)} className="md:hidden">
							{open ? <RiCloseLine className="text-3xl" /> : <RiMenu3Fill className="text-3xl" />}
						</div>
					</div>

					{/* Mobile Menu */}
					<ul
						className={`md:hidden space-y-4 w-full h-full p-4 z-50 absolute text-black bg-white duration-500 ${
							open ? "left-0" : "left-[-100%]"
						}`}
					>
						{menus.map((menu) => {
							return (
								<li onClick={() => setOpen(!open)}>
									<Link to={menu.link}>{menu.name}</Link>
									{menu.subMenu && (
										<div className="group">
											<div className="flex items-center cursor-pointer">
												<h1 onClick={() => setClick(!click)}>{menu.head}</h1>
												<PiCaretDownThin />
											</div>

											<ul className="p-4 space-y-3 block">
												{menu.subLinks.map((slink) => {
													return (
														<li onClick={() => setOpen(!open)}>
															<Link to={slink.link}>{slink.name}</Link>
														</li>
													);
												})}
											</ul>
										</div>
									)}
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
};
export default Navbar;
