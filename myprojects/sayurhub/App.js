import React from 'react';
import LoginScreen from './Screens/LoginScreen'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import store from './Redux/store.js'

const Stack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <Stack.Navigator headerMode='none' initialRouteName='Login'>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>

    </Provider>
  );
}
