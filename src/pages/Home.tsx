import Left from "../components/home/Left";
import Container from "../components/home/Container";
import Right from "../components/home/Right";
import { useState } from "react";

function Home() {
	const [selectedChat, setSelectedChat] = useState(0);

	return (
		<Container>
			{/* <h1 className="text-3xl font-bold underline">Welcome</h1> */}
			<div className="flex flex-row">
				<Left selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
				<Right selectedChat={selectedChat} />
			</div>
		</Container>
	);
}
export default Home;
