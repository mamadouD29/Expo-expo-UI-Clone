import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { EmIcons } from "./EmIcons";
import { globaleStyles } from "../../styles/globalStyles";
import { themeMode } from "../../services/utils/themeMode";
import { prefCtxt } from "../../services/context/prefContext";

interface HeaderProps {
	title: string;
	user?: boolean;
	img?: boolean;
	login?: string;
	signUpAndLogin: (action: string) => void;
}

export default function Header({
	title,
	user,
	img,
	login,
	signUpAndLogin,
}: HeaderProps) {
	const { userData } = prefCtxt();
	// const [username, setUsername] = useState<string>("");

	const { themeText, themeBcolor } = themeMode();
	console.log("header: ", userData);

	return (
		<View style={[globaleStyles.container]}>
			<View
				style={[
					globaleStyles.hCtr,
					styles.container,
					{ justifyContent: "space-between" },
				]}
			>
				<View style={[globaleStyles.hCtr]}>
					{img && (
						<Image
							source={require("../../assets/img/expoLogo.png")}
							style={[styles.logo]}
						/>
					)}
					<Text
						style={[
							themeText,
							{ fontWeight: "bold", fontSize: 20 },
						]}
					>
						{title}
					</Text>
				</View>
				{user && userData.username && (
					<Pressable
						onPress={() => signUpAndLogin("logout")}
						style={({ pressed }) => [
							globaleStyles.hCtr,
							styles.name,
							{ opacity: pressed ? 0.3 : 1 },
						]}
					>
						<Text style={[{ fontWeight: "bold" }]}>
							{userData?.username.toUpperCase()[0]}
						</Text>
					</Pressable>
				)}
				{login && (
					<View style={[styles.btnCtr]}>
						<Pressable
							onPress={() => signUpAndLogin("login")}
							style={({ pressed }) => [
								styles.btn,
								themeBcolor,
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text style={[themeText]}>{login}</Text>
						</Pressable>
					</View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingRight: 20,
	},
	name: {
		width: 36,
		height: 36,
		borderWidth: 1,
		backgroundColor: "#fed7aa",
		borderRadius: 100,
	},
	logo: {
		width: 16,
		height: 16,
		resizeMode: "contain",
	},
	btnCtr: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
	},
	btn: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		gap: 5,
		padding: 5,
		borderRadius: 5,
	},
});
