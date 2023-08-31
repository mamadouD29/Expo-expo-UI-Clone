import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { globaleStyles } from "../../styles/globalStyles";
import { themeMode } from "../../services/utils/themeMode";

interface ModalMsgProps {
	option: boolean;
	display: (id: number) => void;
	title?: string;
	msg?: string;
}

export default function ModalMsg({
	display,
	option,
	title,
	msg,
}: ModalMsgProps) {
	const { themeContainer, themeText, ThemeContent, themeBcolor } =
		themeMode();
	return (
		<Modal isVisible={option}>
			<View
				style={[
					globaleStyles.container,
					themeContainer,
					// styles.container,
					styles.modal,
				]}
			>
				<View style={[{ backgroundColor: "#e5e5e5", padding: 20 }]}>
					<View style={[globaleStyles.vCtr, { gap: 10 }]}>
						{title && (
							<Text style={[styles.pTitle]}>
								Troubleshooting
							</Text>
						)}
						{msg && (
							<View style={[globaleStyles.hCtr]}>
								<Text style={[]} numberOfLines={10}>
									{msg}
								</Text>
							</View>
						)}
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
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		gap: 10,
	},
	modal: {
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		backgroundColor: "transparent",
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
	pTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
