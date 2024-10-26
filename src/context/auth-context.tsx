import React, { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers";
import { AuthCtxType, AuthState } from "./types";

const defaultAuthState: AuthState = {
	token: "",
	email: "",
	firstName: "",
	lastName: "",
	avatar: "",
};

const AuthContext = createContext({} as AuthCtxType);

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
	const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
	useEffect(
		() =>
			authDispatch({
				type: "UPDATE_USER",
				payload: JSON.parse(localStorage.getItem("user") || `{}`)
			}),
		[]
	);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
