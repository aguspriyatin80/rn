
import React from 'react';
import { View, Text,Picker ,Button} from 'react-native'
import MainScreen from './Screens/MainScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const  TestingScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
    <Button
      title=''
      onPress={() => props.navigation.navigate('Testing')}
    />
    
    
    <Button
      title='Test Masuk PT OMIND'
      onPress={() => props.navigation.navigate('Buat Grup')}
    />
  
  </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Testing">
        
        <Stack.Screen name="Testing" component={TestingScreen}/>
        <Stack.Screen name="Buat Grup" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

