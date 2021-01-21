import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import back from './../Sample/img/back.png'
import Vector from './../Sample/img/Vector.png'
import { useSelector } from 'react-redux'

export default function AdminAboutMeScreen(props) {
  return (

    <View>
      <View style={styles.imgBackground1}>
        <View>
          <Image source={Vector} style={styles.logoImage} />
        </View>
      </View>

      <View style={styles.imgBackground2}>
        <Image source={require('../Sample/img/robert.png')} style={styles.imageRobert} />
        <Text>Robert E.O Speedwagon</Text>
      </View>

      <View style={styles.divider} />

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('MyProduct2')}
          style={{ marginBottom: 6 }}>
          <Text>My Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AdminManagementUser')}
          style={{ marginBottom: 6 }}>
          <Text>Management User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TransactionHistory')}
          style={{ margin: 6 }}>
          <Text>Transaction History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AdminNotificationScreen')}
          style={{ margin: 6 }}>
          <Text>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('CreateProduct')}
          style={{ margin: 6 }}>
          <Text>Sell Product</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={{ margin: 5 }}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 5 }}>
          <Text>Browse</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('AdminLogin')}
          style={styles.buttonLogOut}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Log Out</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  imgBackground1: {
    marginTop: '3%',
    marginLeft: '3%'
  },

  imgBackground2: {
    width: '100%',
    height: '85%',
  },

  logoBack: {
    height: 20,
    width: 20,
    marginLeft: '5%'
  },

  logoImage: {
    height: 30,
    width: 32,
  },

  imgBackground2: {
    alignItems: 'center',
    alignSelf: 'center',

  },

  imageRobert: {
    width: 70,
    height: 70,
    marginTop: 10,
    marginBottom: 10
  },

  divider: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    margin: 20,
    borderBottomColor: 'black'
  },

  toProfile: {
    alignSelf: 'center',
    padding: 10,
    marginBottom: 15,
    height: 40,
    width: 300,
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    color: 'orange'
  },

  buttonLogOut: {
    alignSelf: 'center',
    backgroundColor: '#D65445',
    padding: 10,
    marginTop: '45%',
    height: 40,
    width: 250,
    borderRadius: 50,
    textAlign: 'center'
  }


})