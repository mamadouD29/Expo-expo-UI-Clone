import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globaleStyles } from "../../styles/globalStyles";
import { themeMode } from "../../services/utils/themeMode";
import { prefCtxt } from "../../services/context/prefContext";
import { NavigationAndRouteProps } from "../../services/utils/NavigationAndRouteProps";
import { EmIcons } from "../../components/shared/EmIcons";

export default function AccountScreen({
	navigation,
	route,
}: NavigationAndRouteProps) {
	const { action } = route.params;
	const { theme, userData } = prefCtxt();
	const { themeText, themeContainer, themeContent, themeBcolor } =
		themeMode();
	console.log("theme: ", theme);

	const LoginHandler = () => {
		navigation.navigate("LoginScreen");
	};
	const signUpHandler = () => {
		navigation.navigate("SignUpScreen");
	};
	return (
		<View style={[globaleStyles.container, themeContainer, { padding: 0 }]}>
			{action === "logout" ? (
				<View style={[styles.devCtr, themeBcolor]}>
					<Text style={[themeText]}>Log Out</Text>
					<View
						style={[
							globaleStyles.hCtr,
							styles.btnCtr,
							{ backgroundColor: themeText.color },
						]}
					>
						<Pressable
							onPress={signUpHandler}
							style={({ pressed }) => [
								styles.btn,
								themeBcolor,
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text
								style={[
									styles.title,
									{ color: themeContent.backgroundColor },
								]}
							>
								Log Out
							</Text>
						</Pressable>
					</View>
					<Text style={[themeText]}>Switch Account</Text>
					<View style={[globaleStyles.hCtr, themeContent]}>
						<Pressable
							onPress={signUpHandler}
							style={({ pressed }) => [
								globaleStyles.hCtr,

								styles.btnCtr,
								styles.btn,
								themeBcolor,
								{
									opacity: pressed ? 0.3 : 1,
									justifyContent: "space-between",
								},
							]}
						>
							<View style={[globaleStyles.hCtr]}>
								<View style={[globaleStyles.hCtr, styles.name]}>
									<Text>
										{userData.username
											.toUpperCase()
											.charAt(0)}
									</Text>
								</View>
								<View>
									<Text
										style={[
											themeText,
											styles.title,
											{ fontSize: 22 },
										]}
									>
										{userData.username}
									</Text>
									<Text style={[themeText]}>
										{userData.username}
									</Text>
								</View>
							</View>
							<Text>
								<EmIcons title="Check" color="green" />
							</Text>
						</Pressable>
					</View>
				</View>
			) : (
				<View style={[styles.devCtr, themeContent, themeBcolor]}>
					<View
						style={[
							globaleStyles.hCtr,
							{ justifyContent: "flex-start" },
						]}
					>
						<Text style={[themeText]}>
							Log in or create an account to access your projects,
							view local development server, and more.
						</Text>
					</View>
					<View
						style={[
							globaleStyles.hCtr,
							styles.btnCtr,
							{ backgroundColor: themeText.color },
						]}
					>
						<Pressable
							onPress={LoginHandler}
							style={({ pressed }) => [
								styles.btn,
								themeBcolor,
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text
								style={[
									styles.title,
									{
										color:
											theme === 3 ? "#002851" : "#f5f5f4",
									},
								]}
							>
								Log In
							</Text>
						</Pressable>
					</View>
					<View
						style={[
							globaleStyles.hCtr,
							styles.btnCtr,
							themeContainer,
						]}
					>
						<Pressable
							onPress={signUpHandler}
							style={({ pressed }) => [
								styles.btn,
								themeBcolor,
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text style={[themeText, styles.title]}>
								Sign Up
							</Text>
						</Pressable>
					</View>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	devCtr: {
		padding: 10,
		gap: 10,
		borderRadius: 5,
	},
	btnCtr: {
		// padding: 10,
		borderWidth: 1,
		borderRadius: 5,
	},
	btn: {
		padding: 10,
		width: 100,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		flexShrink: 1,
	},
	title: {
		fontWeight: "bold",
	},
	name: {
		width: 36,
		height: 36,
		borderWidth: 1,
		backgroundColor: "#fed7aa",
		borderRadius: 100,
	},
});
