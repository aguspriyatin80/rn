import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('CCFormScreen');
    }, 2670)
  }, [navigation])
  return (
    <View style={{ backgroundColor: '#367870', flex: 1, alignItems: 'center' }}>
      <View style={{ alignItems: 'center', width: 250, height: 250, marginTop: '50%' }}>
        <LottieView source={require('../Sample/source/8580-done.json')} autoPlay loop />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 230,
    marginBottom: 20
  },
})
