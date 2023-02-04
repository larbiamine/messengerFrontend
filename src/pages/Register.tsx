import { useState } from "react";
import LoadingButton from "../components/LoadingButton";

import AvatarInput from "../components/AvatarInput";
function Register() {
	document.title = "Login";

	const handlePwdChange = (e: React.FormEvent<HTMLFormElement>) => {
		setCpassword(e.target.value);
		setCpasswordError(!(e.target.value === password));
	};

	const [password, setPassword] = useState<string>("");
	const [cpassword, setCpassword] = useState<string>("");
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [cpasswordError, setCpasswordError] = useState<boolean>(false);
	const [usernameError, setUsernameError] = useState<boolean>(false);
	const [emailError, setEmailError] = useState<boolean>(false);

	const [loading, setLoading] = useState<boolean>(false);

	const [imgFile, setImgFile] = useState<File>();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const data = new FormData(e.currentTarget);
		const username = data.get("username");

		const email = data.get("email");
		const password = data.get("password");
		const validation =
			validateForm(
				username,
				email,
				password,
				setPasswordError,
				setEmailError,
				setUsernameError
			) && !cpasswordError;

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
			className="bg-var1 rounded-2xl flex  flex-col gap-6"
		>
			<div className="  py-8 px-8 max-w-sm mx-auto bg-dark rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
				<div className="  text-center space-y-4 sm:text-left">
					<p className="text-lg text-white font-semibold">Register</p>
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
						<p className="text-slate-400 font-medium">Email</p>
						<input
							name="email"
							className="pl-4 focus:border-transparent h-8 focus:ring-lighterbg rounded-2xl border-lighterbg text-black bg-dark bg-light"
							type="text"
						/>
						{emailError && (
							<p className="text-danger font-medium">Email is required</p>
						)}
					</div>
					<div className="space-y-0.5">
						<p className="text-slate-400 font-medium">Password</p>
						<input
							name="password"
							className="pl-4 focus:border-transparent h-8 focus:ring-lighterbg text-black rounded-2xl border-lighterbg bg-light"
							type="password"
							onChange={(e) => {
								setPassword(e.target.value);
								setCpasswordError(!(e.target.value === cpassword));
							}}
						/>
						{passwordError && (
							<p className="text-danger font-medium">Password is required</p>
						)}
					</div>
					<div className="space-y-0.5">
						<p className="text-slate-400 font-medium">Comfirm Password</p>
						<input
							name="cpassword"
							className="pl-4 focus:border-transparent h-8 focus:ring-lighterbg text-black rounded-2xl border-lighterbg bg-light"
							type="password"
							onChange={(e) => {
								handlePwdChange(e);
							}}
						/>
						{cpasswordError && (
							<p className="text-danger font-medium">Passwords dont match</p>
						)}
					</div>

					<AvatarInput setImgFile={setImgFile} />
					<div className=" ">
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
	email: string | null,
	setPasswordError: Function,
	setEmailError: Function,
	setUsernameError: Function
) {
	password === "" && setPasswordError(true);
	email === "" && setUsernameError(true);
	username === "" && setEmailError(true);

	if (
		!username ||
		!email ||
		!password ||
		password === "" ||
		email === "" ||
		username === ""
	) {
		return false;
	}
	setPasswordError(false);
	setUsernameError(false);
	setEmailError(false);
	return true;
}
export default Register;
