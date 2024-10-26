import axios from "axios";
import { AuthState, LoginState, RegisterState } from "context";
import React, { FormEvent } from "react";
import { UserDataType } from "types";

/**
 *
 * @param e Element
 * @param location useLocation()
 * @param navigate useNavigation()
 */
const loginHandler = (e: FormEvent, location: any, navigate: any, loginState: LoginState, authDispatch: any) => {
	e.preventDefault();
	const loginInfo = { email: loginState?.email, password: loginState?.password };
	(async () => {
		try {
			const response = await axios.post(`/api/auth/login`, loginInfo);
			// saving the user data in the localStorage
			const user = {
				token: response.data.encodedToken,
				firstName: response.data.foundUser.firstName,
				lastName: response.data.foundUser.lastName,
				email: response.data.foundUser.email,
				avatar: response.data.foundUser.avatar,
			};
			authDispatch({
				type: "UPDATE_USER",
				payload: user,
			});
			localStorage.setItem("user", JSON.stringify(user));
			navigate(location?.state?.from?.pathname);
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 *
 * @param e Element
 * @param location useLocation()
 * @param navigate useNavigation()
 */
const registerHandler = (
	e: FormEvent,
	location: any,
	navigate: any,
	registerState: RegisterState,
	authDispatch: any
) => {
	e.preventDefault();
	const registerInfo = {
		firstName: registerState.firstName,
		lastName: registerState.lastName,
		email: registerState.email,
		password: registerState.password,
		avatar: registerState.avatar,
	};
	(async () => {
		try {
			const response = await axios.post(`/api/auth/signup`, registerInfo);

			// saving the encodedToken in the localStorage
			const user = {
				token: response.data.encodedToken,
				firstName: response.data.createdUser.firstName,
				lastName: response.data.createdUser.lastName,
				email: response.data.createdUser.email,
				avatar: response.data.createdUser.avatar,
				_id: response.data.createdUser._id,
			};
			authDispatch({
				type: "UPDATE_USER",
				payload: user,
			});
			localStorage.setItem("user", JSON.stringify(user));
			navigate(location?.state?.from?.pathname);
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from habits
 * @param element
 * @param {string} videoId videoId to remove from habits
 * @param {string} token encodedToken of user
 * @param {function} habitsDispatch Reducer function
 */
const updateUserHandler = (element: FormEvent, userData: UserDataType, authDispatch: any, authState: AuthState) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user`,
				{ userData: userData },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user") || `{}`)?.token,
					},
				}
			);
			localStorage.setItem(
				"user",
				JSON.stringify({ ...authState, ...userData })
			);
			authDispatch({
				type: "UPDATE_USER",
				payload: {
					...userData,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string, type: string, dispatch: any) => {
	const fieldValue: any = { type: type, payload: {} };
	fieldValue.payload[field] = e.target.value;
	dispatch(fieldValue);
};

const setTestHandler = (loginDispatch: any) =>
	loginDispatch({
		type: "TEST_CREDENTIAL",
		payload: { email: "sonishreyas10@gmail.com", password: "Shreyas" },
	});

const setFocusHandler = (field: string, value: boolean, type: string, loginDispatch: any, focusReset: any) => {
	focusReset[field] = value;
	loginDispatch({ payload: { focus: focusReset }, type: type });
};
export {
    loginHandler,
    registerHandler, setFocusHandler, setTestHandler, setValueHandler, updateUserHandler
};
