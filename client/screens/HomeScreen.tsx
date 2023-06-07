import * as React from "react";
import {Dimensions, SafeAreaView, StyleSheet} from "react-native";
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
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { state, dispatch } = useStateManagement();

  return (
     <ScrollView>
		 {/*<View style={styles.containerBase}>*/}
			{/* <Card>*/}
			{/*	 /!*<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />*!/*/}
			{/*	 /!*<Card.Content>*!/*/}
			{/*		 /!*<Text variant="titleLarge">Card title</Text>*!/*/}
			{/*		 /!*<Text variant="bodyMedium">Card content</Text>*!/*/}
			{/*	 /!*</Card.Content>*!/*/}
			{/*	 <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />*/}
			{/*	 <Card.Actions>*/}
			{/*		 /!*<Button>Cancel</Button>*!/*/}
			{/*		 <Button>Ok</Button>*/}
			{/*	 </Card.Actions>*/}
			{/* </Card>*/}
			{/* <Card>*/}
			{/*	 /!*<Card.Title title="Card Title" subtitle="Card Subtitle" />*!/*/}
			{/*	 /!*<Card.Content>*!/*/}
			{/*		 /!*<Text variant="titleLarge">Card title</Text>*!/*/}
			{/*		 /!*<Text variant="bodyMedium">Card content</Text>*!/*/}
			{/*	 /!*</Card.Content>*!/*/}
			{/*	 <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />*/}
			{/*	 <Card.Actions>*/}
			{/*		 <Button>Cancel</Button>*/}
			{/*		 <Button>Ok</Button>*/}
			{/*	 </Card.Actions>*/}
			{/* </Card>*/}
			 {/*<WelcomeText name={state.user?.name} />*/}
				{/*<View style={styles.container}>*/}
				{/* /!*<WelcomeText name={state.user?.name} />*!/*/}
				{/* /!*<View style={{ width: 50, height: 50, backgroundColor: 'powderblue', alignSelf: 'flex-end' }} />*!/*/}
				{/* /!*<View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />*!/*/}
				{/* /!*<View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />*!/*/}
				{/* <Pressable style={styles.card}*/}
				{/* >*/}
				{/*	 <View style={styles.infoContainer}>*/}
				{/*		 <Text>Welcome</Text>*/}
				{/*	 </View>*/}
				{/* </Pressable>*/}
				{/* /!*<Pressable style={styles.card}*!/*/}
				{/* /!*>*!/*/}
				{/*	/!* <View style={styles.infoContainer}>*!/*/}
				{/*	/!*	 <Text>Welcome</Text>*!/*/}
				{/*	/!* </View>*!/*/}
				{/* /!*</Pressable>*!/*/}
				{/* /!*<Pressable style={styles.card}*!/*/}
				{/* /!*>*!/*/}
				{/*	/!* <View style={styles.infoContainer}>*!/*/}
				{/*	/!*	 <Text>Welcome</Text>*!/*/}
				{/*	/!* </View>*!/*/}
				{/* /!*</Pressable>*!/*/}
				{/* /!*<Pressable style={styles.card}*!/*/}
				{/* /!*>*!/*/}
				{/*	/!* <View style={styles.infoContainer}>*!/*/}
				{/*	/!*	 <Text>Welcome</Text>*!/*/}
				{/*	/!* </View>*!/*/}
				{/* /!*</Pressable>*!/*/}
			 {/*</View>*/}
			  {/*<SafeAreaView style={styles.containers}>*/}
			 	 <CarouselCards />
			  {/*</SafeAreaView>*/}
			  {/*<Perfumes type={'banner'}/>*/}
			  <Categories />
		 {/*</View>*/}
	 </ScrollView>
  );
}

const cardGap = 16;

const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;


const styles = StyleSheet.create({
containerBase: {
	padding: 10,
	// width:'100%',
	display:'flex', flexDirection:'row', justifyContent:'space-between'
  },
  container: {
	  flexDirection: 'row',
	  flexWrap: 'wrap',
	  justifyContent: 'center',
    // flex: 1,
    // display: 'flex',
    // paddingTop: 10,
	//   alignItems: "center",
	  // flexDirection: 'row',
    // paddingHorizontal: 12,

  },
	card: {
		marginTop: cardGap,
		// marginLeft: 1 % 2 !== 0 ? cardGap : 0,
		width: cardWidth,
		height: 180,
		backgroundColor: 'white',
		borderRadius: 16,
		shadowOpacity: 0.2,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'white',
		// borderRadius: 16,
		// shadowOpacity: 0.3,
		// shadowRadius: 4,
		// shadowColor: 'black',
		// shadowOffset: {
		// 	height: 0,
		// 	width: 0,
		// },
		// elevation: 1,
		// marginVertical: 20,
		// flexDirection: "row",

	},
	infoContainer: {
		padding: 20,
	}
});
