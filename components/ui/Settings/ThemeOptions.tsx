import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EmIcons } from "../../shared/EmIcons";
import { globaleStyles } from "../../../styles/globalStyles";
import { prefCtxt } from "../../../services/context/prefContext";
import { themeMode } from "../../../services/utils/themeMode";

// interface ThemeOptionsProps {
// 	theme: number;
// 	themeHandler: (id: number) => void;
// }

export function ThemeOptions() {
	const { theme, themeHandler } = prefCtxt();
	const { themeText, ThemeContent, themeContainer, themeBcolor } =
		themeMode();
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
						<EmIcons color={themeText.color} title="Auto" />
						<Text style={[themeText]}>Automatic</Text>
					</View>
					<View
						style={[globaleStyles.hCtr, styles.outer, themeBcolor]}
					>
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
						<EmIcons color={themeText.color} title="Light" />
						<Text style={[themeText]}>Light</Text>
					</View>
					<View
						style={[globaleStyles.hCtr, styles.outer, themeBcolor]}
					>
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
						<EmIcons color={themeText.color} title="Dark" />
						<Text style={[themeText]}>Dark</Text>
					</View>
					<View
						style={[globaleStyles.hCtr, styles.outer, themeBcolor]}
					>
						{theme === 2 && (
							<View
								style={[
									styles.inner,
									{ backgroundColor: themeText.color },
								]}
							></View>
						)}
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
		width: 25,
		height: 25,
		borderRadius: 16,
		borderWidth: 1,
		// backgroundColor: "white"
	},
	inner: {
		width: 18,
		height: 18,
		borderRadius: 18,
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
