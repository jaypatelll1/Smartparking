import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Layout from "./screens/Layout";

export default function App() {
  const nav = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <nav.Navigator initialRouteName="Home">
        <nav.Screen name="Home" component={Home} />
        <nav.Screen name="Layout" component={Layout} />
      </nav.Navigator>
    </NavigationContainer>
  );
}
