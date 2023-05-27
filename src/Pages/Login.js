import { Box, Button, FormControl, TextField } from "@mui/material";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<section className=" ">
			<div className="w-[600px] mx-auto  flex justify-center items-center mt-40">
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
	);
};
export default Login;
