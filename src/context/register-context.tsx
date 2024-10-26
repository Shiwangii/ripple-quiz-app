import React, { createContext, useContext, useReducer } from "react";
import { registerReducer } from "../reducers";
import { RegisterCtxType, RegisterState } from "./types";

const defaultRegisterState: RegisterState = {
	email: "",
	password: "",
	firstName: "",
	lastName: "",
	confirmPassword: "",
	showPassword: { password: false, confirmPassword: false },
	focus: {
		firstName: false,
		lastName: false,
		email: false,
		password: false,
		confirmPassword: false,
	},
	avatar:
		"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/avatars/1.jpg",
};

const RegisterContext = createContext({} as RegisterCtxType);

const RegisterProvider = ({ children }: {children: React.ReactNode}) => {
	const [registerState, registerDispatch] = useReducer(
		registerReducer,
		defaultRegisterState
	);

	return (
		<RegisterContext.Provider value={{ registerState, registerDispatch }}>
			{children}
		</RegisterContext.Provider>
	);
};

const useRegister = () => useContext(RegisterContext);

export { RegisterProvider, useRegister };
