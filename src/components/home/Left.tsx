import { ReactNode } from "react";
import Chat from "./left/Chat";
import Search from "./left/Search";

type Props = {
	children?: ReactNode;
};
function Left({ children }: Props) {
	return (
		<div className="  p-5 basis-1/3 rounded-l-lg w-full h-full bg-var2 ">
			<h6 className=" mb-6 text-xl text-left">Chats</h6>
			<Search />
			<div
				style={{
					height: "70vh",
					overflow: "auto",
				}}
			>
				<Chat />
				<Chat />
				<Chat />
				<Chat selected />
				<Chat />
				<Chat />
				<Chat />
				<Chat />
				<Chat />
				<Chat />
				<Chat />
				<Chat />
			</div>
			{children}
		</div>
	);
}

export default Left;
