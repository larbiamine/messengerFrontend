import { getUser } from "../../../utilities/fetchApi";

import { ConversationType } from "../../../utilities/types";
import { useQuery } from "@tanstack/react-query";
import LoadingBlocks from "./LoadingBlocks";
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store";

interface props {
	conversation: ConversationType;
	selected: boolean;
}

function Chat({ conversation, selected }: props) {
	const { participants, messages } = conversation;
	const classes = `
    my-2 p-2 rounded-lg flex ${
			selected ? "bg-var1" : ""
		} flex-row transition-all duration-300 
    `;

	const { currentUser } = useSelector((state: IRootState) => state);
	const recipient =
		participants[1] === currentUser._id ? participants[0] : participants[1];

	const { body } = messages[messages.length - 1];

	const querykey = [`user ${recipient}`];
	const { status, data, error, isLoading } = useQuery(querykey, () =>
		getUser(recipient)
	);
	if (isLoading) {
		return <LoadingBlocks />;
	}

	return status === "success" ? (
		<div className={classes}>
			<img
				src={data.avatar}
				alt=""
				className="inline-block h- relative object-cover object-center w-10 h-10 rounded-xl"
			/>
			<div className="text-left ml-4">
				<h6 className="  ">{data.username}</h6>
				<h6 className=" text-sm">{body}</h6>
			</div>
		</div>
	) : (
		<div className={classes}>ERROR</div>
	);
}

export default Chat;
