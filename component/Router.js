import { View, Text } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/context';
import Profile from '../pages/Profile';

const Router = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const Stack = createStackNavigator();
  const {isLoggedIn,setIsLoggedIn} = useAuth();
//   console.log(data)
    useEffect(() => {
        AsyncStorage.getItem("token").then((value) => { 
          const token = JSON.parse(value);
          if (token !== null) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        }).catch((error) => {
          console.error("Error retrieving token:", error);
        });
      }, []);
  return (
    <NavigationContainer>
    {isLoggedIn ? (
      <DrawerNavigator />
    ) : (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>
    )}
  </NavigationContainer>
  )
}

export default Router