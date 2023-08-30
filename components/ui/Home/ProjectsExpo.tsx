import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { EmIcons } from "../../shared/EmIcons";
import { globaleStyles } from "../../../styles/globalStyles";

export function ProjectsExpo() {
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
							source={require("../../../assets/img/ball.png")}
							style={[styles.logo]}
						/>
						<View style={[globaleStyles.vCtr]}>
							<Text style={[styles.pTitle]}>Soccer</Text>
							<Text numberOfLines={1} ellipsizeMode="tail">
								Univers of soccer
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
							source={require("../../../assets/img/car.png")}
							style={[styles.logo]}
						/>
						<View style={[globaleStyles.vCtr]}>
							<Text style={[styles.pTitle]}>Rent a car</Text>
							<Text numberOfLines={1} ellipsizeMode="tail">
								Cheap car to rent
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
							source={require("../../../assets/img/cure.png")}
							style={[styles.logo]}
						/>
						<View style={[globaleStyles.vCtr]}>
							<Text style={[styles.pTitle]}>Your Pharmacy</Text>
							<Text numberOfLines={1} ellipsizeMode="tail">
								Your phamarcy opned 24/7
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
							source={require("../../../assets/img/repair.png")}
							style={[styles.logo]}
						/>
						<View style={[globaleStyles.vCtr]}>
							<Text style={[styles.pTitle]}>Repair your machine fast</Text>
							<Text numberOfLines={1} ellipsizeMode="tail">
								Your phamarcy opned 24/7
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
		borderColor: "#a3a3a3",
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
