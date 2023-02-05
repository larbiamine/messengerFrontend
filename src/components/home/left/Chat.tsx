import React from "react";

type Props = {
	selected?: boolean;
};

function Chat({ selected }: Props) {
	const classes = `
    my-2 p-2 rounded-lg flex ${selected ? "bg-var1" : ""} flex-row
    `;

	return (
		<div className={classes}>
			<img
				src="https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-6/239368917_3061858877418525_1779566369340735942_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDxH3M0DbReoYlr8rtexzmLUSv3yWoCAItRK_fJagIAoqSbIXqnzpZR1YthJJ-wNC7fwPugHKO6dQBJhIdmaGp&_nc_ohc=cGx3OeHmFGcAX9U58Ef&tn=EFRiGTKvuk0DjdEO&_nc_ht=scontent.fcfk1-1.fna&oh=00_AfCI7FkgYFVpOn33mxYktjZeGxQvuhItrVGWltSZxuQXUg&oe=63E3C4D4"
				alt=""
				className=" inline-block relative object-cover object-center w-10 h-10 rounded-xl"
			/>
			<div className="text-left ml-4">
				<h6 className="  ">Amine Larbi</h6>
				<h6 className=" text-sm">You: Yes . 22 m</h6>
			</div>
		</div>
	);
}

export default Chat;
