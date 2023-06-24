import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {StyleSheet, View, TextInput, Button} from "react-native";
import useCartManagement from "../StateManagement/CartManagement";
import {
	StackActions,
	TabActions,
	useNavigation
} from "@react-navigation/native";

export default function SerachBar() {
  const [searchText, setSearchText] = React.useState<string>("");
	const { dispatch } = useNavigation();
	const handleSearch = (e) => {
		dispatch(
			TabActions.jumpTo("SearchScreen", { searchQuery: searchText })
		)
	};

  return (
	  <View style={styles.container}>
		  <FontAwesome name="search" size={25} style={styles.icon} color="grey" />
		  <TextInput
			  style={styles.input}
			  value={searchText}
			  onChangeText={(text) => setSearchText(text)}
			  placeholder="Search for brands, perfumes and more"
			  placeholderTextColor="#000"
			  returnKeyType='search'
			  // autoFocus={true}
			  selectionColor={'#ddd'}
			  onSubmitEditing={handleSearch}
			  clearButtonMode="while-editing"
		  />
	  </View>
  );
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
	},
	input: {
		paddingVertical: 10,
		paddingRight: 10,
		paddingLeft: 40,
		backgroundColor: "#eee",
		borderRadius: 15,
		fontFamily: "space-mono",
		fontWeight: "700",
		color: "grey",
	},
	icon: {
		position: "absolute",
		zIndex: 1,
		top: 30,
		left: 10,
	},
});
