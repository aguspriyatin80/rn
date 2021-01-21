import { View, Text, Image, TouchableOpacity, Searchbar, StyleSheet, Picker } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import React, { useState } from "react";


export default function FormScreen2(props) {

    const [selectedValue, setSelectedValue] = useState("");
    const [zipCode, setZipCode] = useState('')
    const Address = [{
        Province: 'DKI Jakarta', kota: [{ city: 'Jakarta Utara', zip: "123" }, { city: 'Jakarta Selatan', zip: "321" }]
    }, {
        Province: 'Jawa Barat', kota: [{ city: 'Bandung', zip: "111" }, { city: 'Bekasi', zip: "333" }]
    }]

    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')

    console.log('kota ini:', city)
    return (
        <View>
            <View style={styles.bgContainer}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('MyCart')}
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
                        <Text style={{ fontSize: 20 }}>Shipping Address</Text>
                    </View>
                    <View style={{ marginLeft: '3%' }}>
                        <Text>Full Name</Text>
                        <TextInput style={styles.txtInput} />

                        <Text>Address</Text>
                        <TextInput style={styles.txtInput} />

                        {/* <Text>City</Text>
                        <TextInput style={styles.txtInput} /> */}


                        <Text>Province</Text>
                        <Picker
                            selectedValue={province}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedValue(itemValue)
                                setProvince(itemValue)
                                console.log('alamat', Address.find((e) => e.Province === itemValue))
                            }}>
                            {Address.map((e) => {
                                return (
                                    <Picker.item value={e.Province} label={e.Province} />
                                )
                            })}
                        </Picker>

                        <Text>City</Text>
                        <Picker
                            selectedValue={zipCode}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => {
                                setZipCode(itemValue)
                                console.log(itemValue)
                            }}>
                            {province !== `` && Address.find((e) => e.Province === province).kota.map((e) => {
                                return (
                                    <Picker.item value={e.zip} label={e.city} />
                                )
                            })}
                        </Picker>

                        <Text>Zip Code</Text>
                        <TextInput style={styles.txtInput} value={zipCode} />
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: '15%', backgroundColor: '#F7F6ED' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 19, marginLeft: '3%' }}>Amount to pay:</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#DE884A', marginRight: '3%' }}>12.000,-</Text>
                </View>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('CCFormScreen')}
                    style={styles.buttonSave}>
                    <Text style={styles.txtPurchase}>Purchase</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: '8%'
    },

    bodyContainer: {
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '10%'
    },

    txtInput: {
        borderBottomWidth: 1,
        width: '95%',
    },

    buttonSave: {
        alignSelf: 'center',
        backgroundColor: '#367874',
        padding: 10,
        marginTop: '5%',
        height: 40,
        width: '90%',
        borderRadius: 7,
        textAlign: 'center'
    },

    menu: {
        marginLeft: '52%',
        height: 20,
        width: 20,
        marginTop: 15
    },

    back: {
        height: 19,
        width: 24,
        marginTop: 8
    },

    bgContainer: {
        backgroundColor: '#F7F6ED',
        width: '100%',
        height: '86%'
    },

    logoText: {
        height: 45,
        width: 89,
        marginLeft: '29.5%',
        marginTop: 5
    },

    txtPurchase: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    },

    paypal: {
        width: 150,
        height: 60,
        marginLeft: '19%',
    }

})
