import { useState, useRef, useEffect } from "react";
import Message from "./conversation/Message";

import MessageInput from "./conversation/MessageInput";
import { ConversationType, MessageType } from "../../../utilities/types";
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

import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { IRootState } from "../../../redux/store";

const socket = io("http://locohost:3000");

function Conversation({ isLoading, cconversation }: Props) {
	const { currentUser } = useSelector((state: IRootState) => state);
	const [isConnected, setIsConnected] = useState(false);

	const [conversation, setConversation] =
		useState<ConversationType>(cconversation);

	const [conversationMessages, setConversationMessages] = useState<
		MessageType[]
	>(conversation.messages);

	const [loading, setLoading] = useState(true);
	const bottomRef = useRef(null);

	useEffect(() => {
		socket.on(cconversation._id, (data) => {
			console.log("From serber ", data);

			setConversationMessages((old) => {
				return [...old, JSON.parse(data)];
			});
			bottomRef.current.scrollIntoView({ behavior: "smooth" });
		});
		socket.on("connect", () => {
			setIsConnected(true);
		});

		socket.on("disconnect", () => {
			setIsConnected(false);
		});
		return () => {
			socket.off("connect");
			socket.off("disconnect");
		};
	}, []);

	useEffect(() => {
		setConversation(cconversation);
		setConversationMessages(cconversation.messages);
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
