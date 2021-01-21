import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AboutMeScreen from '../pages/AboutMeScreen';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import EditProfileScreen from './EditProfileScreen';
import HomeScreen from '../pages/HomeScreen'

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
          } else if (route.name === 'AboutMe') {
            iconName = focused ? 'user-circle' : 'user-circle';
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
      <Tab.Screen name="AboutMe" component={AboutMeScreen} />
    </Tab.Navigator>


  );
}

export default MainScreen;