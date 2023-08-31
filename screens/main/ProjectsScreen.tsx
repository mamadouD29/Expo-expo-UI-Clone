import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProjectsExpo } from "../../components/ui/Home/index";
import { globaleStyles } from "../../styles/globalStyles";
import { themeMode } from "../../services/utils/themeMode";

export default function ProjectsScreen() {
		const { themeContainer } = themeMode();

	return (
		<ScrollView style={[globaleStyles.container,themeContainer]}>
			<ProjectsExpo />
		</ScrollView>
	);
}

const styles = StyleSheet.create({

});
