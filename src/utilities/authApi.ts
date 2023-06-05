import {
	initState,
	loginFailed,
	loginStart,
	loginSuccess,
	registerFailed,
	registerStart,
	registerSuccess,
} from "../redux/userRedux";
import { loginUser, registerUser } from "./authTypes";
import { publicRequest } from "./requestMethodes";

export const login = async (dispatch: Function, user: loginUser) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailed(error.response.data));
	}
};

export const register = async (dispatch: Function, user: registerUser) => {
	dispatch(registerStart());
	try {
		const res = await publicRequest.post("/auth/register", user);
		dispatch(registerSuccess(res.data));
	} catch (error) {
		dispatch(registerFailed(error.response.data));
	}
};
