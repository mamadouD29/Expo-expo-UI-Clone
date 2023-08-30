import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProjectsExpo } from "../../components/ui/Home/index";

export default function ProjectsScreen() {
	return (
		<ScrollView style={[styles.devAndPrCtr]}>
			<ProjectsExpo />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	devAndPrCtr: {
		backgroundColor: "#fafaf9",
		borderRadius: 5,
	},
});
