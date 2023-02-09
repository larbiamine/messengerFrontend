import { ReactNode, useState } from "react";
import Chat from "./left/Chat";
import Search from "./left/Search";
import { ConversationType } from "../../utilities/types";
import { logout } from "../../redux/userRedux";
import { useDispatch } from "react-redux";
type Props = {
	setSelectedChat: Function;
	isLoading: Boolean;
	selectedChat?: number;
	conversations: Array<ConversationType>;
};

const chats = [
	{
		selected: true,
		user: {
			name: "Amine Larbi",
			avatar:
				"https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-6/239368917_3061858877418525_1779566369340735942_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDxH3M0DbReoYlr8rtexzmLUSv3yWoCAItRK_fJagIAoqSbIXqnzpZR1YthJJ-wNC7fwPugHKO6dQBJhIdmaGp&_nc_ohc=cGx3OeHmFGcAX9U58Ef&tn=EFRiGTKvuk0DjdEO&_nc_ht=scontent.fcfk1-1.fna&oh=00_AfCI7FkgYFVpOn33mxYktjZeGxQvuhItrVGWltSZxuQXUg&oe=63E3C4D4",
		},
		lastMessage: "aight . 22m",
	},
	{
		selected: false,
		user: {
			name: "Brian Sanders",
			avatar:
				"https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg",
		},
		lastMessage: "Randomly Generated . 22m",
	},
	{
		selected: false,
		user: {
			name: "Linnie McDonald",
			avatar:
				"https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture.jpg",
		},
		lastMessage: "Country code . 22m",
	},
	{
		selected: false,
		user: {
			name: "Frances Rivera",
			avatar:
				"https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg",
		},
		lastMessage: "Curious what Frances means . 22m",
	},
];

function Left({
	conversations,
	isLoading,
	selectedChat,
	setSelectedChat,
}: Props) {
	const dispatch = useDispatch();
	return (
		<div className="  p-5 basis-1/3 rounded-l-lg w-full h-full bg-var2 ">
			<div className="flex flex-row">
				<h6 className="basis-11/12 mb-6 text-xl text-left">Chats</h6>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-3 h-6 my-1 basis-1/12"
					onClick={() => {
						console.log("gg");
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
						<div key={c._id} onClick={() => setSelectedChat(index)}>
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
