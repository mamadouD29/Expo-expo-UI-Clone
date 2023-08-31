import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./navigations/stacks/HomeStack";
import BottomTabs from "./navigations/tabs/BottomTabs";

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			{/* <HomeStack /> */}
			<BottomTabs/>
		</NavigationContainer>
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
