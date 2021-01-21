import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Searchbar } from 'react-native-paper';

export default function SearchScreen(props) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [data, setData] = useState([])

    return (
        <View>
            <View style={{ backgroundColor: '#F7F6ED', width: '100%', height: '100%' }}>
                <ImageBackground style={{ backgroundColor: 'white', width: '100%', height: '8%', padding: 5, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image source={require('../Sample/img/back.png')} style={{ width: 23, height: 23, marginRight: '1%', marginLeft: '10%', marginTop: '13%' }} />
                        </TouchableOpacity>
                        <Searchbar
                            icon={require('../Sample/img/loupe.png')}
                            placeholder="Search Products.."
                            onChangeText={onChangeSearch}
                            style={{ width: '70%', height: '90%' }}
                            value={searchQuery}
                        />

                        <TouchableOpacity style={{ marginTop: 10, marginLeft: '5%' }}>
                            <Image source={require('../Sample/img/menu.png')} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <View style={{ width: '100%', height: '92%', padding: 10 }}>
                    <Text style={{fontSize: 30}}>Your Result:</Text>
                    <Text style={{fontSize: 20}}>Sweet Chery</Text>
                    <View style={{ backgroundColor: 'white', width: '40%', height: '35%', borderRadius: 10, marginTop: '8%', marginLeft: '3%' }}>
                        <Image source={require('../Sample/img/Chery.png')} style={{ height: 90, width: 110 }} />
                        <Text style={{ textAlign: 'center', fontSize: 18, }}>Sweet Cherry</Text>
                        <Text style={{marginTop: '20%', color: '#DE884A', fontSize: 20, textAlign: 'center'}}>Rp. 12.000</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('MyCart')}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#BBE4D8', width: '85%', height: '37%', padding: 5, borderRadius: 5, alignSelf: 'center' }}>
                                <Image source={require('../Sample/img/cart.png')} style={{ width: 20, height: 20, tintColor: '#367874' }} />
                                <Text style={{ color: '#367874' }}> ADD TO CART</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
