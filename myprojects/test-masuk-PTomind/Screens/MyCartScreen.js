import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TouchableHighlight, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useSelector } from 'react-redux';


const url_cartData = 'https://pacific-oasis-23064.herokuapp.com/cart/view'




export default function MyCartScreen(props) {

    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartId, setCartId] = useState(null)
    //const [productId, setProductId] = useState(null)
    const onPlus = () => setCount(count + 1);
    const onMinus = () => setCount(count - 1);
    const token = useSelector((state) => state.UserAuthReducers.token)
    const [totalQty, setTotalQty] = useState(0)


    const getCartData = (key, url) => {
        Axios.get(url, {
            headers: { token: key }
        })
            .then(r => setData(r.data.cart.items))



    }

    const getTotalPrice = () => {

        let total = 0
        for (let k = 0; k < data.length; k = k + 1) {
            total = total + data[k].price
        }
        return total

    }

    const getTotalQty = (key, url) => {
        Axios.get(url, {
            headers: { token: key }
        })
            .then(r => setTotalQty(r.data.cart.items.length))
    }


    useEffect(() => {
        getCartData(token, url_cartData)
        getCartId(token, url_cartData)
        getTotalQty(token, url_cartData)
    }, [])

    const getCartId = (key, url) => {
        Axios.get(url, {
            headers: { token: key }

        })
            .then(r => setCartId(r.data.cart._id))

    }

    const handleDeleteCartProduct = async (id) => {

        try {

            const r = await Axios({
                method: "delete",
                url: 'https://pacific-oasis-23064.herokuapp.com/cart/delete/' + cartId + '/' + id,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    token: token,
                },
            })
                .then(r => { return console.log('response : ', r) })
                .catch(e => { return console.log('catch axios :', e) })
        } catch (error) {
            console.log('hasil : ', r)
            console.log('catch final : ', error)
        }

        getCartData(token, url_cartData)
        getTotalQty(token, url_cartData)
    }

    const ListProduct = ({ product }) => {

        return (
            <View>
                <ImageBackground style={styles.bigContainer} >


                    <View style={styles.smallContainer}>
                        <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
                        <View>
                            <Text style={{ fontSize: 18, color: 'black', width: 200, marginLeft: 10 }}>{product.name}</Text>
                            <Text style={{ fontSize: 17, color: '#DE884A', marginLeft: 10 }}>Rp. {product.price}.-</Text>

                            <View style={{ marginTop: '3%', borderWidth: 1, borderRadius: 10, flexDirection: 'row', width: '50%', marginLeft: '2%' }}>
                                <View style={{ width: '30%' }}>
                                    <TouchableOpacity onPress={onMinus}>
                                        <Text style={{ color: '#367874', fontSize: 21, textAlign: 'center' }}>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '40%', borderLeftWidth: 1, borderRightWidth: 1 }}>
                                    <Text style={{ textAlign: 'center', marginTop: '7%' }}>{count ? count : 1}</Text>
                                </View>
                                <View style={{ width: '20%' }}>
                                    <TouchableOpacity onPress={onPlus}>
                                        <Text style={{ color: '#367874', fontSize: 21, textAlign: 'center', marginLeft: 7 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => {
                                handleDeleteCartProduct(product.id)
                            }}
                            style={{ backgroundColor: '#D65445', height: '100%', width: '12%', borderRadius: 5 }}>
                            <View>
                                <Image source={require('../Sample/img/delete.png')} style={styles.imgDelete} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    return (
        <View>
            <View style={styles.headerContainer}>

                <TouchableOpacity
                    onPress={() => {

                        props.navigation.navigate('ProductDetails', { qty: totalQty })
                    }}
                    style={{ marginLeft: '3%', marginTop: 7 }}>
                    <Image source={require('../Sample/img/back.png')} style={{ height: 20, width: 25, }} />
                </TouchableOpacity>
                <Text style={{ marginLeft: '30%', fontSize: 18, marginTop: 5 }}>My Cart</Text>
                <TouchableOpacity>
                    <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: '55%', height: 25, width: 25, marginTop: 5 }} />
                </TouchableOpacity>
            </View>


            <FlatList
                style={{ height: '75%' }}
                data={data}
                keyExtractor={(key) => key.id}
                renderItem={({ item }) =>
                    <ListProduct product={item} />
                } />
            <View Image style={{ width: '100%', height: '10%', backgroundColor: '#FFFFFF' }} style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sub Total:</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#DE884A' }}>Rp. {getTotalPrice()},-</Text>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('FormScreen2')}
                    style={styles.buttonSave}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

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

    imgDelete: {
        width: 30,
        height: 30,
        marginTop: '90%',
        tintColor: '#FFFFFF',
        marginLeft: 5
    },

    headerContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: '7%',
        padding: 5,
        marginBottom: '5%'
    },

    bigContainer: {
        width: '100%',
        backgroundColor: '#F7F6ED'
    },

    smallContainer: {
        width: '95%',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 5
    },

})

