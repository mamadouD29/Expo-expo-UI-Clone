import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeMode } from "../../../services/utils/themeMode";
import { globaleStyles } from "../../../styles/globalStyles";


export function InfoCard() {
	const { themeContainer, themeContent, themeText } = themeMode();
	return (
		<View style={[]}>
			<View style={[globaleStyles.hCtr]}></View>
		</View>
	);
}

const styles = StyleSheet.create({});
