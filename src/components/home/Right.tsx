import { ReactNode } from "react";
import UserAvatar from "./right/UserAvatar";
import Conversation from "./right/Conversation";
type Props = {
	selectedChat: number;
	isLoading: boolean;
};
function Right({ selectedChat, isLoading }: Props) {
	return (
		<div
			style={{ marginTop: "-1px" }}
			className="border-var1 border  basis-2/3 rounded-r-lg w-full h-full bg-var2 "
		>
			<UserAvatar selectedChat={selectedChat} />
			{isLoading ? (
				<div
					style={{
						height: "76vh",
					}}
					className="  pt-4 px-4 flex flex-col    rounded-lg animate-pulse opacity-0 w-full h-full bg-var3"
				></div>
			) : (
				<Conversation selectedChat={selectedChat} />
			)}
		</div>
	);
}

export default Right;
