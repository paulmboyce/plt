import React from "react";
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import defaultNavigationOptions from "./DefaultNavigationOptions";
import ShopScreenPresenter from "../../../presenters/ShopScreenPresenter";
import ShopScreen from "../screens/ShopScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import { Theme } from "../styles/Theme";

import Badge from "../components/Badge";

const appNavigator = createStackNavigator(
  {
    Home: {
      screen: ({ navigation }) => (
        <ShopScreenPresenter
          navigation={navigation}
          screenComponent={ShopScreen}
        />
      ),
    },
    Product: {
      screen: ProductScreen,
    },
    Cart: {
      screen: CartScreen,
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: defaultNavigationOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "ios" ? "ios-home" : "md-home"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
  }
);

const cartNavigator = createStackNavigator(
  {
    Cart: {
      screen: CartScreen,
    },
  },
  {
    initialRouteName: "Cart",
    defaultNavigationOptions: defaultNavigationOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
  }
);

const bottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: appNavigator,
      navigationOptions: {
        tabBarLabel: "All Products",
        tabBarIcon: (props) => (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            size={23}
            color={props.tintColor}
          />
        ),
        tabBarOnPress: (props) => {
          console.log("Pressed 'My Shopping' tab: ");
          props.navigation.navigate("Home");
        },
      },
    },
    Checkout: {
      screen: cartNavigator,
      navigationOptions: {
        tabBarLabel: "Cart",
        tabBarColor: Platform.OS === "ios" ? "#e3fff8" : Theme.primaryColorTone,
        tabBarIcon: (props) => {
          return <Badge tintColor={props.tintColor} />;
        },
      },
    },
  },
  {
    initialRouteName: "Home",
    shifting: true,
    labeled: true,
    activeColor: Platform.OS === "ios" ? Theme.secondaryColor : "white",
    inactiveColor: Platform.OS === "ios" ? Theme.primaryColor : "white",
    barStyle: {
      backgroundColor: Platform.OS === "ios" ? "white" : Theme.primaryColor,
      borderTopWidth: 1,
      borderTopColor: Theme.cancelColor,
    },
  }
);

export default createAppContainer(bottomTabNavigator);
