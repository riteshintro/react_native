import * as React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'; // Import your TabNavigator
import Social from '../pages/Social';
import QrCode from '../pages/QrCode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/context';
import {CustomDrawerHeader} from './DrawerHeader';



const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const {setIsLoggedIn}=useAuth()
  // const handleLogout=()=>{
  //   console.log(AsyncStorage.getItem("token"))
  //   AsyncStorage.removeItem("token");
  // }
  const handleLogout = () => {
    AsyncStorage.getItem("token").then((token) => {
      console.log("Token before logout:", token);
      AsyncStorage.removeItem("token").then(() => {
        console.log("Token removed");
        // navigation.navigate('Login');
        setIsLoggedIn(false)
        // Additional logout actions can be performed here
      }).catch((error) => {
        console.error("Error removing token:", error);
      });
    }).catch((error) => {
      console.error("Error retrieving token:", error);
    });
  };
  

  const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
       <CustomDrawerHeader title="My App Header" showLogo={true} />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {handleLogout()}}
      />
    </DrawerContentScrollView>
  );
  return (
    <Drawer.Navigator initialRouteName="Home1"
     drawerContent={props => <CustomDrawerContent {...props} />} 
     drawerActiveTintColor="#FF5733"
     drawerInactiveTintColor="#333"
     screenOptions={{
      headerStyle: { backgroundColor: '#f6efe0' },
    }}
     >
    <Drawer.Screen name="Home1" component={TabNavigator} />
    <Drawer.Screen name="Review Link" component={Social} />
    <Drawer.Screen name="Qr Code" component={QrCode} />
    <Drawer.Screen name="Profile1" component={Social} />
    <Drawer.Screen name="Profile2" component={Social} />
    {/* <Drawer.Screen name="Logout" component={LogoutButton} /> */}
  </Drawer.Navigator>
  );
};

export default DrawerNavigator;
