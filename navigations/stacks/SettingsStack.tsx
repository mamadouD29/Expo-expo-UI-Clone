import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "../../screens/main/HomeScreen";
import {
	HomeScreen,
	ProjectsScreen,
	SettingsScreen,
	SnacksScreen,
} from "../../screens/main/index";
import Header from "../../components/shared/Header";
import { themeMode } from "../../services/utils/themeMode";

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
	const { themeContainer } = themeMode();
	return (
		<Stack.Navigator screenOptions={{ headerStyle: themeContainer }}>
			<Stack.Screen
				name="SettingsScreen"
				component={SettingsScreen}
				options={{
					headerTitle: () => (
						<Header title="Settings" signUpAndLogin={() => {}} />
					),
				}}
			/>
		</Stack.Navigator>
	);
}
