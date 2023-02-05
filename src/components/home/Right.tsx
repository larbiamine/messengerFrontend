import { ReactNode } from "react";
import UserAvatar from "./right/UserAvatar";
import Conversation from "./right/Conversation";
type Props = {
	selectedChat: number;
};
function Right({ selectedChat }: Props) {
	return (
		<div
			style={{ marginTop: "-1px" }}
			className="border-var1 border  basis-2/3 rounded-r-lg w-full h-full bg-var2 "
		>
			<UserAvatar selectedChat={selectedChat} />
			<Conversation selectedChat={selectedChat} />
		</div>
	);
}

export default Right;
