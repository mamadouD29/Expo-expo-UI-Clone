import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EmIcons } from "../../shared/EmIcons";
import { globaleStyles } from "../../../styles/globalStyles";

interface ThemeOptionsProps {
	theme: number;
	themeHandler: (id: number) => void;
}

export  function ThemeOptions({
	theme,
	themeHandler,
}: ThemeOptionsProps) {
	return (
		<>
			<View style={[styles.btnCtr, { borderTopWidth: 0 }]}>
				<Pressable
					onPress={() => themeHandler(1)}
					style={({ pressed }) => [
						styles.btn,
						{ opacity: pressed ? 0.3 : 1 },
					]}
				>
					<View style={[styles.dev]}>
						<EmIcons title="Auto" />
						<Text>Automatic</Text>
					</View>
					<View style={[globaleStyles.hCtr, styles.outer]}>
						{theme === 1 && <View style={[styles.inner]}></View>}
					</View>
				</Pressable>
			</View>

			<View style={[styles.btnCtr]}>
				<Pressable
					onPress={() => themeHandler(3)}
					style={({ pressed }) => [
						styles.btn,
						{ opacity: pressed ? 0.3 : 1 },
					]}
				>
					<View style={[styles.dev]}>
						<EmIcons title="Light" />
						<Text>Light</Text>
					</View>
					<View style={[globaleStyles.hCtr, styles.outer]}>
						{theme === 3 && <View style={[styles.inner]}></View>}
					</View>
				</Pressable>
			</View>

			<View style={[styles.btnCtr]}>
				<Pressable
					onPress={() => themeHandler(2)}
					style={({ pressed }) => [
						styles.btn,
						{ opacity: pressed ? 0.3 : 1 },
					]}
				>
					<View style={[styles.dev]}>
						<EmIcons title="Dark" />
						<Text>Dark</Text>
					</View>
					<View style={[globaleStyles.hCtr, styles.outer]}>
						{theme === 2 && <View style={[styles.inner]}></View>}
					</View>
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
	outer: {
		width: 16,
		height: 16,
		borderRadius: 16,
		borderWidth: 1,
		// backgroundColor: "white"
	},
	inner: {
		width: 12,
		height: 12,
		borderRadius: 12,
		backgroundColor: "black",
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
	},
	titleCtr: {
		paddingVertical: 10,
	},
});
