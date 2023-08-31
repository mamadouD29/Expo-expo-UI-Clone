import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { EmIcons } from "./EmIcons";
import { globaleStyles } from "../../styles/globalStyles";

interface HeaderProps {
	title: string;
	user?: string;
	img?: boolean;
}

export default function Header({ title, user, img }: HeaderProps) {
	const userI = user?.toUpperCase().charAt(0);
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
					<Text style={[{ fontWeight: "bold" }]}>{title}</Text>
				</View>
				{userI && (
					<View
						style={[
							globaleStyles.hCtr,
							styles.name,
							// { borderRadius: 50 },
						]}
					>
						<Text style={[{ fontWeight: "bold" }]}>{userI}</Text>
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
});
