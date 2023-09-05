import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { globaleStyles } from "../../../styles/globalStyles";
import { EmIcons } from "../../shared/EmIcons";
import { themeMode } from "../../../services/utils/themeMode";

export function SnacksExpo() {
	const { ThemeContent, themeText, themeBcolor } = themeMode();
	return (
		<>
			<View style={[styles.btnCtr,themeBcolor, {borderTopWidth: 0}]}>
				<Pressable
					style={({ pressed }) => [
						styles.btn,
						{
							opacity: pressed ? 0.3 : 1,
							borderWidth: 0,
							justifyContent: "space-between",
						},
					]}
				>
					<View style={[globaleStyles.hCtr]}>
						<Image
							source={require("../../../assets/img/tetris.png")}
							style={[styles.logo]}
						/>
						<View style={[globaleStyles.vCtr]}>
							<Text style={[styles.pTitle, themeText]}>
								Tetris
							</Text>
							<Text
								style={[themeText]}
								numberOfLines={1}
								ellipsizeMode="tail"
							>
								Tetris is a puzzle video game
							</Text>
							<Text style={[themeText]}>SDK 48</Text>
						</View>
					</View>
					<EmIcons color={themeText.color} title="Right" />
				</Pressable>
			</View>

			<View style={[styles.btnCtr, themeBcolor]}>
				<Pressable
					style={({ pressed }) => [
						styles.btn,
						{
							opacity: pressed ? 0.3 : 1,
							borderWidth: 0,
							justifyContent: "space-between",
						},
					]}
				>
					<View style={[globaleStyles.hCtr]}>
						<Image
							source={require("../../../assets/img/stopwatch.png")}
							style={[styles.logo]}
						/>
						<View style={[globaleStyles.vCtr, themeBcolor]}>
							<Text style={[styles.pTitle, themeText]}>
								Stopwatch
							</Text>
							<Text
								style={[themeText]}
								numberOfLines={1}
								ellipsizeMode="tail"
							>
								Stopwatch
							</Text>
							<Text style={[themeText]}>SDK 48</Text>
						</View>
					</View>
					<EmIcons color={themeText.color} title="Right" />
				</Pressable>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		borderTopWidth: 1,
		// borderRadius: 5,
		
		// borderColor: "#e5e5e5",
	},
	btn: {
		width: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		flexGrow: 1,
		borderWidth: 1,
	},
	logo: {
		width: 64,
		height: 64,
		resizeMode: "contain",
	},
	pTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
