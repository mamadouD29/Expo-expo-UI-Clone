import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Alert,
} from "react-native";
import React, { useState } from "react";
import { EmIcons } from "../../components/shared/EmIcons";
import { globaleStyles } from "../../styles/globalStyles";
import { AppInfo, ThemeOptions } from "../../components/ui/Settings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationAndRouteProps } from "../../services/utils/NavigationAndRouteProps";
import { themeMode } from "../../services/utils/themeMode";
import ModalMsg from "../../components/shared/ModalMsg";

const clipMsg = "The device ID has been copied to your clipboard.";

export default function SettingsScreen({
	navigation,
}: NavigationAndRouteProps) {
	const [info, setInfo] = useState(0);
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();

	const closeModal = (id: number) => {
		setInfo(0);
	};

	const appInfoHandler = (id: number) => {
		setInfo(id);
	};

	const delHandler = async () => {
		Alert.alert("Delete account", "Are you sure", [
			{ text: "No", onPress: () => {}, style: "cancel" },
			{
				text: "Yes",
				onPress: async () => {
					// AsyncStorage.removeItem()
					// navigation.navigate("Login");
				},
			},
		]);
	};

	return (
		<ScrollView
			style={[globaleStyles.container, themeContainer, styles.container]}
			contentContainerStyle={[{ paddingBottom: 20 }]}
		>
			<ModalMsg
				option={info === 1 || info === 2}
				display={closeModal}
				title="ClipBoard"
				msg={clipMsg}
			/>
			<View
				style={[
					globaleStyles.hCtr,
					{ padding: 10, justifyContent: "flex-start" },
				]}
			>
				<Text style={[themeText, styles.title]}>Theme</Text>
			</View>

			<View style={[styles.devCtr, themeContent]}>
				<ThemeOptions />
			</View>
			<View style={[globaleStyles.vCtr, { padding: 10 }]}>
				<Text style={[themeText]}>
					Automatic is only supported on operating systems that allow
					you to control the system-wide color theme.
				</Text>
			</View>
			<View
				style={[
					globaleStyles.hCtr,
					{ padding: 10, justifyContent: "flex-start" },
				]}
			>
				<Text style={[themeText, styles.title]}>App Info</Text>
			</View>

			<View style={[styles.devCtr, themeContent]}>
				<AppInfo appInfoHandler={appInfoHandler} />
			</View>

			<View
				style={[
					globaleStyles.hCtr,
					{ padding: 10, justifyContent: "flex-start" },
				]}
			>
				<Text style={[themeText, styles.title]}>Delete Account</Text>
			</View>

			<View style={[styles.devCtr, themeContent, styles.devDel]}>
				<View style={[styles.delCtr]}>
					<EmIcons title="Trash" color={themeText.color} />
					<Text style={[themeText, styles.title]}>
						Delete your account
					</Text>
				</View>

				<View style={[]}>
					<Text style={[themeText, styles.title]}>
						This action is irreversible. It ill delete your personal
						accounts, and activity.
					</Text>
				</View>

				<View style={[styles.btnCtr]}>
					<Pressable
						onPress={delHandler}
						style={({ pressed }) => [
							styles.btn,
							themeBcolor,
							{
								opacity: pressed ? 0.3 : 1,
							},
						]}
					>
						<Text style={[themeText, styles.title]}>
							Delete Account
						</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		gap: 10,
	},
	devCtr: {
		backgroundColor: "#fafaf9",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#a3a3a3",
		gap: 5,
	},
	title: {
		fontWeight: "bold",
	},
	btnCtr: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		// borderWidth: 1,
		padding: 10,
		borderColor: "#a3a3a3",
	},
	btn: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: 120,
		padding: 10,
		// borderWidth: 1,
		borderRadius: 5,
		// flexGrow: 1,
		backgroundColor: "#fb7185",
	},
	delCtr: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	devDel: {
		padding: 10,
	},
});
