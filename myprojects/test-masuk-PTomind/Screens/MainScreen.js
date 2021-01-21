import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import EditProfileScreen from './EditProfileScreen';
import HomeScreen from '../pages/HomeScreen'
import TestScreen from './TestScreen';
import watchScreen from '../pages/watchScreen';
import GroupScreen from '../pages/GroupScreen';
import ProfileScreen from '../pages/ProfileScreen';



const Tab = createBottomTabNavigator();
const MainScreen = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle' : 'user-circle';
          } else if (route.name === 'Buat Grup') {
            iconName = focused ? 'comments' : 'comments';
          }else if (route.name === 'Live') {
            iconName = focused ? 'youtube' : 'youtube';
          }
          
          
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#367874',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Live" component={watchScreen} />
      
      <Tab.Screen name="Buat Grup" component={GroupScreen} />
      
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>


  );
}

export default MainScreen;