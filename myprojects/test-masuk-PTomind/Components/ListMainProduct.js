import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'

export default function ListMainProduct(props) {
    return (
        <View>
            <ImageBackground source={require('../Sample/img/Rectangle35.png')} style={{ width: '110%', height: 250, padding: 20, flexDirection: 'row' }}>
                <View style={{ backgroundColor: 'white', width: '40%', height: '100%', borderRadius: 10 }}>
                    <View>
                        <Image source={require('../Sample/img/Chery.png')} style={{ width: 120, height: 100, marginLeft: '3%' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: '7%' }}>Small Tomato</Text>
                        <Text style={{ marginTop: '10%', textAlign: 'center', color: '#DE884A' }}>Rp.12.000.-</Text>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', backgroundColor: '#BBE4D8', width: '75%', height: '37%', padding: 5, borderRadius: 5, alignSelf: 'center' }}>
                                <Image source={require('../Sample/img/cart.png')} style={{ width: 20, height: 20, tintColor: '#367874' }} />
                                <Text style={{ color: '#367874' }}> ADD TO CART</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'white', width: '40%', height: '100%', borderRadius: 10, marginLeft: '5%' }}>
                        <Image source={require('../Sample/img/Banana.png')} style={{ width: 120, height: 100, marginLeft: '3%' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: '7%' }}>Banana Pisang</Text>
                        <Text style={{ marginTop: '10%', textAlign: 'center', color: '#DE884A' }}>Rp.10.000.-</Text>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', backgroundColor: '#BBE4D8', width: '75%', height: '37%', padding: 5, borderRadius: 5, alignSelf: 'center' }}>
                                <Image source={require('../Sample/img/cart.png')} style={{ width: 20, height: 20, tintColor: '#367874' }} />
                                <Text style={{ color: '#367874' }}> ADD TO CART</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'white', width: '40%', height: '100%', borderRadius: 10, marginLeft: '5%' }}>
                        <Image source={require('../Sample/img/Banana.png')} style={{ width: 120, height: 100, marginLeft: '3%' }} />
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginBottom: '7%' }}>Banana Pisang</Text>
                        <Text style={{ marginTop: '10%', textAlign: 'center', color: '#DE884A' }}>Rp.10.000.-</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('MyCart')}
                        >
                            <View style={{ flexDirection: 'row', backgroundColor: '#BBE4D8', width: '75%', height: '37%', padding: 5, borderRadius: 5, alignSelf: 'center' }}>
                                <Image source={require('../Sample/img/cart.png')} style={{ width: 20, height: 20, tintColor: '#367874' }} />
                                <Text style={{ color: '#367874' }}> ADD TO CART</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
