import { createContext, useContext } from "react";

interface PrefContextProps {
	theme: number;
	themeHandler: any;
	userData: { email: string; username: string; password: string };
	handleUserData: (username: {
		email: string;
		username: string;
		password: string;
	}) => void;
}

export const prefContext = createContext<PrefContextProps>({
	theme: 1,
	themeHandler: () => {},
	userData: { email: "", username: "", password: "" },
	handleUserData: () => {},
});

export const prefCtxt = () => useContext(prefContext);
