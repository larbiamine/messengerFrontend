import { useState, useRef, useEffect } from "react";
import Message from "./conversation/Message";

import MessageInput from "./conversation/MessageInput";

interface Props {
	selectedChat: number;
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

function Conversation({ selectedChat }: Props) {
	const [conversation, setConversation] = useState<MessageObj[]>([]);
	const [loading, setLoading] = useState(true);
	const bottomRef = useRef(null);
	useEffect(() => {
		setConversation(cConversations[selectedChat]);

		setLoading(false);
		bottomRef.current.scrollIntoView({ behavior: "smooth" });
	}, [selectedChat]);

	const sendMsg = (message: string) => {
		if (message != "") {
			setConversation((oldData) => [
				...oldData,
				{ sender: true, message: message },
			]);
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
				{!loading &&
					conversation.map(({ sender, message }, index) => (
						<Message key={index} sender={sender} message={message} />
					))}
				<div ref={bottomRef}></div>
			</div>
			<MessageInput sendMsg={sendMsg} />
		</div>
	);
}

export default Conversation;
