import * as React from "react";
import {
	ActivityIndicator,
	Dimensions, FlatList, Image, Platform,
	SafeAreaView,
	StyleSheet, Text
} from "react-native";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Perfumes from "../components/Perfumes";
import SerachBar from "../components/SerachBar";
import {View, ScrollView} from "../components/Themed";
import { RootTabScreenProps } from "../types";
import useStateManagement from "../StateManagement/StateManagement";
import WelcomeText from "../components/WelcomeText";
import CarouselCards from "../components/CarouselCards";
import Pressable from "../components/Pressable";
import {useEffect, useState} from "react";
import customAxios from "../axios/axios";
import {primary} from "../constants/Colors";
import Card from '../components/Card';
import {FontAwesome} from "@expo/vector-icons";
import {TabActions} from "@react-navigation/native";
import FeaturedProductCarousel from "../components/FeaturedProductCarousel";
const { width } = Dimensions.get('window');
import { Text as TextOwn, View as  ViewOwn } from "../components/Themed";
import {StatusBar} from "expo-status-bar";


export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { state, dispatch } = useStateManagement();
	const [brands, setBrands] = useState<{
		data: string[];
		error: string;
		loading: boolean;
		isBanner: boolean;
	}>({ data: [], error: "", loading: false,  isBanner: false });
	const createEntry = (entry: any) => {
		return (
			<Card entry={entry} />
		)
	}

	const handleSearch = (searchText) => {
		navigation.navigate('SearchScreen', { searchQuery: searchText });
	};

	useEffect(() => {
		const fetchBrands = async () => {
			try {
				setBrands((prev) => ({ ...prev, loading: true }));
				const res = await customAxios.get("/brands");
				setBrands((prev) => ({
					...prev,
					data: res.data.data,
					loading: false,
				}));
			} catch (err) {
				setBrands((prev) => ({
					...prev,
					error: err?.message || 'There Has Been Some Error ',
					loading: false,
				}));
			}
		};

		fetchBrands();
	}, []);


	const renderItem = ({ item }) =>
		<Card entity={item}
			  onPress={() => navigation.dispatch(
				  TabActions.jumpTo("BrandScreen", { brandId: item.id, brandName: item.name })
			  )}
		/>;

  return (
		 <ScrollView style={styles.container}>
			 <WelcomeText name={state.user?.name} />
			 <SerachBar onSearch={handleSearch}  />
			 {brands.loading ? (
				 <View style={{ marginTop: 15 }}>
					 <ActivityIndicator size="large" color={primary} />
				 </View>
			 ) : brands.error.length ? (
				 <View
					 style={{
						 flex: 1,
						 alignItems: "center",
						 marginVertical: 20,
					 }}
				 >
					 <Text>{brands.error}</Text>
				 </View>
			 ) : (
				 <View>
					 <ViewOwn style={styles.textContainer}>
						 <TextOwn style={styles.textText}>Our Brands 🚀</TextOwn>
					 </ViewOwn>
				 <FlatList
					 data={brands?.data || []}
					 renderItem={renderItem}
					 keyExtractor={(item, index) => index.toString()}
					 numColumns={2} // number of cards in one row
					 columnWrapperStyle={styles.row} // applying the styles to each row
					 style={styles.list}
					 scrollEnabled={false}
					 legacyImplementation={false}
				 />

					 <FlatList
						 data={brands?.data?.reverse() || []}
						 renderItem={renderItem}
						 keyExtractor={(item, index) => index.toString()}
						 numColumns={2} // number of cards in one row
						 columnWrapperStyle={styles.row} // applying the styles to each row
						 style={styles.list}
						 scrollEnabled={false}
						 legacyImplementation={false}
					 />

					 <ViewOwn style={styles.textContainer}>
						 <TextOwn style={styles.textText}>Featured Perfume 🔥</TextOwn>
					 </ViewOwn>
					 <View style={styles.separator} />

					 <FeaturedProductCarousel />
				 </View>

			 )}

			 <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		 </ScrollView>
  );
}
// const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 1,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10,
	},
	titleContainer: {
		backgroundColor: '#f9f9f9',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		marginVertical: 20,
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
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
	},
	list: {
		flex: 1
	},
	icon: {
		marginRight: 10, // add some margin to the right of the icon
	},
	textContainer: {
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 5
	},
	textText: {
		fontSize: 15,
	},
	separator: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		marginHorizontal: 10,
	},
});
