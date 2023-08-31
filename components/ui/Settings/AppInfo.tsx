import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globaleStyles } from "../../../styles/globalStyles";

interface AppInfoProps {
	appInfoHandler: (id: number) => void;
}

export function AppInfo({ appInfoHandler }: AppInfoProps) {
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
					<Text style={[styles.title]}>Device ID</Text>
					<Text>f23a-fbfd</Text>
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
					<Text style={[styles.title]}>Client Version</Text>
					<Text>f23a-fbfd</Text>
				</Pressable>
			</View>
			<View style={[styles.btnCtr]}>
				<Pressable
					onPress={() => appInfoHandler(3)}
					style={({ pressed }) => [
						styles.btn,
						{ opacity: pressed ? 0.3 : 1 },
					]}
				>
					<Text style={[styles.title]}>Supported SDKs</Text>
					<Text>f23a-fbfd</Text>
				</Pressable>
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
