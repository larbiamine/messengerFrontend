import { getUser } from "../../../utilities/fetchApi";
import { userRequest } from "../../../utilities/requestMethodes";
import { Conversation } from "../../../utilities/types";
import { useQuery } from "@tanstack/react-query";

interface props {
	conversation: Conversation;
	selected: boolean;
}

function TempChat({ conversation, selected }: props) {
	const { participants, messages } = conversation;
	const classes = `
    my-2 p-2 rounded-lg flex ${
			selected ? "bg-var1" : ""
		} flex-row transition-all duration-300 
    `;

	const recipient = participants[1];

	const { body } = messages[messages.length - 1];

	const querykey = [`user ${recipient}`];
	const { status, data, error, isLoading } = useQuery(querykey, () =>
		getUser(recipient)
	);

	status === "success" &&
		console.log("🆘 || file: TempChat.tsx:26 || data", data);

	if (isLoading) {
		return <div>Loading</div>;
	}

	return status === "success" ? (
		<div className={classes}>
			<img
				src={data.avatar}
				alt=""
				className="inline-block relative object-cover object-center w-10 h-10 rounded-xl"
			/>
			<div className="text-left ml-4">
				<h6 className="  ">{data.username}</h6>
				<h6 className=" text-sm">{body}</h6>
			</div>
		</div>
	) : (
		<div>ERROR</div>
	);
}

export default TempChat;
