import { Box, Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";

const Login = () => {
	const [ready, setReady] = useState("");
	const notReady = () => {
		// alert("Server Not Ready for Login Function Please wait...");
		setReady("Server Not Ready for Login Function Please wait...");
		// setTimeout(() => {
		// 	setReady("");
		// }, 5000);
	};
	return (
		<section className=" ">
			<div className="w-[600px] mx-auto  flex justify-center items-center mt-40">
				<div className="bg-white border border-black p-4 m-4 rounded-2xl ">
					<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
						<h1 className="font-bold text-center">Login</h1>
						<div className="text-center">
							<Box component="form" sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
								<TextField
									id="outlined-password-input"
									label="User"
									type="text"
									autoComplete="current-password"
									variant="outlined"
									onChange={notReady}
								/>
								<TextField
									id="outlined-password-input"
									label="Password"
									type="password"
									autoComplete="current-password"
									variant="outlined"
									onChange={notReady}
								/>
								<Button variant="contained" color="error" onClick={notReady}>
									Login
								</Button>
							</Box>
						</div>
					</FormControl>
				</div>
			</div>
			<p className="text-center text-fb_second font-bold">{ready}</p>
		</section>
	);
};
export default Login;
