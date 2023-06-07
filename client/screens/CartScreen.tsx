import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Platform, ScrollView, StyleSheet} from 'react-native';
import { FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import {RootStackScreenProps} from "../types";
import useCartManagement from "../StateManagement/CartManagement";
import capitalizeString, { strLimit } from "../helpers/capitalize";
import { Button } from 'react-native-paper';
import customAxios from "../axios/axios";
import Actions from "../StateManagement/Actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CartScreen({
									   navigation,
									   route
								   }: RootStackScreenProps<"CartScreen">) {

	const { state, dispatch } = useCartManagement();
	function Totals() {
		console.log(state.cartItems)
		return (
			<View style={styles.cartLineTotal}>
				<Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
				<Text style={styles.lineRight}>$ {state.totalPrice}</Text>
			</View>
		);
	}
	function renderItem({item: item}) {
		return (
			<View style={styles.cartLine}>
				<Text style={styles.lineLeft}>
					{strLimit(item.name)} x {item.qty}</Text>
				<Text style={styles.lineRight}>$ {item.totalPrice}</Text>
			</View>
		);
	}


	async function completeOrder  () {


		console.log({
			cart_items_ids: state.cartItems
		})
		const res =  await customAxios.post('/carts', {
			cart_items_ids: state.cartItems.map((item: object) => {
				return {'id': item.id, 'qty': item.qty}
			})
		})

		if (res.data) {
			dispatch(
				Actions.setTotalCartItems(0)
			)
			dispatch(
				Actions.setCartItems([])
			)
			dispatch(
				Actions.setTotalPrice(0)
			)

			await AsyncStorage.clear();
			await  AsyncStorage.removeItem('@cart')
		}

		alert('Complete Order')
	}
	return (
		<View>
		<FlatList
			style={styles.itemsList}
			contentContainerStyle={styles.itemsListContainer}
			data={state.cartItems}
			renderItem={renderItem}
			keyExtractor={(item) => item.id.toString()}
			ListFooterComponent={Totals}
		/>
			<Button icon="cart-arrow-down" mode="contained" onPress={completeOrder}>
				Complete Order
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		borderRadius: 16,
		shadowOpacity: 0.2,
		shadowRadius: 4,
		shadowColor: 'black',
		shadowOffset: {
			height: 0,
			width: 0,
		},
		elevation: 1,
		marginVertical: 20,
	},
	container: {
		flex: 1,
		paddingTop: 10,
		paddingHorizontal: 12,
	},
	cartLine: {
		flexDirection: 'row',
	},
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#dddddd',
		borderTopWidth: 1
	},
	lineTotal: {
		fontWeight: 'bold',
	},
	lineLeft: {
		fontSize: 20,
		lineHeight: 40,
		color:'#333333'
	},
	lineRight: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 40,
		color:'#333333',
		textAlign:'right',
	},
	itemsList: {
		backgroundColor: '#eeeeee',
	},
	itemsListContainer: {
		backgroundColor: '#eeeeee',
		paddingVertical: 8,
		marginHorizontal: 8,
	},
});
