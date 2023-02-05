import { ReactNode } from "react";
import UserAvatar from "./right/UserAvatar";
import Conversation from "./right/Conversation";
type Props = {
	children?: ReactNode;
};
function Right({ children }: Props) {
	return (
		<div
			style={{ marginTop: "-1px" }}
			className="border-var1 border  basis-2/3 rounded-r-lg w-full h-full bg-var2 "
		>
			<UserAvatar />
			<Conversation />
			{children}
		</div>
	);
}

export default Right;
