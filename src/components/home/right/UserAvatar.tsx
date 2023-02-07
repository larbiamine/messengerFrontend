import { getUser } from "../../../utilities/fetchApi";
import { useQuery } from "@tanstack/react-query";
interface Props {
	id: String;
}

const users = [
	{
		name: "Amine Larbi",
		avatar:
			"https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-6/239368917_3061858877418525_1779566369340735942_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDxH3M0DbReoYlr8rtexzmLUSv3yWoCAItRK_fJagIAoqSbIXqnzpZR1YthJJ-wNC7fwPugHKO6dQBJhIdmaGp&_nc_ohc=cGx3OeHmFGcAX9U58Ef&tn=EFRiGTKvuk0DjdEO&_nc_ht=scontent.fcfk1-1.fna&oh=00_AfCI7FkgYFVpOn33mxYktjZeGxQvuhItrVGWltSZxuQXUg&oe=63E3C4D4",
	},

	{
		name: "Brian Sanders",
		avatar:
			"https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg",
	},

	{
		name: "Linnie McDonald",
		avatar:
			"https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture.jpg",
	},

	{
		name: "Frances Rivera",
		avatar:
			"https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg",
	},
];

function UserAvatar({ id }: Props) {
	const querykey = [`user ${id}`];
	const { status, data, error, isLoading } = useQuery(querykey, () =>
		getUser(id)
	);

	return !isLoading ? (
		<div className="m-5 flex flex-row">
			<img
				src={data.avatar}
				alt=""
				className=" inline-block relative object-cover object-center w-10 h-10 rounded-xl"
			/>
			<h6 className="p-2 ml-2">{data.username}</h6>
			<Online />
		</div>
	) : (
		<div className="m-5 flex flex-row">Loading</div>
	);
}

function Online() {
	return (
		<div className="flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="white"
				viewBox="0 0 24 24"
				strokeWidth={0}
				stroke="green"
				className="w-4 h-4 my-3 animate-ping opacity-50 absolute "
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 "
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="green"
				viewBox="0 0 24 24"
				strokeWidth={0}
				stroke="green"
				className="w-4 h-4 my-3 relative "
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 "
				/>
			</svg>
		</div>
	);
}

export default UserAvatar;
