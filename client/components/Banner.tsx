import { TabActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { primary } from "../constants/Colors";
import Pressable from "./Pressable";
import { Text, View } from "./Themed";
import {FontAwesome5} from "@expo/vector-icons";

// const banner = {
//   uri: url,
// };

export default function Banner({
								   url,
								   name,
							   }: {
	name: string;
	url: string
}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <ImageBackground source={{
		  uri: url,
	  }} resizeMode="cover" style={styles.banner}>
        <View style={styles.bannerContent} lightColor="#fff" darkColor="#fff">
          <Text lightColor="#000" darkColor="#fff" style={styles.contentTitle}>
			  { name }
          </Text>
          <Pressable
            onPress={() => navigation.dispatch(TabActions.jumpTo("Add"))}
          >
            <View style={styles.contentBtn}>
              <Text lightColor="#fff" darkColor="#fff">
                See out products
              </Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 20,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  bannerContent: {
    left: 20,
    top: 40,
    backgroundColor: "transparent",
    width: "70%",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  contentBtn: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor:'black',
    width: 150,
    borderRadius: 20,
  },
});
