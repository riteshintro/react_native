import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './component/DrawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider, useAuth } from './context/context';
import Router from './component/Router';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createStackNavigator();
  // const data = useAuth();
  // console.log(data)
  
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
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
};

export default App;
