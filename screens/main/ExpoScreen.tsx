import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { globaleStyles } from "../../styles/globalStyles";
import { themeMode } from "../../services/utils/themeMode";
import ModalMsg from "../../components/shared/ModalMsg";
import instruction from "../../services/utils/instructions.json";
import { EmIcons } from "../../components/shared/EmIcons";

export default function ExpoScreen() {
	const { themeContainer, themeText, themeContent, themeBcolor } =
		themeMode();
	const [option, setOption] = useState<number>(0);
	const [manual, setManual] = useState<boolean>(false);

	const display = (id: number) => {
		setOption(id);
	};

	const displayManual = () => {
		setManual((prev) => !prev);
	};

	return (
		<View
			style={[globaleStyles.container, themeContainer, styles.container]}
		>
			<ModalMsg
				option={option === 5}
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
					<Text style={[themeText]}>
						Press here to sign in to your Expo account and see the
						projects you have recently been working on.
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		gap: 10,
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
	startCtr: {
		// backgroundColor: "#e5e5e5",
		borderRadius: 5,
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
	seeAll: {
		fontWeight: "bold",
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
