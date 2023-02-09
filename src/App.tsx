import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
import { useSelector } from "react-redux";
import { IRootState } from "./redux/store";
import { Navigate } from "react-router-dom";
function App() {
	const { currentUser } = useSelector((state: IRootState) => state);
	const loggedIn = currentUser ? true : false;

	const routes = createRoutesFromElements(
		<>
			<Route path="/" element={loggedIn ? <Home /> : <Login />} />
			<Route
				path="/login"
				element={loggedIn ? <Navigate to={"/"} /> : <Login />}
			/>
			<Route
				path="/register"
				element={loggedIn ? <Navigate to={"/"} /> : <Register />}
			/>
		</>
	);
	const router = createBrowserRouter(routes);
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
