import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GET_PRODUCTS_URL } from "../Redux/constants/general";


export default function MyProductScreen2(props) {
    const [data, setData] = useState([])

    const getProducts = async (url) => {
        const r = await Axios.get(url)
            .then(r => setData(r.data.posts))
    }

    useEffect(() => {
        getProducts(GET_PRODUCTS_URL)
    }, [])

    console.log('data : ',data)



    const ListProductComponent = ({ product }) => {
        return (
            <View>
                <ImageBackground style={styles.bigContainer} >

                    <View style={styles.smallContainer}>
                        <Image source={{ uri: product.product_image }} style={{ width: 70, height: 70 }} />
                        <View>
                            <Text style={{ fontSize: 20, color: 'black', width: 250, marginLeft: 10 }}>{product.product_name}</Text>
                            <Text style={{ fontSize: 17, color: '#DE884A', marginLeft: 10 }}>Rp {product.price}.-</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: '#F9E0C2', width: '45%', padding: 5, marginLeft: '5%' }}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('EditProduct', { product: product })}>
                                <Image source={require('../Sample/img/edit.png')} style={styles.picLogo} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: '#D65445', width: '45%', padding: 5, marginRight: '20%' }}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('DeleteProduct', { product: product })}
                                >
                                <Image source={require('../Sample/img/delete.png')} style={styles.picLogo} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    return (
        <View>
            <ImageBackground style={{ flexDirection: 'row', width: '100%', height: '7%' }}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('AdminHomeScreen')}>
                    <Image source={require('../Sample/img/back.png')} style={{ marginLeft: 10, height: 20, width: 25, marginTop: 11 }} />
                </TouchableOpacity>
                <Text style={{ marginLeft: '27%', fontSize: 20, marginTop: '2%' }}>My Products</Text>
                <TouchableOpacity>
                    <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: '47%', height: 20, width: 25, marginTop: '6%' }} />
                </TouchableOpacity>
            </ImageBackground>
            <FlatList
                data={data}
                style={{ height: '85%' }}
                keyExtractor={(key) => key._id}
                renderItem={({ item }) => <ListProductComponent product={item} />}
            />

            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('CreateProduct')}
                    style={styles.buttonSave}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Create Product</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    bigContainer: {
        width: '100%',
        backgroundColor: '#F7F6ED'
    },

    smallContainer: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10
    },
    picLogo: {
        width: 26,
        height: 26,
        alignSelf: 'center',
        marginTop: '3%'
    },

    buttonSave: {
        alignSelf: 'center',
        backgroundColor: '#367874',
        padding: 10,
        marginTop: '3%',
        height: 40,
        width: '90%',
        borderRadius: 7,
        textAlign: 'center'
    }
})