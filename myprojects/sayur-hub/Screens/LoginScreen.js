import React, { Component, useState, useEffect } from 'react';
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuth } from '../Redux/actions/UserAuthActions'

const LoginScreen = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const dispatch = useDispatch()


  useEffect(() => {
    //dispatch(getUserAuth(email,password) )

  }, [])

  const handleOnLogin = (token) => {
    console.log('press login')
    dispatch(getUserAuth(email, password))
      .then((r) => {
        r ? props.navigation.navigate('Main', { status: setStatus('Log Out') }) :
          props.navigation.navigate('Login')
      })
  }

  return (
    <View>
      <ImageBackground style={styles.imageBackground1}>
        <Image source={require('../Sample/img/logo-text.png')} style={styles.imageLogo} />
      </ImageBackground>

      <ImageBackground style={{ backgroundColor: '#F7F6ED' }}>

        <ImageBackground style={{ height: '20%', width: '100%' }}>
          <View>
            <Image source={require('../Sample/img/gambar.png')}
              style={styles.imageBody} />
          </View>
        </ImageBackground>

        <ImageBackground style={{}}>
          <ImageBackground style={styles.imageBackground2}>
            <View style={{ backgroundColor: 'white', padding: 20, width: '90%', alignSelf: 'center' }}>
              <Text style={styles.headerSignIn}>Sign In</Text>
              <Text style={styles.fillText}>Email</Text>
              <TextInput
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.txtInput} />

              <Text style={styles.fillText}>Password</Text>
              <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                style={styles.txtInput} secureTextEntry={true} />

              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => {
                  handleOnLogin()
                }} >
                <Text style={styles.txtSignin}>Sign In</Text>
              </TouchableOpacity>

              <View style={{ alignSelf: 'center', flexDirection: 'row' }} >
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Register')}>
                  <Text style={{ color: '#4f6e65' }}> Sign Up</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignSelf: 'center', flexDirection: 'row' }} >
                <Text>Are you an Admin?</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('AdminLogin')}>
                  <Text style={{ color: '#4f6e65' }}> Sign In</Text>
                </TouchableOpacity>
              </View>

            </View>
          </ImageBackground>

        </ImageBackground>
        <ImageBackground style={{ width: '100%' }}>
          <View>
            <View style={{ borderTopWidth: 1, width: '90%', alignSelf: 'center', borderTopColor: '#C4C4C4' }}></View>
            <Text style={{ color: '#367874', alignSelf: 'center' }}>2020, SayurHub.</Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>

  )
}

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  imageBody: {
    width: 220,
    height: 220,
    alignSelf: 'flex-start'
  },

  headerSignIn: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center'
  },

  imageLogo: {
    height: 50,
    width: 95,
    alignSelf: 'center',
    marginTop: 10
  },

  buttonLogin: {
    alignSelf: 'center',
    backgroundColor: '#BBE4D8',
    padding: 10,
    marginBottom: 15,
    height: 40,
    width: 280,
    borderRadius: 5,
    textAlign: 'center'
  },

  fillText: {
    color: 'black',
    marginBottom: 3
  },

  container: {
    flex: 1,
    justifyContent: "center"
  },

  imageBackground1: {
    width: width,
    height: '8%',
  },

  imageBackground2: {
    width: '100%',
    height: '70%',
  },

  textPress: {
    alignSelf: 'center',
    marginTop: 8,
  },

  txtInput: {
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'black',
    width: '98%',
    alignSelf: 'center',
    height: 40
  },

  txtSignin: {
    textAlign: 'center',
    color: 'black'
  },

})

export default LoginScreen;
