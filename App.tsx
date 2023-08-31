import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./navigations/stacks/HomeStack";
import BottomTabs from "./navigations/tabs/BottomTabs";
import { useState } from "react";
import { prefContext } from "./services/context/prefContext";

export default function App() {
	const [theme, toggleTheme] = useState<number>(1);
	const [user, setUser] = useState<string>("");

	const themeHandler = (id: number) => {
		toggleTheme(id);
	};
	const values = {
		theme,
		themeHandler,
	};
	return (
		<prefContext.Provider value={values}>
			<NavigationContainer>
				<StatusBar style="auto" />
				{/* <HomeStack /> */}
				<BottomTabs />
			</NavigationContainer>
		</prefContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
