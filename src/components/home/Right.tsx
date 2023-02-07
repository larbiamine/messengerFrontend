import { ReactNode } from "react";
import UserAvatar from "./right/UserAvatar";
import Conversation from "./right/Conversation";
import { ConversationType } from "../../utilities/types";
type Props = {
	isLoading: boolean;
	conversation: ConversationType;
};
function Right({ conversation, isLoading }: Props) {
	return (
		<div
			style={{ marginTop: "-1px" }}
			className="border-var1 border  basis-2/3 rounded-r-lg w-full h-full bg-var2 "
		>
			{!isLoading && <UserAvatar id={conversation.participants[1]} />}
			{isLoading ? (
				<div
					style={{
						height: "76vh",
					}}
					className="  pt-4 px-4 flex flex-col    rounded-lg animate-pulse opacity-0 w-full h-full bg-var3"
				></div>
			) : (
				<Conversation isLoading={isLoading} cconversation={conversation} />
			)}
		</div>
	);
}

export default Right;
