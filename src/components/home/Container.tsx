import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

const classes = `
 
`;

const Container: React.FC<Props> = ({ children }) => (
	<div className="w-full h-screen bg-var1 rounded-lg p-10">{children}</div>
);

export default Container;
