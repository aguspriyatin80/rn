import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 3000)
  }, [navigation])
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Image source={require('../Sample/img/logo-text.png')} style={styles.imageLogo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  imageLogo: {
    width: 175,
    height: 85,
    alignSelf: 'center',
    marginTop: '75%',
  },

  textLogo: {
    alignSelf: 'center',
    fontSize: 18
  }
})