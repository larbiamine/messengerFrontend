const LoadingBlocks = () => {
	const classes =
		"h-14 animate-pulse opacity-0 my-2 p-2 rounded-lg flex bg-var1 flex-row transition-all duration-300";

	return (
		<>
			{[1, 2, 3, 4, 5, 5, 5].map((a) => (
				<div className={classes}></div>
			))}
		</>
	);
};

export default LoadingBlocks;
