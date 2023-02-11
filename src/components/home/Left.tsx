import Chat from "./left/Chat";
import Search from "./left/Search";
import { ConversationType } from "../../utilities/types";
import { logout } from "../../redux/userRedux";
import { useDispatch } from "react-redux";
import { IRootState } from "../../redux/store";
import { useSelector } from "react-redux";

type Props = {
	setSelectedChat: Function;
	isLoading: Boolean;
	refetch: Function;
	selectedChat?: number;
	conversations: Array<ConversationType>;
};

function Left({
	conversations,
	isLoading,
	selectedChat,
	setSelectedChat,
	refetch,
}: Props) {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state: IRootState) => state);

	return (
		<div className="  p-5 basis-1/3 rounded-l-lg w-full   bg-var2 ">
			<div className="flex flex-row">
				<h6 className="basis-11/12 mb-6 text-xl text-left">Chats</h6>

				<div
					id="tooltip-default"
					role="tooltip"
					className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
				>
					Tooltip content
					<div className="tooltip-arrow" data-popper-arrow></div>
				</div>

				<div className="group flex mx-2 relative">
					<img
						data-tooltip-target="tooltip-default"
						src={currentUser.avatar}
						alt=""
						className="inline-block mx-2 relative object-cover object-center w-10 h-10 rounded-xl"
					/>
					<span className="group-hover:opacity-100 transition-opacity bg-var3 px-1 pb-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-5 mx-auto">
						{currentUser.username}
					</span>
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-6 h-6 my-2 basis-1/12"
					onClick={() => {
						dispatch(logout());
					}}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
					/>
				</svg>
			</div>

			<Search />
			<div
				style={{
					height: "70vh",
					overflow: "auto",
				}}
			>
				{!isLoading ? (
					conversations.map((c, index) => (
						<div
							key={c._id}
							onClick={() => {
								refetch();
								setSelectedChat(index);
							}}
						>
							<Chat selected={selectedChat === index} conversation={c} />
						</div>
					))
				) : (
					<div className="rounded-lg animate-pulse opacity-0 w-full h-full bg-var3"></div>
				)}
			</div>
		</div>
	);
}

export default Left;
