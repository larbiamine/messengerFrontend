import React from "react";

function UserAvatar() {
	return (
		<div className="m-5 flex flex-row">
			<img
				src="https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-6/239368917_3061858877418525_1779566369340735942_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDxH3M0DbReoYlr8rtexzmLUSv3yWoCAItRK_fJagIAoqSbIXqnzpZR1YthJJ-wNC7fwPugHKO6dQBJhIdmaGp&_nc_ohc=cGx3OeHmFGcAX9U58Ef&tn=EFRiGTKvuk0DjdEO&_nc_ht=scontent.fcfk1-1.fna&oh=00_AfCI7FkgYFVpOn33mxYktjZeGxQvuhItrVGWltSZxuQXUg&oe=63E3C4D4"
				alt=""
				className=" inline-block relative object-cover object-center w-10 h-10 rounded-xl"
			/>
			<h6 className="p-2 ml-2">Amine Larbi</h6>
			<Online />
		</div>
	);
}

function Online() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="green"
			viewBox="0 0 24 24"
			strokeWidth={0}
			stroke="green"
			className="w-4 h-4 my-3"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 "
			/>
		</svg>
	);
}

export default UserAvatar;
