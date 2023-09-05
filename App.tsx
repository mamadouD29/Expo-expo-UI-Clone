import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./navigations/stacks/HomeStack";
import BottomTabs from "./navigations/tabs/BottomTabs";
import { useEffect, useState } from "react";
import { prefContext } from "./services/context/prefContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themeMode } from "./services/utils/themeMode";

export default function App() {
	const [theme, toggleTheme] = useState<number>(1);
	const { themeText } = themeMode();
	const [userData, setUserData] = useState({
		email: "",
		username: "",
		password: "",
	});

	const themeHandler = async (id: number) => {
		toggleTheme(id);
		AsyncStorage.setItem("theme", JSON.stringify(id));
	};

	useEffect(() => {
		const getTheme = async () => {
			const json = await AsyncStorage.getItem("theme");
			if (json === null) return;
			const parsedVallue = JSON.parse(json);
			toggleTheme(parsedVallue);
		};
		getTheme();
	}, []);

	const handleUserData = (users: {
		email: string;
		username: string;
		password: string;
	}) => {
		setUserData(users);
	};
	const values = {
		theme,
		themeHandler,
		userData,
		handleUserData,
	};
	return (
		<prefContext.Provider value={values}>
			<NavigationContainer>
				<StatusBar
					style={theme === 3 ? "light": theme === 2 ? "dark" : "auto"}
				/>
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
