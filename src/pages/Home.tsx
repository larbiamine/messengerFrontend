import Left from "../components/home/Left";
import Container from "../components/home/Container";
import Right from "../components/home/Right";
import { useState } from "react";
import { getConversations } from "../utilities/fetchApi";
import { useQuery } from "@tanstack/react-query";
function Home() {
	const [selectedChat, setSelectedChat] = useState(0);

	const querykey = ["conversations"];
	const { status, data, error, isLoading } = useQuery(
		querykey,
		getConversations
	);
	const myError = typeof data == "string";

	console.log("🆘 || file: Home.tsx:17 || myError:", myError);

	status === "success" && console.log("🆘 || file: Home.tsx:13 || data", data);
	return (
		<Container>
			{/* <h1 className="text-3xl font-bold underline">Welcome</h1> */}
			{status === "success" && !myError && (
				<div className="flex flex-row">
					<Left
						isLoading={isLoading}
						selectedChat={selectedChat}
						setSelectedChat={setSelectedChat}
						conversations={data || []}
					/>
					<Right conversation={data[selectedChat]} isLoading={isLoading} />
				</div>
			)}
			{myError && (
				<div className="flex flex-row">
					{"Something Bad happened >[ Refresh"}
				</div>
			)}
		</Container>
	);
}
export default Home;
