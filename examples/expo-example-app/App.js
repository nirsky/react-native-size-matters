import React from "react";
import HomeScreen from "./components/Home";
import FeedPage from "./components/Feed";
import ChatPage from "./components/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

const NativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <NativeStack.Navigator initialRouteName="Home">
        <NativeStack.Screen name="Home" component={HomeScreen} />
        <NativeStack.Screen name="Chat" component={ChatPage} />
        <NativeStack.Screen name="Feed" component={FeedPage} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
