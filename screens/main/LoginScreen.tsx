import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { themeMode } from "../../services/utils/themeMode";
import { globaleStyles } from "../../styles/globalStyles";
import { EmIcons } from "../../components/shared/EmIcons";
import { LoginCard } from "../../components/ui/Account";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationAndRouteProps } from "../../services/utils/NavigationAndRouteProps";
import { prefCtxt } from "../../services/context/prefContext";

export default function LoginScreen({ navigation }: NavigationAndRouteProps) {

    const { handleUserData } = prefCtxt();
	const { themeText, themeContainer, themeContent, themeBcolor } =
		themeMode();
	const [option, setOption] = useState<number>(0);
	const [show, setShow] = useState<boolean>(true);
	const [emailUsername, setEmailUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [optionSelected, setOptionSelected] = useState<number>(0);
	const [errType, setErrType] = useState<number>(0);
	const optionHandler = (id: number) => {};

	const showHandler = () => {
		setShow((prev) => !prev);
	};

	const loginHandler = async () => {
		const json = await AsyncStorage.getItem(emailUsername);
		if (json === null) return;
		// const parsedValue = JSON.parse(json);
		const parsedValue = JSON.parse(json);
		if (parsedValue.password !== password) {
            setErrType(2);
			return;
		}
        console.log("jso", json);

        handleUserData(parsedValue);
		navigation.navigate("HomeScreen", {
			email: parsedValue.email,
			username: parsedValue.username,
		});
	};

	const optionSelectedHandler = async (id: number) => {};

	return (
		<View
			style={[globaleStyles.container, themeContainer, styles.container]}
		>
			<View style={[styles.ctt]}>
				<View style={[globaleStyles.vCtr, {}]}>
					<Text style={[themeText, styles.txt]}>Log in to Expo</Text>
					<LoginCard
						show={show}
						showHandler={showHandler}
						emailUsername={emailUsername}
						setEmailUsername={setEmailUsername}
						password={password}
						setPassword={setPassword}
						loginHandler={loginHandler}
						optionSelected={optionSelected}
						optionSelectedHandler={optionSelectedHandler}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 5,
	},
	ctt: {
		gap: 10,
	},
	txt: {
		fontSize: 25,
		fontWeight: "bold",
	},
});
