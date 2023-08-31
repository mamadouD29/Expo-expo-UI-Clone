import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProjectsExpo } from "../../components/ui/Home/index";
import { SnacksExpo } from "../../components/ui/Home/SnacksExpo";
import { globaleStyles } from "../../styles/globalStyles";
import { themeMode } from "../../services/utils/themeMode";

export default function SnacksScreen() {
	const {themeContainer, themeBcolor} = themeMode();
	return (
		<ScrollView style={[globaleStyles.container,styles.devAndPrCtr,themeContainer]}>
			<SnacksExpo />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	devAndPrCtr: {
		// backgroundColor: "#fafaf9",
		borderRadius: 5,
	},
});
