import ClientTypeDataTable from "../Components/ClientTypeDataTable";
import CompanyFilter from "../Components/CompanyFilter";
import { useTrade } from "../Context/TradeContext";

const ClientType = () => {
	const { clientType } = useTrade();

	console.log(clientType);
	return (
		<div>
			<section className="md:w-[1400px] md:mx-auto my-10">
				<CompanyFilter />
			</section>
			<section className="my-10 ">
				<ClientTypeDataTable clientType={clientType} />
			</section>
		</div>
	);
};
export default ClientType;
