import { RefObject, useState } from "react";
interface MessageInputProps {
	sendMsg: Function;
	ref?: RefObject<HTMLDivElement>;
}
function MessageInput({ sendMsg, ref }: MessageInputProps) {
	const [body, setBody] = useState("");

	function SendIcon() {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6"
				onClick={() => {
					console.log(body);
					sendMsg(body);
					setBody("");
				}}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
				/>
			</svg>
		);
	}

	const classes = `
    my-2 p-2 rounded-lg flex bg-var1 flex-row mt-auto 
    `;
	return (
		<div ref={ref} className={classes}>
			<input
				className="focus:outline-none w-full rounded-lg bg-var1"
				type="text"
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
			<SendIcon />
		</div>
	);
}

export default MessageInput;
