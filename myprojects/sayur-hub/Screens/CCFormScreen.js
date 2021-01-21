import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'

export default function CCFormScreen(props) {
    return (
        <View>
            <View style={styles.bgContainer}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('FormScreen2')}
                        style={{ marginLeft: '3%', marginTop: 7 }}>
                        <Image source={require('../Sample/img/back.png')} style={styles.back} />
                    </TouchableOpacity>
                    <Image source={require('../Sample/img/logo-text.png')} style={styles.logoText} />
                    <TouchableOpacity>
                        <Image source={require('../Sample/img/menu.png')} style={styles.menu} />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.bodyContainer}>
                        <Text style={{ fontSize: 20 }}>Payment</Text>
                    </View>
                    <View style={{ marginLeft: '3%' }}>
                        <Text>Card Holder Name</Text>
                        <TextInput style={styles.txtInput} />

                        <Text>Card Number</Text>
                        <TextInput style={styles.txtInput} />
                        <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: '5%' }}>
                            <Text>Exp Month</Text>
                            <TextInput style={styles.txtInputSmall} />

                            <Text>Exp Year</Text>
                            <TextInput style={styles.txtInputSmall} />
                        </View>
                        <View>
                            <Text>CVC</Text>
                            <TextInput style={styles.txtInputSmall2} />
                        </View>
                    </View>

                </View>
                <Image source={require('../Sample/img/visa.png')} style={{ width: '25%', height: '6%', marginTop: '38%', marginLeft: '3%' }} />
            </View>
            <View Image style={{ width: '100%', height: '15%', backgroundColor: '#FFFFFF' }} style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Amount to pay:</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#DE884A' }}>Rp12.000</Text>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('SplashDonePayment')}
                    style={styles.buttonSave}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Purchase</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: '#F7F6ED',
        width: '100%',
        height: '85%'
    },

    headerContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: '9%'
    },

    menu: {
        marginLeft: '52%',
        height: 22,
        width: 22,
        marginTop: 15
    },

    back: {
        height: 19,
        width: 24,
        marginTop: 8
    },

    logoText: {
        height: 45,
        width: 89,
        marginLeft: '29.5%',
        marginTop: 5
    },

    txtInput: {
        borderBottomWidth: 1,
        width: '95%',
        marginBottom: '1%'
    },

    txtInputSmall: {
        borderBottomWidth: 1,
        width: '30%',
        marginBottom: '1%',
    },

    txtInputSmall2: {
        borderBottomWidth: 0.9,
        width: '30%',
        marginBottom: '1%',
        marginLeft: '17%'
    },

    bodyContainer: {
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '10%'
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
})