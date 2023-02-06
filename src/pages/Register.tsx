import { useState, useEffect } from "react";
import LoadingButton from "../components/LoadingButton";

import AvatarInput from "../components/AvatarInput";
import { register } from "../utilities/authApi";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../utilities/authTypes";
import { IRootState } from "../redux/store";
import { initState } from "../redux/userRedux";
function Register() {
	document.title = "Register";

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

	const [imgFile, setImgFile] = useState<File>();

	const { isRegisterError, registerError, isFetching } = useSelector(
		(state: IRootState) => state
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initState());
	}, []);
	// dispatch(initState());
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		const username = data.get("username");

		const email = data.get("email");
		const password = data.get("password");
		const validation =
			validateForm(
				{ username, email, password },
				setPasswordError,
				setEmailError,
				setUsernameError
			) && !cpasswordError;

		if (validation) {
			console.log("💢 Here ✔");
			await register(dispatch, { username, email, password });
		} else {
			console.log(" passwordERROR");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-var1 rounded-lg flex w-full flex-col gap-6"
		>
			<div className="  py-8 px-8 max-w-sm mx-auto bg-dark rounded-lg shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
				<div className="  text-center space-y-4 sm:text-left">
					<p className="text-lg text-white font-semibold">Register</p>
					<div className="space-y-0.5">
						<p className="text-slate-400 font-medium">Username</p>
						<input
							name="username"
							className="pl-4  w-full focus:border-transparent h-8 focus:ring-lighterbg rounded-lg border-lighterbg text-black bg-dark bg-light"
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
							className="pl-4  w-full focus:border-transparent h-8 focus:ring-lighterbg rounded-lg border-lighterbg text-black bg-dark bg-light"
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
							className="pl-4  w-full focus:border-transparent h-8 focus:ring-lighterbg text-black rounded-lg border-lighterbg bg-light"
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
						<p className="text-slate-400 font-medium">Confirm Password</p>
						<input
							name="cpassword"
							className="pl-4  w-full focus:border-transparent h-8 focus:ring-lighterbg text-black rounded-lg border-lighterbg bg-light"
							type="password"
							onChange={(e) => {
								handlePwdChange(e);
							}}
						/>
						{cpasswordError && (
							<p className="text-danger font-medium">Passwords dont match</p>
						)}
					</div>
					{isRegisterError && (
						<div className="w-full">
							<p className="text-danger font-medium">{registerError}</p>
						</div>
					)}
					<AvatarInput setImgFile={setImgFile} />
					<div className=" ">
						<LoadingButton
							loading={isFetching}
							fullWidth
							title="Register"
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
	user: registerUser,
	setPasswordError: Function,
	setEmailError: Function,
	setUsernameError: Function
) {
	const { username, password, email } = user;
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
