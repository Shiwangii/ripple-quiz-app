import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {
    AuthProvider,
    LoginProvider,
    ProfileProvider,
    QuestionProvider,
    QuizProvider,
    RegisterProvider,
    ThemeProvider,
} from "./context";
import "./index.css";
import { makeServer } from "./server";
// Call make Server
makeServer();
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<RegisterProvider>
					<LoginProvider>
						<AuthProvider>
							<ProfileProvider>
								<QuizProvider>
									<QuestionProvider>
										<App />
									</QuestionProvider>
								</QuizProvider>
							</ProfileProvider>
						</AuthProvider>
					</LoginProvider>
				</RegisterProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);