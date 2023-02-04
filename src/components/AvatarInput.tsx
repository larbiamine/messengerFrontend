import { Avatar } from "@material-tailwind/react";
import { useState } from "react";

interface avatarInputProps {
	setImgFile: Function;
}

function AvatarInput({ setImgFile }: avatarInputProps) {
	const [src, setSrc] = useState<string>(
		"https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-6/239368917_3061858877418525_1779566369340735942_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDxH3M0DbReoYlr8rtexzmLUSv3yWoCAItRK_fJagIAoqSbIXqnzpZR1YthJJ-wNC7fwPugHKO6dQBJhIdmaGp&_nc_ohc=cGx3OeHmFGcAX9U58Ef&tn=EFRiGTKvuk0DjdEO&_nc_ht=scontent.fcfk1-1.fna&oh=00_AfCI7FkgYFVpOn33mxYktjZeGxQvuhItrVGWltSZxuQXUg&oe=63E3C4D4"
	);

	return (
		<div className="justify-items-center grid gap-2">
			{/* <Avatar
        src="https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-6/239368917_3061858877418525_1779566369340735942_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDxH3M0DbReoYlr8rtexzmLUSv3yWoCAItRK_fJagIAoqSbIXqnzpZR1YthJJ-wNC7fwPugHKO6dQBJhIdmaGp&_nc_ohc=cGx3OeHmFGcAX9U58Ef&tn=EFRiGTKvuk0DjdEO&_nc_ht=scontent.fcfk1-1.fna&oh=00_AfCI7FkgYFVpOn33mxYktjZeGxQvuhItrVGWltSZxuQXUg&oe=63E3C4D4"
        alt="avatar"
        size="xl"
    /> */}
			<label htmlFor="file-input">
				<Avatar size="xl" src={src} />
			</label>
			<input
				type="file"
				id="file-input"
				style={{ display: "none" }}
				accept="image/*"
				// ref={imgFileRef}
				onChange={(e) => {
					setImgFile(e.target.files[0]);
					setSrc(URL.createObjectURL(e.target.files[0]));
				}}
			/>
		</div>
	);
}

export default AvatarInput;
