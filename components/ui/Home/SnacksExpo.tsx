import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { globaleStyles } from "../../../styles/globalStyles";
import { EmIcons } from "../../shared/EmIcons";

export function SnacksExpo() {
	return (
		<>
			<View style={[styles.btnCtr]}>
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
							<Text style={[styles.pTitle]}>Tetris</Text>
							<Text numberOfLines={1} ellipsizeMode="tail">
								Tetris is a puzzle video game
							</Text>
							<Text>SDK 48</Text>
						</View>
					</View>
					<EmIcons title="Right" />
				</Pressable>
			</View>
			
			<View style={[styles.btnCtr]}>
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
						<View style={[globaleStyles.vCtr]}>
							<Text style={[styles.pTitle]}>Stopwatch</Text>
							<Text numberOfLines={1} ellipsizeMode="tail">
								Stopwatch
							</Text>
							<Text>SDK 48</Text>
						</View>
					</View>
					<EmIcons title="Right" />
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
		borderColor: "#e5e5e5",
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
