import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome, Entypo, Feather } from "@expo/vector-icons";

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
			{title === "Auto" && (
				<MaterialIcons
					name="brightness-6"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Add" && (
				<MaterialIcons
					name="add"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Dark" && (
				<MaterialIcons
					name="brightness-3"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Light" && (
				<Entypo
					name="light-up"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Check" && (
				<Entypo
					name="check"
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
			{title === "Trash" && (
				<FontAwesome
					name="trash-o"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Upright" && (
				<Feather
					name="arrow-up-right"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({});
