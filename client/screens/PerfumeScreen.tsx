import React from 'react';
import {
	Text,
	Image,
	View,
	ScrollView,
	SafeAreaView,
	StyleSheet,
	DeviceEventEmitter
} from 'react-native';
import {RootStackScreenProps} from "../types";
import { Button } from 'react-native-paper';
import { storeData } from '../StateManagement/CartManagement';
// import { getProducts } from '../services/ProductsService.js';

export default function PerfumeScreen({
	navigation,
   route
  }: RootStackScreenProps<"PerfumeDetail">) {

	// DeviceEventEmitter.removeListener("event.test");

	// @ts-ignore
	const { perfume = null } = route?.params;
	const onAddToCart = async  () => {
		storeData(perfume)
			.then(async r => {
				DeviceEventEmitter.emit('cart.added', {perfume});
				console.warn('Store Done')
		});
	}

  return (
	  (perfume ?
		  <SafeAreaView>
			  <ScrollView>
				  <Image
					  style={styles.image}
					  source={{uri: perfume.image}}
				  />
				  <View style={styles.infoContainer}>
					  <Text style={styles.name}>{perfume.name}</Text>
					  <Text style={styles.price}>$ {perfume.price}</Text>
					  <Text style={styles.description}>{perfume.description}</Text>
					  <Button icon="cart-arrow-down" mode="contained"
							  onPress={onAddToCart}
					  >
						  Add to cart
					  </Button>
				  </View>
			  </ScrollView>
		  </SafeAreaView>
			  :
			 <View>
				 <Text>
					 No Results
				 </Text>
			 </View>
	  )
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
		image: {
		height: 300,
		width: '100%'
	},
		infoContainer: {
		padding: 16,
	},
		name: {
		fontSize: 22,
		fontWeight: 'bold',
	},
		price: {
		fontSize: 16,
		fontWeight: '600',
		marginBottom: 8,
	},
		description: {
		fontSize: 16,
		fontWeight: '400',
		color: '#787878',
		marginBottom: 16,
	},
});
