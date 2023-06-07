import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors, { primary } from "../constants/Colors";
import { View } from "./Themed";
import {TabActions, useNavigation} from "@react-navigation/native";
import { FontAwesome} from "@expo/vector-icons";
import useCartManagement from "../StateManagement/CartManagement";


export default function CartCount() {
	const navigation = useNavigation();
	const { state } = useCartManagement();
  return (
    <View style={styles.container}>
			<Text style={styles.text}
				  onPress={() => {
					  navigation.dispatch(TabActions.jumpTo('Cart'));
				  }}
			>
				<FontAwesome name="shopping-cart" size={15} style={styles.icon} />
				{state.totalCartItems}</Text>
	</View>
  );
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		backgroundColor: 'orange',
		padding: 5,
		borderRadius: 40 / 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
	},
	icon: {
		position: "absolute",
		zIndex: 1,
		top: 30,
		left: 10,
	},
});
