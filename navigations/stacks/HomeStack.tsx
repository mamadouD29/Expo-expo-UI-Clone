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

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerTitle: () => (
						<Header title="Expo Go" user="Mamadou" />
					),
				}}
			/>
			<Stack.Screen name="Settings" component={SettingsScreen} />
			<Stack.Screen name="Projects" component={ProjectsScreen} />
			<Stack.Screen name="Snacks" component={SnacksScreen} />
		</Stack.Navigator>
	);
}
