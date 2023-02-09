import { useState, useEffect } from "react";

import Checkbox from "@material-tailwind/react/components/Checkbox";

import LoadingButton from "../components/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../utilities/authApi";
import { loginUser } from "../utilities/authTypes";
import { IRootState } from "../redux/store";
import { initState } from "../redux/userRedux";
import { useNavigate } from "react-router-dom";
function Login() {
	document.title = "Login";
	const [passwordError, setPasswordError] = useState(false);
	const [usernameError, setUsernameError] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initState());
	}, []);
	const { isLoginError, loginError, isFetching } = useSelector(
		(state: IRootState) => state
	);
	const navigate = useNavigate();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		const username = data.get("username");

		const password = data.get("password");
		const validation = validateForm(
			{ username, password },
			setPasswordError,
			setUsernameError
		);

		if (validation) {
			console.log("💢 Here ✔");
			await login(dispatch, { username, password });
			navigate("/");
		} else {
			console.log(" passwordERROR");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-var1 rounded-2xl flex flex-col w-full gap-6"
		>
			<div className="py-8 px-8 max-w-sm mx-auto bg-dark rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
				<div className="text-center space-y-4 sm:text-left">
					<p className="text-lg text-white font-semibold">Login</p>
					<div className="space-y-0.5">
						<p className="text-slate-400 font-medium">Username</p>
						<input
							name="username"
							className="pl-4 w-full focus:border-transparent h-8 focus:ring-lighterbg rounded-2xl border-lighterbg text-black bg-dark bg-light"
							type="text"
						/>
						{usernameError && (
							<p className="text-danger font-medium">Password is required</p>
						)}
					</div>
					<div className="space-y-0.5">
						<p className="text-slate-400 font-medium">Password</p>
						<input
							name="password"
							className="pl-4 w-full focus:border-transparent h-8 focus:ring-lighterbg text-black rounded-2xl border-lighterbg bg-light"
							type="password"
						/>
						{passwordError && (
							<p className="text-danger font-medium">Password is required</p>
						)}
					</div>
					<div className="flex items-center gap-2">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							className="ml-1 accent-var3 w-5 h-5 dark:ring-var3  focus:bg-var3 text-var3 bg-gray-100 border-gray-300 rounded-2xl focus:ring-var3 dark:focus:ring-var3 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>

						<label className="ml-1 text-sm font-medium text-white dark:text-gray-300">
							Remember Me
						</label>
					</div>
					{isLoginError && (
						<div className="w-3/4">
							<p className="text-danger font-medium">{loginError}</p>
						</div>
					)}
					<div className=" flex items-center gap-2">
						<LoadingButton
							loading={isFetching}
							title="Login"
							submit={true}
							fullWidth
							bg="var3"
						/>
					</div>
				</div>
			</div>
		</form>
	);
}

function validateForm(
	user: loginUser,
	setPasswordError: Function,
	setUsernameError: Function
) {
	const { username, password } = user;
	password === "" && setPasswordError(true);
	username === "" && setUsernameError(true);

	if (!username || !password || password === "" || username === "") {
		return false;
	}
	setPasswordError(false);
	setUsernameError(false);
	return true;
}

export default Login;
