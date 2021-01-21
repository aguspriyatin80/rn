import React from 'react'
import { View, Text } from 'react-native'


const UserReviewScreen = () => { 
    return (
        <View>
            <Text>hai</Text>
        </View>

    )

}
    
const initialState =  {
    firstName :'fandy',
    lastName :'almero'
}
    
const testReducer = (state = initialState) => {
    return state
}

module.exports = {testReducer,UserReviewScreen}
