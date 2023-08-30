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

interface navigationRouteProps {
	navigation: any;
	route: any;
}

export default function HomeScreen({ navigation }: navigationRouteProps) {
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
			style={[globaleStyles.container]}
			contentContainerStyle={[{ paddingBottom: 40, gap: 10 }]}
		>
			<Modal isVisible={option === 3}>
				<View
					style={[
						globaleStyles.container,
						styles.container,
						styles.modal,
					]}
				>
					<View style={[{ backgroundColor: "#e5e5e5", padding: 20 }]}>
						<View style={[globaleStyles.vCtr, { gap: 10 }]}>
							<Text style={[styles.pTitle]}>Troubleshooting</Text>
							<View style={[globaleStyles.hCtr]}>
								<Text numberOfLines={10}>
									{instruction.helps}
								</Text>
							</View>
						</View>
						<View
							style={[
								styles.btnCtr,
								{ borderWidth: 0, borderColor: "transparent" },
							]}
						>
							<Pressable
								onPress={() => display(0)}
								style={({ pressed }) => [
									styles.btn,
									{
										opacity: pressed ? 0.3 : 1,
										justifyContent: "flex-end",
										borderWidth: 0,
									},
								]}
							>
								<Text>OK</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
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
					<Text>Development servers</Text>
				</View>
				<Text onPress={() => display(5)}>HELP</Text>
			</View>

			<View style={[styles.devAndPrCtr]}>
				<View style={[styles.dev, { padding: 10 }]}>
					<Text numberOfLines={1} ellipsizeMode="tail">
						Start a local development server with:
					</Text>
					<View
						style={[
							styles.btnCtr,
							styles.startCtr,
							{ borderTopWidth: 0 },
						]}
					>
						<Pressable
							style={({ pressed }) => [
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text>expo start</Text>
						</Pressable>
					</View>
					<Text>Select the local server when it appears here.</Text>
				</View>

				<View style={[styles.dev, styles.btnCtr]}>
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
						<EmIcons title="Right" />
						<Text>Enter URL manually</Text>
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
								style={[styles.input]}
							/>
						</View>
						<View
							style={[
								styles.btnCtr,
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
									style={[styles.seeAll, { color: "white" }]}
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
						<EmIcons title="Qr" />
						<Text>Scan QR code</Text>
					</Pressable>
				</View>
			</View>
			<View style={[styles.titleCtr]}>
				<Text>Projects</Text>
			</View>
			<View style={[styles.devAndPrCtr]}>
				<ProjectsExpo />
				<View style={[styles.btnCtr]}>
					<Pressable
						onPress={() => display(3)}
						style={({ pressed }) => [
							styles.btn,
							{ opacity: pressed ? 0.3 : 1, borderWidth: 0 },
						]}
					>
						<Text style={[styles.seeAll]}>See all projects</Text>
					</Pressable>
				</View>
			</View>

			<View style={[styles.titleCtr]}>
				<Text>Snacks</Text>
			</View>
			<View style={[styles.devAndPrCtr]}>
				<SnacksExpo />
				<View style={[styles.btnCtr]}>
					<Pressable
						onPress={() => display(4)}
						style={({ pressed }) => [
							styles.btn,
							{ opacity: pressed ? 0.3 : 1, borderWidth: 0 },
						]}
					>
						<Text style={[styles.seeAll]}>See all Snacks</Text>
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
		borderColor: "#a3a3a3",
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
		backgroundColor: "#e5e5e5",
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

