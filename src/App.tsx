import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
	Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
	const routes = createRoutesFromElements(
		<>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</>
	);
	const router = createBrowserRouter(routes);
	return <RouterProvider router={router} />;
}

export default App;
