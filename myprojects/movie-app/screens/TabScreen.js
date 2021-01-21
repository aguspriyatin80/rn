import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import EditProfileScreen from './EditProfileScreen';
// import UserReviewScreen from './UserReviewScreen';
// import HomeScreen from './HomeScreen';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {getNowPlayingAction} from '../actions/movieActions'
import {useDispatch,useSelector} from  'react-redux'

const Tab = createBottomTabNavigator()

const TabScreen = (props) => {
    
    const dispatch = useDispatch()
    useEffect  (()=>{
        dispatch(getNowPlayingAction())
    },[]) 
    
    
    const test = useSelector((state)  => 
    state)  

    console.log(test)
    
    
    return (
                <View>
                   <Text>selesai</Text>  
                </View>
       
       
        //    <View>
        //    <Tab.Navigator initialRouteName='Home'> 
        //         <Tab.Screen name="Comment" component={UserReviewScreen } options={{
        //                  tabBarLabel: 'Review',
        //                  tabBarIcon: () => (
        //                 <FontAwesome5 name={'comment'} color={'black'} size={24} />
        //   ),
        // } } />
        //         <Tab.Screen name="Home" component={HomeScreen} />
        //         <Tab.Screen name="Profile" component={EditProfileScreen} />
                
        //     </Tab.Navigator>
            // </View>

       
    )
}




export default TabScreen
