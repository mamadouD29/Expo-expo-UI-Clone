import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "../../screens/main/HomeScreen";
import {
	HomeScreen,
	ExpoScreen,
	ProjectsScreen,
	SettingsScreen,
	SnacksScreen,
	AccountScreen,
	LoginScreen,
	SignUpScreen,
} from "../../screens/main/index";
import Header from "../../components/shared/Header";
import { themeMode } from "../../services/utils/themeMode";
import { NavigationAndRouteProps } from "../../services/utils/NavigationAndRouteProps";

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }: NavigationAndRouteProps) {
	const { themeContainer, themeText } = themeMode();

	const signUpAndLogin = (action: string) => {
		console.log("Press jaljugai");
		navigation.navigate("AccountScreen", { action });
	};
	return (
		<Stack.Navigator screenOptions={{ headerStyle: themeContainer }}>
			<Stack.Screen
				name="Expo"
				component={ExpoScreen}
				options={{
					headerTitle: () => (
						<Header
							title="Expo Go"
							img={true}
							login="Log In"
							signUpAndLogin={signUpAndLogin}
						/>
					),
				}}
			/>
			<Stack.Screen
				name="AccountScreen"
				component={AccountScreen}
				options={{ title: "Account", headerTintColor: themeText.color }}
			/>

			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{
					headerTitle: () => (
						<Header title="Log In" signUpAndLogin={() => {}} />
					),
					headerTintColor: themeText.color,
				}}
			/>
			<Stack.Screen
				name="SignUpScreen"
				component={SignUpScreen}
				options={{
					headerTitle: () => (
						<Header
							title=""
							img={true}
							signUpAndLogin={() => {}}
						/>
					),
					headerTintColor: themeText.color,
				}}
			/>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerTitle: () => (
						<Header
							title="Expo Go"
							user={true}
							img={true}
							signUpAndLogin={signUpAndLogin}
						/>
					),
					headerBackVisible: false,
					headerTintColor: themeText.color,
				}}
			/>
			<Stack.Screen name="Settings" component={SettingsScreen} />
			<Stack.Screen name="Projects" component={ProjectsScreen} />
			<Stack.Screen name="Snacks" component={SnacksScreen} />
		</Stack.Navigator>
	);
}
