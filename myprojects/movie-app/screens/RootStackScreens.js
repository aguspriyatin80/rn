import  React,{useEffect} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import TestComponents from './screens/TestComponents';
import DetailsScreen from './screens/DetailsScreen';
import UserReviewScreen from './screens/UserReviewScreen';
import EditProfileScreen from './screens/EditProfileScreen'
import TestYouTubeScreen from './screens/TestYouTubeScreen'
import ListDetailsMovieComponent from './components/ListDetailsMovieComponent';
import TabScreen from './screens/TabScreen';
//import {Provider,useDispatch} from 'react-redux'
//import store from './store/store'
//import {getNowPlayingAction} from './actions/movieActions'

const RootStack = createStackNavigator()

const RootStackScreens = ({navigation}) => (
      <RootStack.Navigator initialRouteName='Tab'>
      <RootStack.Screen name='Tab' component={TabScreen} />
      <RootStack.Screen name='Testing' component={TestingScreen} />
      <RootStack.Screen name='Home' component={HomeScreen} />
      <RootStack.Screen name='Login' component={LoginScreen} />
      <RootStack.Screen name='Register' component={RegisterScreen} />

      <RootStack.Screen name='Test' component={TestComponents} />
      <RootStack.Screen name='Details' component={DetailsScreen} />
      <RootStack.Screen name='User Review' component={UserReviewScreen} />
      <RootStack.Screen name='Edit Profile' component={EditProfileScreen} />
      <RootStack.Screen name='Play' component={TestYouTubeScreen} />
      <RootStack.Screen name='ListDetails' component={ListDetailsMovieComponent} />
  </RootStack.Navigator>
)

export default RootStackScreens
