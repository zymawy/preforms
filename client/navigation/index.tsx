import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
	DrawerActions, getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { ColorSchemeName, StyleSheet, TouchableOpacity } from "react-native";

import { primary, secondary } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import PerfumeScreen from "../screens/PerfumeScreen";
import CartScreen from "../screens/CartScreen";
import AccountScreen from "../screens/AccountScreen";

import {
  RootDrawerParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Profile from "../components/Profile";
import Pressable from "../components/Pressable";
import CartCount from "../components/CartCount";
import { View } from "../components/Themed";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import isAuthenticated from "../hooks/useAuthenticated";
import * as SecureStore from "expo-secure-store";
import SplashScreen from "../screens/SplashScreen";
import PerfumesScreen from "../screens/PerfumesScreen";
import BrandScreen from "../screens/BrandScreen";
import OrderScreen from "../screens/OrderScreen";
import SearchScreen from "../screens/SearchScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={DefaultTheme}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const isAuth = isAuthenticated();

  if (isAuth.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
      {isAuth.isSignedIn ? (
        <>
          <Stack.Screen
            name="Root"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: secondary,
        // tabBarStyle: { ...styles.tabBar, ...styles.shadow },
        headerStyle: {
          elevation: 0,
        },
        tabBarShowLabel: false,
	  })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="home"
              size={26}
              color={color}
              style={{ marginBottom: 10 }}
            />
          ),
          headerLeft: () => (
              <CartCount />
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Modal")}>
              <Profile />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation }: RootTabScreenProps<"CartScreen">) => ({
          headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Feather
              name="shopping-bag"
              size={26}
              color={color}
              style={{ marginBottom: 10 }}
            />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <CartCount />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Modal")}>
              <Profile />
            </Pressable>
          ),
        })}
      />
		<BottomTab.Screen
			name="SearchScreen"
			component={SearchScreen}
			options={({ navigation }: RootTabScreenProps<"SearchScreen">) => ({
				headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },
				headerTitleAlign: "center",
				tabBarIcon: ({ color }) => (
					<Feather
						name="package"
						size={26}
						color={color}
						style={{ marginBottom: 10 }}
					/>
				),
				headerLeft: () => (
					<Pressable
						onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
					>
						<CartCount />
					</Pressable>
				),
				headerRight: () => (
					<Pressable onPress={() => navigation.navigate("Modal")}>
						<Profile />
					</Pressable>
				),
				tabBarButton: () => null,
			})}
		/>

		<BottomTab.Screen
			name="OrderScreen"
			component={OrderScreen}
			options={({ navigation }: RootTabScreenProps<"OrderScreen">) => ({
				headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },
				headerTitleAlign: "center",
				tabBarIcon: ({ color }) => (
					<Feather
						name="package"
						size={26}
						color={color}
						style={{ marginBottom: 10 }}
					/>
				),
				headerLeft: () => (
					<Pressable
						onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
					>
						<CartCount />
					</Pressable>
				),
				headerRight: () => (
					<Pressable onPress={() => navigation.navigate("Modal")}>
						<Profile />
					</Pressable>
				),
				tabBarButton: () => null,
			})}
		/>
      <BottomTab.Screen
        name="PerfumeDetail"
        component={PerfumeScreen}
		options={{
			tabBarButton: () => null,
		}}
      />
		<BottomTab.Screen
			name="BrandScreen"
			component={BrandScreen}
			options={{
				tabBarButton: () => null,
			}}
		/>
      <BottomTab.Screen
        name="PerfumesScreen"
        component={PerfumesScreen}
        options={({ navigation }: RootTabScreenProps<"PerfumesScreen">) => ({
          headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Feather
              name="package"
              size={26}
              color={color}
              style={{ marginBottom: 10 }}
            />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <CartCount />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Modal")}>
              <Profile />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={({ navigation }: RootTabScreenProps<"AccountScreen">) => ({
          headerTitleStyle: { fontFamily: "space-mono", fontWeight: "700" },
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Feather
              name="user"
              size={26}
              color={color}
              style={{ marginBottom: 10 }}
            />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <CartCount />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Modal")}>
              <Profile />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        drawerActiveTintColor: primary,
        drawerInactiveTintColor: secondary,
        drawerLabelStyle: {
          fontFamily: "space-mono",
          fontWeight: "700",
          fontSize: 16,
        },
      }}
      initialRouteName="Main"
    >
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ title: "Home" }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBar: {
    elevation: 0,
    borderTopWidth: 0,
    height: 60,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
  // addBtn: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  // },
});
