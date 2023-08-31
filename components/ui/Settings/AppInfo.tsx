import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globaleStyles } from "../../../styles/globalStyles";
import { themeMode } from "../../../services/utils/themeMode";

interface AppInfoProps {
	appInfoHandler: (id: number) => void;
}

export function AppInfo({ appInfoHandler }: AppInfoProps) {
	const { themeText, themeBcolor } = themeMode();
	return (
		<>
			<View style={[styles.btnCtr, { borderTopWidth: 0 }]}>
				<Pressable
					onPress={() => appInfoHandler(1)}
					style={({ pressed }) => [
						styles.btn,
						{ opacity: pressed ? 0.3 : 1 },
					]}
				>
					<Text style={[themeText, styles.title]}>Device ID</Text>
					<Text style={[themeText, styles.title]}>551a-9023</Text>
				</Pressable>
			</View>
			<View style={[styles.btnCtr]}>
				<Pressable
					onPress={() => appInfoHandler(2)}
					style={({ pressed }) => [
						styles.btn,
						{ opacity: pressed ? 0.3 : 1 },
					]}
				>
					<Text style={[themeText, styles.title]}>
						Client Version
					</Text>
					<Text style={[themeText, styles.title]}>2.93.3</Text>
				</Pressable>
			</View>
			<View
				style={[
					globaleStyles.hCtr,
					themeBcolor,
					{
						justifyContent: "space-between",
						paddingHorizontal: 10,
						paddingVertical: 15,
						borderTopWidth: 1,
					},
				]}
			>
				<Text style={[themeText, styles.title]}>Supported SDKs</Text>
				<Text style={[themeText, styles.title]}>SDKs: 47, 48, 49</Text>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	dev: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: 10,
	},
	btnCtr: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		padding: 10,
		borderTopWidth: 1,
		borderColor: "#a3a3a3",
	},
	btn: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: 100,
		flexGrow: 1,
		padding: 5,
	},
	title: {
		fontWeight: "bold",
	},
});
