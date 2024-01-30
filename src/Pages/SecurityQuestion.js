import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const SecurityQuestion = () => {
	return (
		<section className="flex items-center h-[90vh]">
			<div className="container mx-auto flex justify-center items-center">
				<div className="bg-white border border-slate-400 p-8 m-8 rounded-2xl ">
					<FormControl sx={{ m: 1, width: 500 }}>
						<div className="gap-5 flex flex-col">
							<InputLabel id="select-label">Question</InputLabel>
							<Select labelId="select-label" id="simple-select" label="Question">
								<MenuItem>What is your Favorite Color ?</MenuItem>
								<MenuItem>What is your first lover Name ?</MenuItem>
								<MenuItem>How many wife you have ?</MenuItem>
							</Select>
							<TextField label="Answer" type="text" autoComplete="" variant="outlined" />
							<Button variant="contained" color="primary">
								Submit
							</Button>
						</div>
					</FormControl>
				</div>
			</div>
		</section>
	);
};
export default SecurityQuestion;
