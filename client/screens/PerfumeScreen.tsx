import React, { useRef } from 'react';
import {
	Text,
	Image,
	SafeAreaView,
	StyleSheet,
	DeviceEventEmitter,
	Dimensions, Animated,TouchableOpacity
} from 'react-native';
import {RootStackScreenProps} from "../types";
import { storeData } from '../StateManagement/CartManagement';
import {View, ScrollView} from "../components/Themed";
import {FontAwesome} from "@expo/vector-icons";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardPerfume from "../components/CardPerfume";
import {TabActions} from "@react-navigation/native"; // install this using npm i react-native-snap-carousel

const { width } = Dimensions.get('window');

export default function PerfumeScreen({
	navigation,
   route
  }: RootStackScreenProps<"PerfumeDetail">) {

	// @ts-ignore
	const { perfume = null } = route?.params;

	const carouselRef = useRef(null);
	const scrollY = new Animated.Value(0);
	const [activeSlide, setActiveSlide] = React.useState(0);

	const handleScroll = Animated.event(
		[{ nativeEvent: { contentOffset: { y: scrollY } } }],
		{ useNativeDriver: true },
	);

	const renderItem = ({ item }) => {
		return (
			<Image source={{ uri: item }} style={styles.carouselImage} />
		);
	};


	const onAddToCart = async  () => {
		storeData(perfume)
			.then(async r => {
				DeviceEventEmitter.emit('cart.added', {perfume});
				console.warn('Store Done')
		});
	}

	return (
		<ScrollView style={styles.container}>
			<Animated.ScrollView
				style={styles.container}
				onScroll={handleScroll}
				scrollEventThrottle={16}
			>
				<Carousel
					ref={carouselRef}
					data={perfume.gallery}
					renderItem={renderItem}
					sliderWidth={width}
					itemWidth={width}
					onSnapToItem={index => setActiveSlide(index)}
					autoplay
					loop
				/>
				<Pagination
					dotsLength={perfume.gallery.length}
					activeDotIndex={activeSlide}
					containerStyle={styles.paginationContainer}
					dotStyle={styles.paginationDot}
					inactiveDotOpacity={0.4}
					inactiveDotScale={0.6}
				/>
				<View style={styles.contentContainer}>
					<Text style={styles.name}>{perfume.name}</Text>
					<View style={styles.separator} />
					<Text style={styles.price}>${perfume.price.toFixed(2)}</Text>
					<Text style={styles.description}>{perfume.description}</Text>
					<TouchableOpacity onPress={onAddToCart} style={styles.button}>
						<FontAwesome name="shopping-cart" size={20} color="#fff" />
						<Text style={styles.buttonText}>Add to Cart</Text>
					</TouchableOpacity>
				</View>
			</Animated.ScrollView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	carouselImage: {
		width: '100%',
		height: 200,
	},
	paginationContainer: {
		paddingVertical: 8,
	},
	paginationDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginHorizontal: 8,
		backgroundColor: '#007BFF',
	},
	contentContainer: {
		padding: 16,
		backgroundColor: '#fff',
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	separator: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		marginVertical: 16,
	},
	price: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#007BFF',
		marginBottom: 16,
	},
	description: {
		fontSize: 16,
		lineHeight: 24,
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007BFF',
		padding: 10,
		marginTop: 16,
		borderRadius: 5,
	},
	buttonText: {
		color: '#fff',
		marginLeft: 8,
	},
});
