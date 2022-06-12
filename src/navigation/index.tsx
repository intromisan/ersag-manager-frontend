import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationTabs from './NavigationTabs';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { onSignIn } from '../redux/slices/userSlice';

const AppNavigation = () => {
  // const [userToken, setUserToken] = useState<string | null>(null);
  const { userToken } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const getUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (token) dispatch(onSignIn(token));
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUserToken();
  }, [userToken]);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken !== null ? (
          // {true ? (
          <Stack.Screen name="App" component={NavigationTabs} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
