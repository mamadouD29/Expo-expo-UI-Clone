import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { themeMode } from "../../../services/utils/themeMode";
import { globaleStyles } from "../../../styles/globalStyles";
import { EmIcons } from "../../shared/EmIcons";

interface LoginCardProps {
	show: boolean;
	emailUsername: string;
	password: string;
	setEmailUsername: any;
	setPassword: any;
	optionSelected: number;
	loginHandler: () => void;
	showHandler: () => void;
	optionSelectedHandler: (id: number) => void;
}

export function LoginCard({
	show,
	emailUsername,
	password,
	setEmailUsername,
	setPassword,
	optionSelected,
	loginHandler,
	optionSelectedHandler,
	showHandler,
}: LoginCardProps) {
	const { themeContainer, themeContent, themeText, themeBcolor } =
		themeMode();
	return (
		<>
			<View style={[styles.devCtr, themeBcolor]}>
				<View style={[styles.dev]}>
					<Text style={[themeText]}>Email or Username</Text>
					<View
						style={[
							globaleStyles.hCtr,
							styles.inputCtr,
							themeContent,
							themeBcolor,
							{ justifyContent: "flex-start" },
						]}
					>
						<TextInput
							value={emailUsername}
							onChangeText={setEmailUsername}
							style={[styles.input]}
							placeholderTextColor={themeText.color}
						/>
					</View>
					<View
						style={[
							globaleStyles.hCtr,
							{ justifyContent: "space-between" },
						]}
					>
						<Text style={[themeText]}>Password</Text>
						<Pressable
							style={({ pressed }) => [
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text
								style={[
									themeText,
									{
										color: "#0077e6",
										fontWeight: "bold",
									},
								]}
							>
								Forgot password?
							</Text>
						</Pressable>
					</View>
					<View
						style={[
							globaleStyles.hCtr,
							styles.inputCtr,
							themeContent,
							themeBcolor,
							{ justifyContent: "flex-start" },
						]}
					>
						<TextInput
							value={password}
							onChangeText={setPassword}
							style={[styles.input]}
							placeholderTextColor={themeText.color}
							secureTextEntry={show}
						/>
					</View>
					<View
						style={[
							globaleStyles.hCtr,
							styles.btnCtr,
							{ borderWidth: 0 },
						]}
					>
						<Pressable
							onPress={showHandler}
							style={({ pressed }) => [
								styles.btn,
								{
									opacity: pressed ? 0.3 : 1,
									justifyContent: "flex-start",
								},
							]}
						>
							<View
								style={[
									globaleStyles.hCtr,
									styles.showCtr,
									themeBcolor,
									{
										backgroundColor: show
											? themeContent.backgroundColor
											: "#0077e6",
									},
								]}
							>
								{!show && (
									<View
										style={[
											globaleStyles.hCtr,
											styles.show,
											{},
										]}
									>
										<EmIcons
											title="Check"
											color="white"
											size={20}
										/>
									</View>
								)}
							</View>
							<Text style={[themeText]}>Show password</Text>
						</Pressable>
					</View>
					<View
						style={[
							globaleStyles.hCtr,
							themeContent,
							styles.btnCtr,
							{ backgroundColor: "#0077e6" },
						]}
					>
						<Pressable
							onPress={loginHandler}
							style={({ pressed }) => [
								styles.btn,
								themeBcolor,
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text style={[{ color: "white" }]}>Log In</Text>
						</Pressable>
					</View>
				</View>

				<View style={[globaleStyles.hCtr, { alignItems: "center" }]}>
					<View
						style={[
							themeBcolor,
							{ borderTopWidth: 1, flexGrow: 1 },
						]}
					></View>
					<Text style={[themeText]}>Or</Text>
					<View
						style={[
							themeBcolor,
							{ borderTopWidth: 1, flexGrow: 1 },
						]}
					></View>
				</View>
				<View style={[themeBcolor, { padding: 10 }]}>
					<View
						style={[
							globaleStyles.hCtr,
							styles.btnCtr,
							themeContent,
							themeBcolor,
						]}
					>
						<Pressable
							style={({ pressed }) => [
								styles.btn,

								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text style={[themeText]}>Continue with SSO</Text>
						</Pressable>
					</View>
				</View>
			</View>
			<View
				style={[
					globaleStyles.hCtr,
					{ justifyContent: "flex-start", gap: 5 },
				]}
			>
				<Text style={[themeText]}>New to Expo?</Text>
				<View
					style={[
						globaleStyles.hCtr,
						styles.btnCtr,
						{ borderWidth: 0 },
					]}
				>
					<Pressable
						style={({ pressed }) => [
							styles.btn,

							{
								opacity: pressed ? 0.3 : 1,
								justifyContent: "flex-start",
								flexGrow: 0,
							},
						]}
					>
						<Text style={[{ color: "#0077e6" }]}>Sign up</Text>
					</Pressable>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	devCtr: {
		gap: 10,
		borderWidth: 1,
	},
	dev: {
		padding: 10,
		gap: 10,
	},
	inputCtr: {
		borderWidth: 1,
		borderRadius: 10,
	},
	input: {
		flexDirection: "row",
		alignItems: "center",
		width: 100,
		flexShrink: 1,
		flexGrow: 1,
		padding: 10,
	},
	btnCtr: {
		// padding: 10,
		borderWidth: 1,
		borderRadius: 5,
	},
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

	showCtr: {
		width: 25,
		height: 25,
		borderRadius: 5,
		borderWidth: 1,
		// backgroundColor:  "#0077e6"
	},
	show: {
		width: 18,
		height: 18,
		borderRadius: 5,
	},
	txt: {
		fontSize: 25,
		fontWeight: "bold",
	},
});
