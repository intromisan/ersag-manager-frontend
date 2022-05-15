import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import NavigationTabs from "./NavigationTabs";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";

const AppNavigation = () => {
  const [isAuth, setIsAuth] = useState(true);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <Stack.Screen name="App" component={NavigationTabs} />
        ) : (
          <>
            <Stack.Screen name="SingUp" component={SignUpScreen} />
            <Stack.Screen name="SingIn" component={SignInScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
