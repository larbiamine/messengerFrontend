import { useState, useRef, useEffect } from "react";
import Message from "./conversation/Message";

import MessageInput from "./conversation/MessageInput";
import { ConversationType, MessageType } from "../../../utilities/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../../../utilities/fetchApi";

interface Props {
	cconversation: ConversationType;
	isLoading: Boolean;
	online: Boolean;
	setOnline: Function;
}
interface MessageObj {
	sender: boolean;
	message: string;
}

import { useSelector } from "react-redux";

import { IRootState } from "../../../redux/store";
import { socket } from "../../../utilities/requestMethodes";

function Conversation({ online, setOnline, isLoading, cconversation }: Props) {
	const { currentUser } = useSelector((state: IRootState) => state);
	const [isConnected, setIsConnected] = useState(false);

	const [conversation, setConversation] =
		useState<ConversationType>(cconversation);

	const [conversationMessages, setConversationMessages] = useState<
		MessageType[]
	>([]);
	// const [conversationMessages, setConversationMessages] = useState<
	// 	MessageType[]
	// >(conversation.messages);

	// const [loading, setLoading] = useState(true);
	const bottomRef = useRef(null);

	useEffect(() => {
		socket.on(cconversation._id, (data) => {
			setConversationMessages((old) => {
				return [...old, JSON.parse(data)];
			});
			bottomRef.current.scrollIntoView({ behavior: "smooth" });
		});

		let myinterval = setInterval(function () {
			setOnline(false);
			socket.on(`checkchat ${cconversation._id}`, (data) => {
				setOnline(true);
			});
			socket.emit(`checkchat`, cconversation._id);
		}, 2000);

		socket.on(`checkLogged ${socket.id}`, (data) => {
			setIsConnected(true);
		});
		socket.on("connect", () => {
			setIsConnected(true);
		});
		socket.on("logged sockets", (data) => {
			console.log(data);
		});

		socket.on("disconnect", () => {
			setIsConnected(false);
		});
		bottomRef.current.scrollIntoView({ behavior: "smooth" });
		return () => {
			clearInterval(myinterval);
			socket.off("connect");
			socket.off("disconnect");
		};
	}, []);

	useEffect(() => {
		setConversation(cconversation);
		setConversationMessages(cconversation.messages);
		// setLoading(false);
		bottomRef.current.scrollIntoView({ behavior: "smooth" });
	}, [cconversation]);

	const queryClient = useQueryClient();
	const mutationKey = ["conversations"];
	const mutation = useMutation(sendMessage, mutationKey);

	const sendMsg = (message: string) => {
		if (message != "") {
			const messageObject = {
				body: message,
				sender: currentUser._id,
				conversation: cconversation._id,
			};
			setConversationMessages((old) => {
				return [...old, messageObject];
			});
			socket.emit("message", JSON.stringify(messageObject));
			const m = { conversationId: cconversation._id, body: message };
			mutation.mutate(m);
			bottomRef.current.scrollIntoView({ behavior: "smooth" });
		}
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
					conversationMessages.map(({ _id, sender, body }, index) => (
						<Message key={_id} sender={sender} message={body} />
					))}

				<div ref={bottomRef}></div>
			</div>

			<MessageInput sendMsg={sendMsg} />
			{isConnected ? <h6>Connected</h6> : <h6>not Connected</h6>}
		</div>
	);
}

export default Conversation;
