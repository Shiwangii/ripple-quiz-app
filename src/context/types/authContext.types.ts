export type AuthState = {
	token: string;
	firstName: string;
	lastName: string;
	avatar: string;
	email: string;
};

export type AuthActionType =
	| {
			type: "UPDATE_TOKEN";
			payload: {
				token: string;
			};
	  }
	| {
			type: "UPDATE_EMAIL";
			payload: {
				email: string;
			};
	  }
	| {
			type: "UPDATE_FIRSTNAME";
			payload: {
				firstName: string;
			};
	  }
	| {
			type: "UPDATE_LASTNAME";
			payload: {
				lastName: string;
			};
	  }
	| {
			type: "UPDATE_USER";
			payload: AuthState | {};
	  }
	| {
			type: "LOGOUT";
	  };

export type AuthCtxType = {
	authState: AuthState;
	authDispatch: (arg0: AuthActionType) => void;
};

export type LoginState = {
  email: string;
	password: string;
	focus: { email: boolean, password: boolean };
};

export type LoginActionType = 
  | {
    type: "UPDATE_EMAIL";
    payload: {
      email: string;
    }
  }
  | {
    type: "UPDATE_PASSWORD";
    payload: {
      password: string;
    }
  }
  | {
    type: "UPDATE_FOCUS";
    payload: {
      focus: { email: boolean; password: boolean; };
    }
  }
  | {
    type: "TEST_CREDENTIAL";
    payload: {
      email: string;
      password: string;
    }
  }
  | {
    type: "UPDATE_USER";
    payload: AuthState;
  }
  | {
    type: "RESET";
  }

export type LoginCtxType = {
  loginState: LoginState;
  loginDispatch: (arg0: LoginActionType) => void;
};

export type RegisterState = {
  email: string;
	password: string;
  firstName: string;
	lastName: string;
	confirmPassword: string;
	showPassword: { password: boolean; confirmPassword: boolean };
	focus: {
		firstName: boolean;
		lastName: boolean;
		email: boolean;
		password: boolean;
		confirmPassword: boolean;
	};
	avatar: string;
};

export type RegisterActionType = 
  | {
    type: "UPDATE_EMAIL";
    payload: {
      email: string;
    }
  }
  | {
    type: "UPDATE_FIRST_NAME";
    payload: {
      firstName: string;
    }
  }
  | {
    type: "UPDATE_LAST_NAME";
    payload: {
      lastName: string;
    }
  }
  | {
    type: "UPDATE_PASSWORD";
    payload: {
      password: string;
    }
  }
  | {
    type: "UPDATE_CONFIRM_PASSWORD";
    payload: {
      confirmPassword: string;
    }
  }
  | {
    type: "UPDATE_FOCUS";
    payload: {
      focus: any;
    }
  }
  | {
    type: "RESET";
  }

export type RegisterCtxType = {
  registerState: RegisterState;
  registerDispatch: (arg0: RegisterActionType) => void
};