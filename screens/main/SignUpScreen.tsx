import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React, { useState } from "react";
import { globaleStyles } from "../../styles/globalStyles";
import { themeMode } from "../../services/utils/themeMode";
import { EmIcons } from "../../components/shared/EmIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationAndRouteProps } from "../../services/utils/NavigationAndRouteProps";
import { pref } from "../../services/utils";
import { PrefButton } from "../../components/ui/Account";

const values = [];

export default function SignUpScreen({ navigation }: NavigationAndRouteProps) {
	const { themeContainer, themeText, themeContent, themeBcolor } =
		themeMode();
	const [email, setEmail] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [cPassword, setCPassword] = useState<string>("");
	const [show, setShow] = useState<boolean>(false);
	const [product, setProduct] = useState<boolean>(false);
	const [resources, setResources] = useState<boolean>(false);
	const [company, setCompany] = useState<boolean>(false);
	const [legal, setLegal] = useState<boolean>(false);
	const [option, setOption] = useState(0);

	const showHandler = () => {
		setShow((prev) => !prev);
	};

	const initializeInput = () => {
		setEmail("");
		setUsername("");
		setPassword("");
		setCPassword("");
	};
	const signUpHandler = async () => {
		const user = {
			email,
			username,
			password,
		};

		if (email.length < 6 || username.length < 6 || password.length < 6) {
			setOption(1);
			return;
		}

		if (password !== cPassword) {
			console.log("password !== cPassword");
			return;
		}
		const userStr = JSON.stringify(user);
		await AsyncStorage.setItem(email, userStr);
		initializeInput();
		console.log("save done!");
	};

	const loginHandler = () => {
		navigation.navigate("LoginScreen");
	};

	const prefHandler = (title: string) => {
		if (title === "Product") {
			setProduct((prev) => !prev);
			return;
		}
		if (title === "Resources") {
			setResources((prev) => !prev);
			return;
		}
		if (title === "Company") {
			setCompany((prev) => !prev);
			return;
		}
		if (title === "Legal") {
			setLegal((prev) => !prev);
			return;
		}
	};

	const isShown = (title: string) => {
		// if(title === pto)
	};
	return (
		<ScrollView
			style={[globaleStyles.container, themeContainer, { padding: 0 }]}
			contentContainerStyle={[{ paddingBottom: 30 }]}
		>
			<View style={[styles.devCtr, themeBcolor]}>
				<View style={[styles.dev]}>
					{option === 1 && (
						<Text style={[themeText]}>
							Please make sure to enter corrrect email, username
							and password
						</Text>
					)}
					<Text style={[themeText]}>Email</Text>

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
							value={email}
							onChangeText={setEmail}
							style={[styles.input]}
							placeholderTextColor={themeText.color}
						/>
					</View>
					<Text style={[themeText]}>Username</Text>
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
							value={username}
							onChangeText={setUsername}
							style={[styles.input]}
							placeholderTextColor={themeText.color}
						/>
					</View>

					<Text style={[themeText]}>Password</Text>
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
							{ justifyContent: "flex-start", gap: 10 },
						]}
					>
						<Text style={[themeText]}>Password strength</Text>
						<View style={[globaleStyles.hCtr, { gap: 10 }]}>
							<View
								style={[
									themeBcolor,
									styles.strength,
									{ backgroundColor: "" },
								]}
							></View>
							<View
								style={[
									themeBcolor,
									styles.strength,
									{ backgroundColor: "" },
								]}
							></View>
							<View
								style={[
									themeBcolor,
									styles.strength,
									{ backgroundColor: "" },
								]}
							></View>
						</View>
					</View>

					<Text style={[themeText]}>Confirm password</Text>

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
							value={cPassword}
							onChangeText={setCPassword}
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
							onPress={signUpHandler}
							style={({ pressed }) => [
								styles.btn,
								themeBcolor,
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text style={[{ color: "white" }]}>Sign Up</Text>
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
				<Text style={[themeText]}>Have an account?</Text>
				<View
					style={[
						globaleStyles.hCtr,
						styles.btnCtr,
						{ borderWidth: 0 },
					]}
				>
					<Pressable
						onPress={loginHandler}
						style={({ pressed }) => [
							styles.btn,

							{
								opacity: pressed ? 0.3 : 1,
								justifyContent: "flex-start",
								flexGrow: 0,
							},
						]}
					>
						<Text style={[{ color: "#0077e6" }]}>Log in</Text>
					</Pressable>
				</View>
			</View>
			<View
				style={[globaleStyles.hCtr, themeBcolor, { borderTopWidth: 1 }]}
			></View>
			<View style={globaleStyles.vCtr}>
				{pref &&
					pref.map((item: any) => {
						return (
							<View
								key={item.id}
								style={[
									themeBcolor,
									{ borderBottomWidth: 1 },
								]}
							>
									<PrefButton
										company={company}
										item={item}
										legal={legal}
										prefHandler={prefHandler}
										product={product}
										resources={resources}
									/>

								
							</View>
						);
					})}
			</View>
		</ScrollView>
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
	strengthCtr: {},
	strength: {
		borderWidth: 1,
		width: 25,
		height: 10,
	},
});
