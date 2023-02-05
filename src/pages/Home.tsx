import Left from "../components/home/Left";
import Container from "../components/home/Container";
import Right from "../components/home/Right";

function Home() {
	return (
		<Container>
			{/* <h1 className="text-3xl font-bold underline">Welcome</h1> */}
			<div className="flex flex-row">
				<Left></Left>
				<Right></Right>
			</div>
		</Container>
	);
}

export default Home;
