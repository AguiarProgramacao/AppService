import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import FormRegisterScreen from "./src/screens/FormRegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name="FormRegister" component={FormRegisterScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}