import React from "react";
import Message from "./conversation/Message";
interface Props {
	selectedChat: number;
}
const Conversations = [
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
const messages = [
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
];
function Conversation({ selectedChat }: Props) {
	return (
		<div
			style={{
				height: "76vh",
			}}
			className="overflow-auto p-4 flex flex-col my-4 border-var1 border-t "
		>
			{Conversations[selectedChat].map(({ sender, message }) => (
				<Message sender={sender} message={message} />
			))}
		</div>
	);
}

export default Conversation;
