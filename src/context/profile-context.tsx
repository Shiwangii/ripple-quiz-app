import React, { createContext, useContext, useState } from "react";
import { useGetAvatarsData } from "../custom-hooks";
import { ProfileCtxType } from "./types";

const ProfileContext = createContext({} as ProfileCtxType);

const ProfileProvider = ({ children }: {children: React.ReactNode}) => {
	const [profileActiveTab, setProfileActiveTab] = useState<string>("Profile");
	const avatarsData = useGetAvatarsData();
	return (
		<ProfileContext.Provider
			value={{ profileActiveTab, setProfileActiveTab, avatarsData }}
		>
			{children}
		</ProfileContext.Provider>
	);
};

const useProfile = () => useContext(ProfileContext);

export { ProfileProvider, useProfile };
