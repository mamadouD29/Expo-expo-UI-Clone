import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

interface EmIconsProps {
	title: string;
	size?: number;
	color?: string;
}

export function EmIcons({ title, size, color }: EmIconsProps) {
	return (
		<>
			{title === "Right" && (
				<MaterialIcons
					name="chevron-right"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Qr" && (
				<MaterialIcons
					name="qr-code-2"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Home" && (
				<MaterialIcons
					name="home-filled"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Gear" && (
				<FontAwesome
					name="gear"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({});
