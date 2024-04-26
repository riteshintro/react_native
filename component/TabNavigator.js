import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import Integration from '../pages/Integration';
import Social from '../pages/Social';
import SettingsScreen from '../pages/SettingScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator   screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#f1c30f',
      tabBarInactiveTintColor: 'black',
    }}>
      <Tab.Screen name="Home"  component={HomeScreen}
       options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
      
      
      />
      <Tab.Screen name="Integration"  component={Integration} 
       options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="add-to-list" color={color} size={size}  />
        ),
      }}
      />
      <Tab.Screen name="Social"  component={Social} 
       options={{
        tabBarIcon: ({ color, size }) => (
          // <Icon name="home" color={color} size={size} />
          <MaterialIcons name="settings-ethernet" color={color} size={size}/>

        ),
      }}
      />
      <Tab.Screen name="Profile" component={SettingsScreen} 
       options={{
        tabBarIcon: ({ color, size }) => (
          // <Icon name="home" color={color} size={size} />
          // <AntDesign name="user"color={color} size={size}/>
          <FontAwesome6 name="circle-user" color={color} size={size}/>
        ),
      }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
