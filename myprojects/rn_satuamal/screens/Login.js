import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = (props) => {
    const [email,setEmail] =useState(null);
    const [password,setPassword] =useState(null);

    return (
      <View> 
        <Text>Email</Text>
        <TextInput         
          onChangeText = { e=> {  
                                      setEmail(e) 
                                      }}
          style={{width:200 ,backgroundColor:'yellow'}}>              
        </TextInput>
        <Text>Password</Text>
        <TextInput         
          onChangeText = { e=> {  
                                      setPassword(e) 
                                      }}
          style={{width:200 ,backgroundColor:'yellow'}}>              
        </TextInput>        
          <TouchableOpacity
            onPress ={ async() => {
              const r = await Axios.post('https://pacific-oasis-23064.herokuapp.com/user/login',
              {
                  email : email,
                  password: password
              }  )
              console.log('token : ',r.data.token)
              AsyncStorage.setItem('token', r.data.token) 
              // let token = await AsyncStorage.getItem('token');
              // console.log('token Async: ',token)
              props.navigation.navigate("Home");
            }
              
            } 
           >
                <Text>Login</Text>
        </TouchableOpacity>
      
      </View>
    )
  }
  
  export default LoginScreen