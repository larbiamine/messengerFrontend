import { avatar } from "@material-tailwind/react";
import React from "react";

interface User {
	name: string;
	avatar: string;
}
type Props = {
	selected?: boolean;
	user: User;
	lastMessage: string;
};

function Chat({ user, selected, lastMessage }: Props) {
	const classes = `
    my-2 p-2 rounded-lg flex ${selected ? "bg-var1" : ""} flex-row
    `;

	return (
		<div className={classes}>
			<img
				src={user.avatar}
				alt=""
				className="inline-block relative object-cover object-center w-10 h-10 rounded-xl"
			/>
			<div className="text-left ml-4">
				<h6 className="  ">{user.name}</h6>
				<h6 className=" text-sm">{lastMessage}</h6>
			</div>
		</div>
	);
}

export default Chat;
