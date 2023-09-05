import { StyleSheet } from "react-native";
import { prefCtxt } from "../context/prefContext";

const colors = {
	dark: {
		darkContainer: {
			backgroundColor: "#18181b",
		},
		darkText: {
			color: "#f5f5f4",
		},
		darkContent: {
			backgroundColor: "#27272a",
		},
		headerContainer: {
			backgroundColor: "#18181b",
		},
		tabBarContainer: {
			backgroundColor: "#111827",
		},
		btn: {
			backgroundColor: "#005db4",
		},
		bColor: {
			borderColor: "#9ca3af",
		},
	},
	light: {
		lightContainer: {
			backgroundColor: "#e7e5e4",
		},
		lightText: {
			color: "#002851",
		},
		lightContent: {
			backgroundColor: "#fafafa",
		},
		headerContainer: {
			backgroundColor: "#f5f5f4",
		},
		tabBarContainer: {
			backgroundColor: "#e7e5e4",
		},

		btn: {
			backgroundColor: "#0077e6",
		},
		bColor: {
			borderColor: "#9ca3af",
		},
	},
};

export const themeMode = () => {
	const { theme } = prefCtxt();
	const themeContainer =
		theme === 3 ? colors.dark.darkContainer : colors.light.lightContainer;
	const themeContent =
		theme === 3 ? colors.dark.darkContent : colors.light.lightContent;
	const themeText =
		theme === 3 ? colors.dark.darkText : colors.light.lightText;

	const themeBcolor = theme === 3 ? colors.dark.bColor : colors.light.bColor;

	return { themeContainer, themeContent, themeText, themeBcolor };
};
