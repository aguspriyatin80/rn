import React,{useEffect} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import TestComponents from './screens/TestComponents';
import DetailsScreen from './screens/DetailsScreen';
import {UserReviewScreen} from './screens/UserReviewScreen';
import EditProfileScreen from './screens/EditProfileScreen'
import TestYouTubeScreen from './screens/TestYouTubeScreen'
import ListDetailsMovieComponent from './components/ListDetailsMovieComponent';
import TabScreen from './screens/TabScreen';
import store from './store/store'
import {Provider,useDispatch} from  'react-redux'
import {getNowPlayingAction} from './actions/movieActions'




const  TestingScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Testing !</Text>
    
    <Button
      title='Tab Screen'
      onPress={() => props.navigation.navigate('Tab')}
    />
    
    <Button
      title='Test'
      onPress={() => props.navigation.navigate('Test')}
    />
    
    <Button
      title='Login'
      onPress={() => props.navigation.navigate('Login')}
    />
    <Button
      title='Register'
      onPress={() => props.navigation.navigate('Register')}
    />
    
    <Button
      title='Home'
      onPress={() => props.navigation.navigate('Home')}
    />
    <Button
      title='Details'
      onPress={() => props.navigation.navigate('Details')}
    />
    <Button
      title='User Review'
      onPress={() => props.navigation.navigate('User Review')}
    />
    <Button
      title='Edit Profile'
      onPress={() => props.navigation.navigate('Edit Profile')}
    />
     <Button
      title='Play You Tube'
      onPress={() => props.navigation.navigate('Play')}
    />
     <Button
      title='list details component'
      onPress={() => props.navigation.navigate('ListDetails')}
    /> 
    
  
  </View>
  )
}

// const AppWrapper = () => {
//   const store = createStore(rootReducer);

//   return (
//     <Provider store={store}> // Set context
//       <App /> // Now App has access to context
//     </Provider>
//   )
//}

//const App = () => {
  //const dispatch = useDispatch(); // Works!

const Stack = createStackNavigator();

const  App = () => {
  // const dispatch = useDispatch()
  // useEffect  (()=>{
  //   dispatch(getNowPlayingAction)
  // },[]) 

  return (
    
    <Provider store= {store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Testing'>
                <Stack.Screen name='Tab' component={TabScreen} />
                <Stack.Screen name='Testing' component={TestingScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
              
                <Stack.Screen name='Test' component={TestComponents} />
                <Stack.Screen name='Details' component={DetailsScreen} />
                <Stack.Screen name='User Review' component={UserReviewScreen} />
                <Stack.Screen name='Edit Profile' component={EditProfileScreen} />
                <Stack.Screen name='Play' component={TestYouTubeScreen} />
                <Stack.Screen name='ListDetails' component={ListDetailsMovieComponent} />
            
      
           </Stack.Navigator>
        </NavigationContainer>

    </Provider>
      )
}

export default App;