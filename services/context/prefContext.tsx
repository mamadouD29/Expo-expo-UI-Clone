import { createContext, useContext } from "react";

interface PrefContextProps {
	theme: number;
	themeHandler: any;
}

export const prefContext = createContext<PrefContextProps>({
	theme: 1,
	themeHandler: () => {},
});

export const prefCtxt = () => useContext(prefContext);
