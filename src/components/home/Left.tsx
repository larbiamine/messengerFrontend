import { ReactNode, useState } from "react";
import Chat from "./left/Chat";
import Search from "./left/Search";

type Props = {
	setSelectedChat: Function;

	selectedChat?: number;
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

function Left({ selectedChat, setSelectedChat }: Props) {
	return (
		<div className="  p-5 basis-1/3 rounded-l-lg w-full h-full bg-var2 ">
			<h6 className=" mb-6 text-xl text-left">Chats</h6>
			<Search />
			<div
				style={{
					height: "70vh",
					overflow: "auto",
				}}
			>
				{chats.map(({ user, lastMessage }, index) => (
					<div onClick={() => setSelectedChat(index)}>
						<Chat
							key={index + user.name}
							selected={selectedChat === index}
							user={user}
							lastMessage={lastMessage}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Left;
