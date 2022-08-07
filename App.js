import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import TermsAndCondScreen from "./screens/TermsAndCondScreen";
import VoteScreen from "./screens/VoteScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Terms" component={TermsAndCondScreen} />
        <Stack.Screen name="Vote" component={VoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'darkmagenta', alignItems: 'center', justifyContent: 'center' },
  title1: { fontSize: 40, marginBottom: 8, color: 'white' },
  title2: { fontSize: 80, marginBottom: 8, color: 'white' }
});

export default App;