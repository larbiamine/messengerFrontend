const LoadingBlocks = () => {
	const classes =
		"h-14 animate-pulse opacity-0 my-2 p-2 rounded-lg flex bg-var1 flex-row transition-all duration-300";

	return (
		<>
			{[654, 453, 789, 41253, 6, 54, 786].map((a) => (
				<div key={a} className={classes}></div>
			))}
		</>
	);
};

export default LoadingBlocks;
