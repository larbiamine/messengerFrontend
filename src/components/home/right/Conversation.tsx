import React from "react";
import Message from "./conversation/Message";

function Conversation() {
	return (
		<div
			style={{
				height: "76vh",
			}}
			className="overflow-auto p-4 flex flex-col my-4 border-var1 border-t "
		>
			<Message order={1} sender message="hello everyone" />
			<Message order={2} message="hi" />
			<Message order={3} message="wassup" />
			<Message order={4} sender message="hello asdjkghbkeveryone" />
			<Message order={6} message="wassupasjhsgb" />
			<Message order={5} message="waspasjhsgdfhb" />
			<Message order={7} sender message="wassupasjhsgb" />
			<Message order={1} sender message="hello everyone" />
			<Message order={2} message="hi" />
			<Message order={3} message="wassup" />
			<Message order={4} sender message="hello asdjkghbkeveryone" />
			<Message order={6} message="wassupasjhsgb" />
			<Message order={5} message="waspasjhsgdfhb" />
			<Message order={7} sender message="wassupasjhsgb" />
		</div>
	);
}

export default Conversation;
