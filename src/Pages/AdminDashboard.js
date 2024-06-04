import UploadFile from "./UploadFile";

const AdminDashboard = () => {
	return (
		<>
			<main className="grid grid-cols-12 container mx-auto">
				<aside className="col-span-3 bg-emerald-300">1</aside>
				<section className="col-span-9 bg-blue-300">
					<UploadFile />
				</section>
			</main>
		</>
	);
};
export default AdminDashboard;
