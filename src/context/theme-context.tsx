import React, { createContext, useContext } from "react";
import { useDefineRootColorScheme } from "../custom-hooks";
import { ThemeCtxType, ThemeStateType } from "./types";

const defaultThemeContextValues: ThemeStateType = {
	theme: "dark",
	themeIcon: "sun",
};

const ThemeContext = createContext({} as ThemeCtxType);

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
	const { theme, themeIcon, handleSetTheme } = useDefineRootColorScheme();

	return (
		<ThemeContext.Provider value={{ theme, themeIcon, handleSetTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
