import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen } from "../../screens/main";
import HomeStack from "../stacks/HomeStack";
import SettingsStack from "../stacks/SettingsStack";
import { EmIcons } from "../../components/shared/EmIcons";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarLabel: ({ focused }) =>
					focused ? <Text>{route.name}</Text> : null,
			})}
		>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarIcon: () => <EmIcons title="Home" />,
					//    tabBarShowLabel: on clik
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsStack}
				options={{
					tabBarIcon: () => <EmIcons title="Gear" />,
				}}
			/>
		</Tab.Navigator>
	);
}
