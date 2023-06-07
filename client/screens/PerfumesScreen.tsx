import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Platform, ScrollView, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {RootStackScreenProps} from "../types";
import Perfumes from "../components/Perfumes";


export default function PerfumesScreen({
										   navigation,
										   route
								   }: RootStackScreenProps<"PerfumesScreen">) {


  return (
    <View>
	  	<Perfumes type={'all'} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
