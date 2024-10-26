import React, { createContext, useContext, useReducer } from "react";
import { loginReducer } from "../reducers";
import { LoginCtxType, LoginState } from "./types";
const defaultLoginState: LoginState = {
	email: "",
	password: "",
	focus: { email: false, password: false },
};

const LoginContext = createContext({} as LoginCtxType);

const LoginProvider = ({ children }: {children: React.ReactNode}) => {
	const [loginState, loginDispatch] = useReducer(
		loginReducer,
		defaultLoginState
	);

	return (
		<LoginContext.Provider value={{ loginState, loginDispatch }}>
			{children}
		</LoginContext.Provider>
	);
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
