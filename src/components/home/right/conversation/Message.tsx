import { ReactNode } from "react";

type Props = {
	message?: string;
	sender?: boolean;
	order?: number;
};

function Message({ message, sender }: Props) {
	const classes = `
     mb-1  rounded-2xl py-1.5 px-2 ${sender ? "bg-var3" : "bg-var1"}
    `;

	return (
		<div className={`   flex ${sender ? "justify-end" : "justify-start"} `}>
			<div className={classes}>{message}</div>
		</div>
	);
}

export default Message;
