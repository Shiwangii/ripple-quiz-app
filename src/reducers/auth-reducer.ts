import { AuthActionType, AuthState, LoginActionType, LoginState, RegisterActionType, RegisterState } from "context";

const loginReducer = (loginState: LoginState, action : LoginActionType): LoginState => {
	switch (action.type) {
		case "UPDATE_EMAIL":
			return { ...loginState, email: action.payload.email };
		case "UPDATE_PASSWORD":
			return {
				...loginState,
				password: action.payload.password,
			};
		case "UPDATE_FOCUS":
			return { ...loginState, focus: action.payload.focus };
		case "TEST_CREDENTIAL":
			return {
				...loginState,
				email: action.payload.email,
				password: action.payload.password,
			};
		case "UPDATE_USER":
			return { ...loginState, ...action.payload };
		case "RESET":
			return {
				...loginState,
				email: "",
				password: "",
				focus: { email: false, password: false },
			};
		default:
			return {...loginState};
	}
};

const registerReducer = (registerState: RegisterState, action: RegisterActionType): RegisterState => {
	switch (action.type) {
		case "UPDATE_EMAIL":
			return { ...registerState, email: action.payload.email };
		case "UPDATE_FIRST_NAME":
			return { ...registerState, firstName: action.payload.firstName };
		case "UPDATE_LAST_NAME":
			return { ...registerState, lastName: action.payload.lastName };
		case "UPDATE_PASSWORD":
			return {
				...registerState,
				password: action.payload.password,
			};
		case "UPDATE_CONFIRM_PASSWORD":
			return {
				...registerState,
				confirmPassword: action.payload.confirmPassword,
			};
		case "UPDATE_FOCUS":
			return { ...registerState, focus: action.payload.focus };
		case "RESET":
			return {
				...registerState,
				email: "",
				password: "",
				firstName: "",
				lastName: "",
				confirmPassword: "",
				focus: {
					firstName: false,
					lastName: false,
					email: false,
					password: false,
					confirmPassword: false,
				},
			};
		default:
			return {...registerState};
	}
};

const authReducer = (
	authState: AuthState,
	action: AuthActionType
): AuthState => {
	switch (action.type) {
		case "UPDATE_TOKEN":
			return { ...authState, token: action.payload.token };
		case "UPDATE_EMAIL":
			return { ...authState, email: action.payload.email };
		case "UPDATE_FIRSTNAME":
			return { ...authState, firstName: action.payload.firstName };
		case "UPDATE_LASTNAME":
			return { ...authState, lastName: action.payload.lastName };
		case "UPDATE_USER":
			return { ...authState, ...action.payload };
		case "LOGOUT":
			return {
				...authState,
				token: "",
				email: "",
				firstName: "",
				lastName: "",
				avatar: "",
			};
		default:
			return {...authState};
	}
};

export { authReducer, loginReducer, registerReducer };
