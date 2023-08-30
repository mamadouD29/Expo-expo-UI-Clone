import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProjectsExpo } from "../../components/ui/Home/index";
import { SnacksExpo } from "../../components/ui/Home/SnacksExpo";

export default function SnacksScreen() {
	return (
		<ScrollView style={[styles.devAndPrCtr]}>
			<SnacksExpo />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	devAndPrCtr: {
		backgroundColor: "#fafaf9",
		borderRadius: 5,
	},
});
