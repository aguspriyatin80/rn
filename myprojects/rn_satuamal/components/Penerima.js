import React from 'react'
import { View, Text } from 'react-native'

const Penerima = (props) => {

    return (
        <View>
            <Text>{props.penerima.nama}</Text>
        </View>
    )
}

export default Penerima
