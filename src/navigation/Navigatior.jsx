import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/AuthScreens/Login";
import Vote from "../screens/AppScreens/Vote";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

const Navigator = () => {

  const {accessToken} = useSelector(state=>state.user)
	
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {accessToken!="" ? (
          <Stack.Screen name="Vote" component={Vote} options={{title: 'Elecciones 2023'}} />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
