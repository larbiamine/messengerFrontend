import { useSelector } from "react-redux";
import { IRootState } from "../../../../redux/store";
type Props = {
	message?: string;
	sender?: string;
	order?: number;
};

function Message({ message, sender }: Props) {
	const { currentUser } = useSelector((state: IRootState) => state);
	const classes = `
     mb-1  rounded-2xl py-1.5 px-2 ${
				sender === currentUser._id ? "bg-var3" : "bg-var1"
			}
    `;
	return (
		<div
			className={`   flex ${
				sender === currentUser._id ? "justify-end" : "justify-start"
			} `}
		>
			<div className={classes}>{message}</div>
		</div>
	);
}

export default Message;
