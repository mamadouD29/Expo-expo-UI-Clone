import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { EmIcons } from "../../components/shared/EmIcons";
import { globaleStyles } from "../../styles/globalStyles";
import { AppInfo, ThemeOptions } from "../../components/ui/Settings";

export default function SettingsScreen() {
	const [theme, toggleTheme] = useState<number>(1);
	const [info, setInfo] = useState(0);

	const themeHandler = (id: number) => {
		if (id < 1 || id > 3) return;
		toggleTheme(id);
	};

	const appInfoHandler = (id: number) => {};

	return (
		<ScrollView
			style={[globaleStyles.container, styles.container]}
			contentContainerStyle={[{ paddingBottom: 20 }]}
		>
			<View
				style={[
					globaleStyles.hCtr,
					{ padding: 10, justifyContent: "flex-start" },
				]}
			>
				<Text style={[styles.title]}>Theme</Text>
			</View>

			<View style={[styles.devCtr]}>
				<ThemeOptions theme={theme} themeHandler={themeHandler} />
			</View>
			<View style={[globaleStyles.vCtr, { padding: 10 }]}>
				<Text>
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
				<Text style={[styles.title]}>App Info</Text>
			</View>

			<View style={[styles.devCtr]}>
				<AppInfo appInfoHandler={appInfoHandler} />
			</View>

			<View
				style={[
					globaleStyles.hCtr,
					{ padding: 10, justifyContent: "flex-start" },
				]}
			>
				<Text style={[styles.title]}>Delete Account</Text>
			</View>

			<View style={[styles.devCtr, styles.devDel]}>
				<View style={[styles.delCtr]}>
					<EmIcons title="Trash" />
					<Text>Delete your account</Text>
				</View>

				<View style={[]}>
					<Text>
						This action is irreversible. It ill delete your personal
						accounts, and activity.
					</Text>
				</View>

				<View style={[styles.btnCtr]}>
					<Pressable
						style={({ pressed }) => [
							styles.btn,
							{
								opacity: pressed ? 0.3 : 1,
								justifyContent: "flex-end",
							},
						]}
					>
						<Text>Delete Account</Text>
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
		padding: 10,
		borderColor: "#a3a3a3",
	},
	btn: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: 100,
		padding: 5,
		borderWidth: 1,
		borderRadius: 10,
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
