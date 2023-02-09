import UserAvatar from "./right/UserAvatar";
import Conversation from "./right/Conversation";
import { ConversationType } from "../../utilities/types";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
type Props = {
	isLoading: boolean;
	conversation: ConversationType;
};
function Right({ conversation, isLoading }: Props) {
	const { currentUser } = useSelector((state: IRootState) => state);

	const recipient =
		conversation.participants[1] === currentUser._id
			? conversation.participants[0]
			: conversation.participants[1];
	return (
		<div
			style={{ marginTop: "0px" }}
			className="border-var1 border basis-2/3 rounded-r-lg w-full   bg-var2 "
		>
			{!isLoading && conversation.participants && <UserAvatar id={recipient} />}
			{isLoading ? (
				<div
					style={{
						height: "76vh",
					}}
					className="  pt-4 px-4 flex flex-col rounded-lg animate-pulse opacity-0 w-full h-full bg-var3"
				></div>
			) : (
				conversation.messages && (
					<Conversation isLoading={isLoading} cconversation={conversation} />
				)
			)}
		</div>
	);
}

export default Right;
