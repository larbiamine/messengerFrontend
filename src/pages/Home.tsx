import Left from "../components/home/Left";
import Container from "../components/home/Container";
import Right from "../components/home/Right";
import { useState } from "react";
import { getConversations } from "../utilities/fetchApi";
import { useQuery } from "@tanstack/react-query";

function Home() {
	const [selectedChat, setSelectedChat] = useState(0);

	const querykey = ["conversations"];
	const { status, data, isLoading, refetch } = useQuery(
		querykey,
		getConversations
	);

	return (
		<Container>
			{/* <h1 className="text-3xl font-bold underline">Welcome</h1> */}
			{status === "success" && (
				<div className="flex flex-row">
					<Left
						isLoading={isLoading}
						selectedChat={selectedChat}
						setSelectedChat={setSelectedChat}
						refetch={refetch}
						conversations={data}
					/>
					<Right conversation={data[selectedChat]} isLoading={isLoading} />
				</div>
			)}
		</Container>
	);
}
export default Home;
