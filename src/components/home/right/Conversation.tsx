import { useState, useRef, useEffect } from "react";
import Message from "./conversation/Message";

import MessageInput from "./conversation/MessageInput";
import { ConversationType } from "../../../utilities/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../../../utilities/fetchApi";

interface Props {
	cconversation: ConversationType;
	isLoading: Boolean;
}
interface MessageObj {
	sender: boolean;
	message: string;
}

var cConversations = [
	[
		{
			sender: true,
			message: "hello everyone",
		},
		{
			sender: false,
			message: "hi",
		},
		{
			sender: false,
			message: "wassup",
		},
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
		{
			sender: false,
			message: "wassupasjhsgbsadgvwsb",
		},
		{
			sender: true,
			message: "hello everyone",
		},
		{
			sender: false,
			message: "hi",
		},
		{
			sender: false,
			message: "wassup",
		},
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
		{
			sender: false,
			message: "wassupasjhsgbsadgvwsb",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
		{
			sender: false,
			message: "wassupasjhsgbsadgvwsb",
		},
		{
			sender: false,
			message: "wassup",
		},
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
	],
	[
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
		{
			sender: false,
			message: "wassupasjhsgbsadgvwsb",
		},
		{
			sender: true,
			message: "hello everyone",
		},
		{
			sender: false,
			message: "hi",
		},
		{
			sender: false,
			message: "wassup",
		},
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},

		{
			sender: false,
			message: "wassup",
		},
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
	],
	[
		{
			sender: true,
			message: "hello everyone",
		},
		{
			sender: false,
			message: "hi",
		},
		{
			sender: false,
			message: "wassup",
		},

		{
			sender: true,
			message: "hello everyone",
		},
		{
			sender: false,
			message: "hi",
		},
		{
			sender: false,
			message: "wassup",
		},
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},

		{
			sender: false,
			message: "wassupasjhsgbsadgvwsb",
		},
		{
			sender: false,
			message: "wassup",
		},
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
	],
	[
		{
			sender: true,
			message: "hello everyone",
		},
		{
			sender: false,
			message: "hi",
		},
		{
			sender: false,
			message: "wassup",
		},
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
		{
			sender: false,
			message: "wassupasjhsgbsadgvwsb",
		},
		{
			sender: true,
			message: "hello everyone",
		},

		{
			sender: false,
			message: "wassup",
		},
		{
			sender: true,
			message: "hello asdjkghbkeveryone",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
		{
			sender: false,
			message: "wassupasjhsgbsadgvwsb",
		},
		{
			sender: false,
			message: "wassupasjhsgb",
		},
	],
];

function Conversation({ isLoading, cconversation }: Props) {
	const [conversation, setConversation] =
		useState<ConversationType>(cconversation);
	const [loading, setLoading] = useState(true);
	const bottomRef = useRef(null);
	useEffect(() => {
		setConversation(cconversation);

		setLoading(false);
		bottomRef.current.scrollIntoView({ behavior: "smooth" });
	}, [cconversation]);

	const queryClient = useQueryClient();
	const mutationKey = ["conversations"];
	const mutation = useMutation(sendMessage, mutationKey, () => {
		queryClient.invalidateQueries([mutationKey]);
	});

	const sendMsg = (message: string) => {
		if (message != "") {
			const m = { conversationId: cconversation._id, body: message };
			mutation.mutate(m);
		}
		bottomRef.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div
			style={{
				height: "76vh",
			}}
			className=" pt-4 px-4 flex flex-col my-4 border-var1 border-t "
		>
			<div className="mb-4 overflow-auto">
				{!isLoading &&
					conversation.messages.map(({ _id, sender, body }, index) => (
						<Message key={_id} sender={sender} message={body} />
					))}
				<div ref={bottomRef}></div>
			</div>
			<MessageInput sendMsg={sendMsg} />
		</div>
	);
}

export default Conversation;
