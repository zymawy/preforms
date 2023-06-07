import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {
	GestureResponderEvent,
	Image,
	ImageBackground,
	StyleSheet,
	TouchableOpacity
} from "react-native";
import Colors, { primary } from "../constants/Colors";
import capitalizeString from "../helpers/capitalize";
import useColorScheme from "../hooks/useColorScheme";
import Pressable from "./Pressable";
import { View } from "./Themed";
import * as url from "url";
import {TabActions, useNavigation} from "@react-navigation/native";

import { Avatar, Button, Card, Text } from 'react-native-paper';



export default function Perfume({
  name,
  icon,
  image,
  perfume, onPress
}: {
  name: string;
	perfume: object;
	image: string;
	// onPress:  () => void;
  icon: React.ComponentProps<typeof FontAwesome5>["name"];
}) {
  const colorScheme = useColorScheme() == "dark" ? "light" : "dark";
	const navigation = useNavigation();

  return (
	  <Pressable style={styles.card}
				 onPress={() => navigation.dispatch(
					 TabActions.jumpTo("PerfumeDetail", { perfume: perfume })
				 )}
	  >
		  <Image
			  style={styles.thumb}
			  source={{ uri: perfume.image }}
		  />
		  <View style={styles.infoContainer}>
			  <Text style={styles.name}>{perfume.name}</Text>
			  <Text style={styles.price}>$ {perfume.price}</Text>
		  </View>
	  </Pressable>
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
	thumb: {
		height: 260,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		width: '100%',
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
});
