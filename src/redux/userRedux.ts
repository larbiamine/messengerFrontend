import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../authTypes";

const iState: initialState = {
	currentUser: null,
	isFetching: false,
	isRegisterError: false,
	isLoginError: false,
	registerError: "",
	loginError: "",
};

const userSlice = createSlice({
	name: "user",
	initialState: iState,
	reducers: {
		initState: (state) => {
			state.isFetching = false;
			state.registerError = "";
			state.isLoginError = false;
			state.isRegisterError = false;
		},
		loginStart: (state) => {
			state.isFetching = true;
		},

		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.isLoginError = false;
			state.currentUser = action.payload;
		},

		logout: (state) => {
			state.currentUser = null;
			state.isLoginError = false;

			state.isFetching = false;
			state.registerError = "";

			state.isRegisterError = false;
		},
		loginFailed: (state, action) => {
			state.isLoginError = true;
			state.loginError = action.payload;
			state.isFetching = false;
		},
		registerStart: (state) => {
			state.isFetching = true;
		},
		registerSuccess: (state) => {
			state.isFetching = false;
			state.isRegisterError = false;
		},

		registerFailed: (state, action) => {
			state.registerError = action.payload;
			state.isRegisterError = true;
			state.isFetching = false;
		},
	},
});

export const {
	registerStart,
	registerSuccess,
	registerFailed,
	loginFailed,
	logout,
	loginSuccess,
	loginStart,
	initState,
} = userSlice.actions;

export default userSlice.reducer;
