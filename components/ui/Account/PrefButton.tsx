import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeMode } from "../../../services/utils/themeMode";
import { EmIcons } from "../../shared/EmIcons";
import { globaleStyles } from "../../../styles/globalStyles";

interface PrefButtonProps {
	prefHandler: (title: string) => void;
	product: boolean;
	resources: boolean;
	company: boolean;
	legal: boolean;
	item: any;
}

export function PrefButton({
	prefHandler,
	product,
	resources,
	company,
	legal,
	item,
}: PrefButtonProps) {
	const { themeText } = themeMode();
	return (
		<>
			<View style={[globaleStyles.hCtr]}>
				<Pressable
					onPress={() => prefHandler(item.title)}
					style={({ pressed }) => [
						styles.btn,
						{
							opacity: pressed ? 0.3 : 1,
							justifyContent: "space-between",
						},
					]}
				>
					<Text style={[themeText]}>{item.title}</Text>
					{item.title === "Product" && (
						<Text
							style={[
								{
									transform: [
										{
											rotate: product ? "45deg" : "0deg",
										},
									],
								},
							]}
						>
							<EmIcons title="Add" color={themeText.color} />
						</Text>
					)}
					{item.title === "Resources" && (
						<Text
							style={[
								{
									transform: [
										{
											rotate: resources
												? "45deg"
												: "0deg",
										},
									],
								},
							]}
						>
							<EmIcons title="Add" color={themeText.color} />
						</Text>
					)}
					{item.title === "Company" && (
						<Text
							style={[
								{
									transform: [
										{
											rotate: company ? "45deg" : "0deg",
										},
									],
								},
							]}
						>
							<EmIcons title="Add" color={themeText.color} />
						</Text>
					)}
					{item.title === "Legal" && (
						<Text
							style={[
								{
									transform: [
										{
											rotate: legal ? "45deg" : "0deg",
										},
									],
								},
							]}
						>
							<EmIcons title="Add" color={themeText.color} />
						</Text>
					)}
				</Pressable>
			</View>

			<View>
				{item.title === "Product" &&
					product &&
					item.subs &&
					item.subs?.map(
						(
							item: {
								link: string;
								subIcon: boolean;
							},
							id: number,
						) => {
							return (
								<Pressable
									key={id}
									style={({ pressed }) => [
										globaleStyles.hCtr,
										{
											opacity: pressed ? 0.3 : 1,
											justifyContent: "flex-start",
											paddingHorizontal: 20,
										},
									]}
								>
									<Text style={[themeText]}>{item.link}</Text>
									{item.subIcon && (
										<Text style={[themeText]}>
											<EmIcons
												title="Upright"
												color={themeText.color}
											/>
										</Text>
									)}
								</Pressable>
							);
						},
					)}
			</View>
			<View>
				{item.title === "Resources" &&
					resources &&
					item.subs &&
					item.subs?.map(
						(
							item: {
								link: string;
								subIcon: boolean;
							},
							id: number,
						) => {
							return (
								<Pressable
									key={id}
									style={({ pressed }) => [
										globaleStyles.hCtr,
										{
											opacity: pressed ? 0.3 : 1,
											justifyContent: "flex-start",
											paddingHorizontal: 20,
										},
									]}
								>
									<Text style={[themeText]}>{item.link}</Text>
									{item.subIcon && (
										<Text style={[themeText]}>
											<EmIcons
												title="Upright"
												color={themeText.color}
											/>
										</Text>
									)}
								</Pressable>
							);
						},
					)}
			</View>
			<View>
				{item.title === "Company" &&
					company &&
					item.subs &&
					item.subs?.map(
						(
							item: {
								link: string;
								subIcon: boolean;
							},
							id: number,
						) => {
							return (
								<Pressable
									key={id}
									style={({ pressed }) => [
										globaleStyles.hCtr,
										{
											opacity: pressed ? 0.3 : 1,
											justifyContent: "flex-start",
											paddingHorizontal: 20,
										},
									]}
								>
									<Text style={[themeText]}>{item.link}</Text>
									{item.subIcon && (
										<Text style={[themeText]}>
											<EmIcons
												title="Upright"
												color={themeText.color}
											/>
										</Text>
									)}
								</Pressable>
							);
						},
					)}
			</View>
			<View>
				{item.title === "Legal" &&
					legal &&
					item.subs &&
					item.subs?.map(
						(
							item: {
								link: string;
								subIcon: boolean;
							},
							id: number,
						) => {
							return (
								<Pressable
									key={id}
									style={({ pressed }) => [
										globaleStyles.hCtr,
										{
											opacity: pressed ? 0.3 : 1,
											justifyContent: "flex-start",
											paddingHorizontal: 20,
										},
									]}
								>
									<Text style={[themeText]}>{item.link}</Text>
									{item.subIcon && (
										<Text style={[themeText]}>
											<EmIcons
												title="Upright"
												color={themeText.color}
											/>
										</Text>
									)}
								</Pressable>
							);
						},
					)}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	btn: {
		padding: 10,
		width: 100,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		flexShrink: 1,
		gap: 5,
	},
});
