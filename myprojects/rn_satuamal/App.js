import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import HomeScreen2 from './screens/Home2';
import Penerima from './components/Penerima';
// import ListItemComponent from './screens/ListItemComponent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Home2" component={HomeScreen2} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Penerima" component={Penerima} />
      {/* <Stack.Screen name="ListItemComponent" component={ListItemComponent} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
