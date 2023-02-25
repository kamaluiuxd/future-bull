import { Button } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";

const UploadFile = () => {
	const [file, setFile] = useState();
	const [fileName, setFileName] = useState("");
	const [resText, setResText] = useState("");
	const fileInput = useRef();

	const saveFile = () => {
		setFile(fileInput.current.files[0]);
		setFileName(fileInput.current.files[0].name);
	};

	const API = "/futureBull/api/uploadFile?userId=kannan";
	// const API = "http://localhost:8000/upload";

	const uploadFile = async () => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("fileName", fileName);

		try {
			const res = await axios.post(API, formData);
			setResText(res.data.message);
			fileInput.current.value = "";

			setTimeout(() => {
				setResText("");
			}, 2000);
		} catch (error) {
			if (error.response !== undefined) {
				setResText(error.response.data.message);
			} else {
				setResText("Server Error");
			}
		}
	};

	// useEffect(() => {
	// 	uploadFile();
	// }, []);

	return (
		<div className="my-10">
			<section className="flex justify-center items-center flex-col space-y-8 h-[80vh] min-h-full ">
				<input
					type="file"
					id="file"
					accept=".csv, .xlsx"
					name="file"
					ref={fileInput}
					className="cursor-pointer p-4 border-fb_black border"
					onChange={saveFile}
				/>
				<Button variant="contained" color="error" className="bg-fb_prime px-4 py-2 text-lg text-fb_white" onClick={uploadFile}>
					Upload
				</Button>

				{resText ? <p className="text-center text-fb_black font-bold">{resText}</p> : null}
			</section>
		</div>
	);
};
export default UploadFile;
