import React from 'react';
import { View,Text } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import HomeScreen2 from './Screens/HomeScreen2';

const App = ()=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>    
     <HomeScreen />
     <HomeScreen2 /> 
  </View>
  )
}
export default App;