import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen } from "../../screens/main";
import HomeStack from "../stacks/HomeStack";
import SettingsStack from "../stacks/SettingsStack";
import { EmIcons } from "../../components/shared/EmIcons";
import { Text } from "react-native";
import { themeMode } from "../../services/utils/themeMode";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
	const { themeContainer, ThemeContent, themeText } = themeMode();
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarStyle: themeContainer,
				headerShown: false,
				tabBarActiveBackgroundColor: ThemeContent.backgroundColor,
				tabBarLabel: ({ focused }) =>
					focused ? <Text style={[themeText]}>{route.name}</Text> : null,
			})}
		>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarIcon: () => (
						<EmIcons color={themeText.color} title="Home" />
					),
					//    tabBarShowLabel: on clik
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsStack}
				options={{
					tabBarIcon: () => (
						<EmIcons color={themeText.color} title="Gear" />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
