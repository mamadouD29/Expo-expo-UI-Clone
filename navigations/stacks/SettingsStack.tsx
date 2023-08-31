import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "../../screens/main/HomeScreen";
import {
	HomeScreen,
	ProjectsScreen,
	SettingsScreen,
	SnacksScreen,
} from "../../screens/main/index";
import Header from "../../components/shared/Header";

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SettingsScreen"
				component={SettingsScreen}
				options={{
					headerTitle: () => (
						<Header title="Settings"  />
					),
				}}
			/>
		</Stack.Navigator>
	);
}
