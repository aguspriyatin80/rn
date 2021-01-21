import React from 'react';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen'
import MainScreen from './Screens/MainScreen'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import ListProductComponent from './Components/ListProductComponent';
import SplashScreen from './Screens/SplashScreen';
import CreateProductScreen from './Screens/CreateProductScreen'
import EditProfileScreen from './Screens/EditProfileScreen'
import MyProductScreen from './Screens/MyProductScreen';
import MyProductScreen2 from './Screens/MyProductScreen2';
import EditProductScreen from './Screens/EditProductScreen'
import DeleteProductScreen from './Screens/DeleteProductScreen'
import ProductDetailsScreen from './Screens/ProductDetails';
import TransactionHistoryScreen from './Screens/TransactionHistoryScreen'
import NotificationScreen from './Screens/NotificationScreen'
import MyCartScreen from './Screens/MyCartScreen'
import AboutMeScreen from './pages/AboutMeScreen'
import AdminLoginScreen from './Screens/AdminLoginScreen'
import AdminMainScreen from './Screens/AdminMainScreen'
import AdminAboutMeScreen from './AdminPages/AdminAboutMeScreen'
import AdminHomeScreen from './AdminPages/AdminHomeScreen'
import AdminManagementUser from './Screens/AdminManagementUser';
import { ScrollView } from 'react-native-gesture-handler';
import FormScreen2 from './Screens/FormScreen2';
import SearchScreen from './Screens/SearchScreen';
import ListMainScreen from './Components/ListMainProduct';
import CCFormScreen from './Screens/CCFormScreen'
import AdminNotificationScreen from './Screens/AdminNotificationScreen'
import SplashDonePayment from './Screens/SplashDonePayment'

const Stack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <Stack.Navigator headerMode='none' initialRouteName='Login'>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="CreateProduct" component={CreateProductScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="MyProduct" component={MyProductScreen} />
    <Stack.Screen name="MyProduct2" component={MyProductScreen2} />
    <Stack.Screen name="EditProduct" component={EditProductScreen} />
    <Stack.Screen name="DeleteProduct" component={DeleteProductScreen} />
    <Stack.Screen name="ListProductComponent" component={ListProductComponent} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
    <Stack.Screen name="Notification" component={NotificationScreen} />
    <Stack.Screen name="MyCart" component={MyCartScreen} />
    <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
    <Stack.Screen name="AdminMainScreen" component={AdminMainScreen} />
    <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />
    <Stack.Screen name="AdminAboutMeScreen" component={AdminAboutMeScreen} />
    <Stack.Screen name="AdminManagementUser" component={AdminManagementUser} />
    <Stack.Screen name="FormScreen2" component={FormScreen2} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} />
    <Stack.Screen name="ListMainScreen" component={ListMainScreen} />
    <Stack.Screen name="CCFormScreen" component={CCFormScreen} />
    <Stack.Screen name="AdminNotificationScreen" component={AdminNotificationScreen} />
    <Stack.Screen name="SplashDonePayment" component={SplashDonePayment} />
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
