import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {ImageBackground, Platform, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import {RootStackScreenProps} from "../types";
import Button from "../components/Button";
import useStateManagement from "../StateManagement/StateManagement";
import {MonoText} from "../components/StyledText";
import {primary} from "../constants/Colors";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Actions from "../StateManagement/Actions";
import useCartManagement from "../StateManagement/CartManagement";



export default function AccountScreen({
										  navigation,
										  route
									  }: RootStackScreenProps<"AccountScreen">): JSX.Element {

	const { state, dispatch } = useStateManagement();
	const { dispatch: cartDispatch } = useCartManagement();

	const logout = async () => {
				try {
					await AsyncStorage.clear();
					await  AsyncStorage.removeItem('@cart')
					await SecureStore.deleteItemAsync("user-token");
					dispatch(
						Actions.setUser(null)
					);

					cartDispatch(
						Actions.setCartItems([])
					);
					cartDispatch(
						Actions.setTotalCartItems(0)
					)

					cartDispatch(
						Actions.setTotalPrice(0)
					)

				} catch (err) {
					console.warn(err);
				}
		navigation.navigate("Login");
	}

	return (
		<View style={styles.container}>
			<View style={[styles.profile, { borderColor: primary }]}>
				<ImageBackground
					source={{uri: "https://picsum.photos/200"}}
					resizeMode="cover"
					style={styles.image}
				></ImageBackground>
			</View>
			<MonoText>{state.user?.name}</MonoText>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<View style={{flexDirection:"row", justifyContent: 'center'}}>
				<View>
					{/*<Button text="Login" onPress={() => (console.log('sdfd'))} disabled={false} />*/}
				</View>
				<View>
					<Button text="Logout" onPress={logout} disabled={false} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		// justifyContent: 'center',
	},
	button: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 20,
		height: 1,
		width: '100%',
	},
	profile: {
		width: 42,
		height: 42,
		backgroundColor: "grey",
		borderRadius: 21,
		marginRight: 15,
		overflow: "hidden",
		borderWidth: 2,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});
