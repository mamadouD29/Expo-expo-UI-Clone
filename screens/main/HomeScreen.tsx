import {
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { globaleStyles } from "../../styles/globalStyles";
import { EmIcons } from "../../components/shared/EmIcons";
import { ProjectsExpo } from "../../components/ui/Home/index";
import { SnacksExpo } from "../../components/ui/Home/SnacksExpo";
import instruction from "../../services/utils/instructions.json";
import Modal from "react-native-modal";

import { NavigationAndRouteProps } from "../../services/utils/NavigationAndRouteProps";
import ModalMsg from "../../components/shared/ModalMsg";
import { themeMode } from "../../services/utils/themeMode";

export default function HomeScreen({ navigation }: NavigationAndRouteProps) {
	const { themeContainer, themeText, themeContent, themeBcolor } =
		themeMode();
	const [option, setOption] = useState<number>(0);
	const [manual, setManual] = useState<boolean>(false);
	const [qr, setQr] = useState<boolean>(false);

	const display = (id: number) => {
		if (id === 0) setOption(id);
		if (id === 1) setOption(id);
		if (id === 2) setOption(id);

		if (id === 3) {
			navigation.navigate("Projects");
		}
		if (id === 4) {
			navigation.navigate("Snacks");
		}
		if (id === 5) {
			setOption(3);
		}
	};

	const displayManual = () => {
		setManual((prev) => !prev);
	};
	return (
		<ScrollView
			style={[globaleStyles.container, themeContainer]}
			contentContainerStyle={[{ paddingBottom: 40, gap: 10 }]}
		>
			<ModalMsg
				option={option === 3}
				display={display}
				title="Troubleshooting"
				msg={instruction.helps}
			/>

			<View
				style={[
					globaleStyles.hCtr,
					{ justifyContent: "space-between" },
				]}
			>
				<View style={[globaleStyles.hCtr]}>
					<View style={[globaleStyles.hCtr, styles.dol]}>
						<Text style={[{ color: "#166534" }]}>$-</Text>
					</View>
					<Text style={[themeText]}>Development servers</Text>
				</View>
				<Text style={[themeText]} onPress={() => display(5)}>
					HELP
				</Text>
			</View>

			<View style={[styles.devAndPrCtr, themeContent, themeBcolor]}>
				<View style={[styles.dev, { padding: 10 }]}>
					<Text
						style={[themeText]}
						numberOfLines={1}
						ellipsizeMode="tail"
					>
						Start a local development server with:
					</Text>
					<View
						style={[
							styles.btnCtr,
							styles.startCtr,
							themeContainer,
							{ borderTopWidth: 0 },
						]}
					>
						<Pressable
							style={({ pressed }) => [
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text style={[themeText]}>expo start</Text>
						</Pressable>
					</View>
					<Text style={[themeText]}>
						Select the local server when it appears here.
					</Text>
				</View>

				<View style={[styles.dev, styles.btnCtr, themeContent]}>
					<Pressable
						onPress={displayManual}
						style={({ pressed }) => [
							styles.btn,
							styles.devOne,
							{
								opacity: pressed ? 0.3 : 1,
							},
						]}
					>
						<EmIcons color={themeText.color} title="Right" />
						<Text style={[themeText]}>Enter URL manually</Text>
					</Pressable>
				</View>

				{manual && (
					<View
						style={[
							globaleStyles.vCtr,
							{
								paddingHorizontal: 20,
								paddingVertical: 10,
								gap: 5,
								// borderColor: "#a3a3a3",
							},
						]}
					>
						<View style={[globaleStyles.hCtr]}>
							<TextInput
								placeholder="exp://"
								style={[styles.input, themeText]}
								placeholderTextColor={themeText.color}
							/>
						</View>
						<View
							style={[
								styles.btnCtr,
								themeContent,
								{
									borderWidth: 1,
									backgroundColor: "#27272a",
									borderRadius: 7,
								},
							]}
						>
							<Pressable
								style={({ pressed }) => [
									styles.btn,
									{
										opacity: pressed ? 0.3 : 1,
										borderWidth: 0,
									},
								]}
							>
								<Text
									style={[
										styles.seeAll,
										themeText,
										{ color: "white" },
									]}
								>
									Connect
								</Text>
							</Pressable>
						</View>
					</View>
				)}

				<View style={[styles.dev, styles.btnCtr]}>
					<Pressable
						style={({ pressed }) => [
							styles.btn,
							styles.devOne,
							{ opacity: pressed ? 0.3 : 1 },
						]}
					>
						<EmIcons color={themeText.color} title="Qr" />
						<Text style={[themeText]}>Scan QR code</Text>
					</Pressable>
				</View>
			</View>
			<View style={[styles.titleCtr]}>
				<Text style={[themeText]}>Projects</Text>
			</View>
			<View style={[styles.devAndPrCtr, themeContent, themeBcolor]}>
				<ProjectsExpo />
				<View style={[styles.btnCtr]}>
					<Pressable
						onPress={() => display(3)}
						style={({ pressed }) => [
							styles.btn,
							{ opacity: pressed ? 0.3 : 1, borderWidth: 0 },
						]}
					>
						<Text style={[styles.seeAll, themeText]}>
							See all projects
						</Text>
					</Pressable>
				</View>
			</View>

			<View style={[styles.titleCtr]}>
				<Text style={[themeText]}>Snacks</Text>
			</View>
			<View style={[styles.devAndPrCtr, themeContent, themeBcolor]}>
				<SnacksExpo />
				<View style={[styles.btnCtr]}>
					<Pressable
						onPress={() => display(4)}
						style={({ pressed }) => [
							styles.btn,
							{ opacity: pressed ? 0.3 : 1, borderWidth: 0 },
						]}
					>
						<Text style={[styles.seeAll, themeText]}>
							See all Snacks
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
		backgroundColor: "#e5e5e5",
	},

	modal: {
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		backgroundColor: "transparent",
	},
	dol: {
		width: 20,
		borderRadius: 5,
		backgroundColor: "#262626",
	},
	devAndPrCtr: {
		backgroundColor: "#fafaf9",
		borderRadius: 10,
		borderWidth: 1,
		// borderColor: "#a3a3a3",
		// padding: 5
	},
	dev: {
		gap: 5,
	},
	devOne: {
		justifyContent: "flex-start",
		borderWidth: 0,
	},
	btnCtr: {
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		borderTopWidth: 1,
		// borderColor: "#e5e5e5",
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
	startCtr: {
		// backgroundColor: "#e5e5e5",
		borderRadius: 5,
	},
	prjtCtr: {
		backgroundColor: "#fafaf9",
		borderRadius: 5,
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
	seeAll: {
		fontWeight: "bold",
	},
	titleCtr: {
		paddingVertical: 10,
	},
	input: {
		borderWidth: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		width: 100,
		flexGrow: 1,
		flexShrink: 1,
		padding: 5,
		borderRadius: 10,
		borderColor: "#a3a3a3",
	},
});
