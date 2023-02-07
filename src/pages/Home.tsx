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
		["conversations"],
		getConversations
	);

	return (
		<Container>
			{/* <h1 className="text-3xl font-bold underline">Welcome</h1> */}
			<div className="flex flex-row">
				<Left
					isLoading={isLoading}
					selectedChat={selectedChat}
					setSelectedChat={setSelectedChat}
					conversations={data}
				/>
				<Right isLoading={isLoading} selectedChat={selectedChat} />
			</div>
		</Container>
	);
}
export default Home;
