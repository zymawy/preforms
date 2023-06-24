import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	ImageBackground, TouchableOpacity
} from 'react-native';
import Pressable from "./Pressable";

const Card = ({entity, onPress}) => {
	const { width } = Dimensions.get('window');

	return (
			// <View style={styles.card}>
			<TouchableOpacity onPress={onPress} style={styles.card}>
				<ImageBackground
					source={{ uri: entity.image }}
					style={styles.image}
					resizeMode="cover" // use 'contain' if you want to see the entire image
				>
					<Text style={styles.title}>{entity.name}</Text>
				</ImageBackground>
			</TouchableOpacity>
		// </View>
	);
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		borderRadius: 10,
		margin: 10,
		width: (width / 2) - 20, // Divide the width by 2 and subtract the margin (10 on each side)
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		padding: 20,
	},
	image: {
		width: '100%', // fills the width of the card
		height: '100%', // fills 70% of the card's height; adjust as needed
		justifyContent: 'center', // centers the text vertically
		alignItems: 'center', // centers the text horizontally
	},
});

export default Card;
