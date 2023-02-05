import React from "react";

function Search() {
	const classes = `
    my-2 p-2 rounded-lg flex bg-var1 flex-row
    `;
	return (
		<div className={classes}>
			<input
				className="focus:outline-none w-full rounded-lg bg-var1"
				type="text"
			/>
			<SearchIcon />
		</div>
	);
}

export default Search;

function SearchIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			/>
		</svg>
	);
}
