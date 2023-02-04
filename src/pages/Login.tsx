import { useState } from "react";

import Checkbox from "@material-tailwind/react/components/Checkbox";

import LoadingButton from "../components/LoadingButton";

function Login() {
	document.title = "Login";
	const [passwordError, setPasswordError] = useState(false);
	const [usernameError, setUsernameError] = useState(false);

	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const data = new FormData(e.currentTarget);
		const username = data.get("username");

		const password = data.get("password");
		const validation = validateForm(
			username,
			password,
			setPasswordError,
			setUsernameError
		);

		if (validation) {
			console.log("💢 Here ✔");
		} else {
			console.log(" passwordERROR");
		}
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-var1 rounded-2xl flex flex-col gap-6"
		>
			<div className="py-8 px-8 max-w-sm mx-auto bg-dark rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
				<div className="text-center space-y-4 sm:text-left">
					<p className="text-lg text-white font-semibold">Login</p>
					<div className="space-y-0.5">
						<p className="text-slate-400 font-medium">Username</p>
						<input
							name="username"
							className="pl-4 focus:border-transparent h-8 focus:ring-lighterbg rounded-2xl border-lighterbg text-black bg-dark bg-light"
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
							className="pl-4 focus:border-transparent h-8 focus:ring-lighterbg text-black rounded-2xl border-lighterbg bg-light"
							type="password"
						/>
						{passwordError && (
							<p className="text-danger font-medium">Password is required</p>
						)}
					</div>
					<div className="flex items-center gap-2">
						<Checkbox
							color="pink"
							className=""
							label="Remember Me"
							defaultChecked
						/>
					</div>
					<div className=" flex items-center gap-2">
						<LoadingButton
							loading={loading}
							title="Login"
							submit={true}
							bg="var3"
						/>
					</div>
				</div>
			</div>
		</form>
	);
}

function validateForm(
	username: string | null,
	password: string | null,
	setPasswordError: Function,
	setUsernameError: Function
) {
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
