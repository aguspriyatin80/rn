import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import React from 'react'


export default function NotificationScreen(props) {


    return (
        <View>
            <View style={{ backgroundColor: '#F7F6ED', width: '100%', height: '100%' }}>
                <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: '6%' }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('HomeScreen')}
                        style={{ marginLeft: '3%', marginTop: 7 }}>
                        <Image source={require('../Sample/img/Vector.png')} style={{ height: 27, width: 30, marginTop: 3 }} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: '30%', fontSize: 18, marginTop: 8 }}>Notification</Text>
                    <TouchableOpacity>
                        <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: '50%', height: 20, width: 20, marginTop: 10 }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.smallContainer}>
                    <Image source={require('../Sample/img/Banana.png')} style={{ width: 70, height: 70 }} />
                    <View style={{ marginTop: '3%', marginLeft: '10%' }}>
                        <Text style={{ fontSize: 20, color: 'black' }}>Pisang Banana</Text>
                        <Text style={{ fontSize: 17, color: '#DE884A' }}>RP. 12.000,-</Text>
                        <View style={{ marginTop: '3%' }}>
                            <Text style={{ color: '#367874', fontSize: 17, fontWeight: 'bold' }}>Have the package arrived?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => Alert.alert('Thank you for buying out product')} >
                                    <Image source={require('../Sample/img/yes.png')} style={{ width: 30, height: 30, marginTop: '5%', tintColor: '#367874' }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Alert.alert('Please wait for your product')} >
                                    <Image source={require('../Sample/img/no.png')} style={{ width: 30, height: 30, marginTop: '1.5%', tintColor: '#367874', marginLeft: '68%' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    toUpload: {
        margin: '4%',
        height: '80%',
        width: '40%',
        borderRadius: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#367874',
        color: '#367874',
    },
    buttonSave: {
        alignSelf: 'center',
        backgroundColor: '#367874',
        padding: 10,
        marginTop: '5%',
        height: 40,
        width: '100%',
        borderRadius: 7,
        textAlign: 'center'
    },

    smallContainer: {
        width: '90%',
        height: '20%',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10
    },
})