import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput, TouchableOpacity, View, Text, Image, ImageBackground, Modal, StyleSheet, TouchableHighlight, FlatList, Alert } from 'react-native'
import { Searchbar } from 'react-native-paper';
import staremptyImage from '../Sample/img/starempty.png'
import starfilledImage from '../Sample/img/starfilled.png'
import { useSelector } from 'react-redux';
import Axios from 'axios'
import { GET_USER_URL } from '../Redux/constants/general'
import qs from "qs";
const url_allReviews = 'https://pacific-oasis-23064.herokuapp.com/reviews/product/'
const url_cartData = 'https://pacific-oasis-23064.herokuapp.com/cart/view'
const url_ratingByProduct = 'https://pacific-oasis-23064.herokuapp.com/reviews/rating/'

export default function ProductDetails(props) {
    const [rating, setRating] = useState(null)
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [totalQty, setTotalQty] = useState(null)
    //const [cartData, setCartData] = useState([])

    const [modalVisible, setModalVisible] = useState(false);

    const [count, setCount] = useState(null);
    const [data, setData] = useState([])
    const [allReview, setAllReview] = useState([])
    const [averageRating, setAverageRating] = useState(null)

    //const [rating,setRating]  = useState([])
    const [review, setReview] = useState([])

    const token = useSelector((state) => state.UserAuthReducers.token)
    //const onPlus = () => setCount(count + 1);
    //const onMinus = () => setCount(count - 1);
    const getTotalQty = (key, url) => {
        Axios.get(url, {
            headers: { token: key }
        })
            .then(r => setTotalQty(r.data.cart.items.length))
            //.then(r => setTotalQty(r.data.cart.items))
            
          //  console.log('jumlah produk dalam cart data : ',totalQty)   
           // console.log('jumlah produk props qty: ',props.route.params.qty)   
            
            //console.log('data cart : ',totalQty)   
                 
    }
    useEffect(() => {
        getUserData(token, GET_USER_URL)
        getAllReviews(url_allReviews, props.route.params.product._id)
        getTotalQty(token, url_cartData)
        getAverageRatingByProduct(url_ratingByProduct, props.route.params.product._id)
    }, [])

    //console.log('all reviews :')
    const getUserData = (key, url) => {
        Axios.get(url, {
            headers: { token: key }
        })
            .then(r => setData(r.data))
    }
    const getAverageRatingByProduct = (url, productId) => {
        Axios.get(url + productId)
            .then(r => setAverageRating(r.data.average_rating))
        //console.log('average rating : ', averageRating)
    }
    const getAllReviews = (url, productId) => {
        Axios.get(url + productId)
            .then(r => setAllReview(r.data.data))
    }

    const HandleSubmitReview = async () => {
        //alert('hai')
        try {
            const body = qs.stringify({
                review,
                rating
            });
            console.log('token :', token)
            console.log('body :', body)
            console.log('produk id :', props.route.params.product._id)
            const r = await Axios({
                method: "post",
                url: 'https://pacific-oasis-23064.herokuapp.com/reviews/create/' + props.route.params.product._id,
                data: body,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    token: token,
                },
            })


                // const r = await Axios.post
                //         ('https://pacific-oasis-23064.herokuapp.com/reviews/create/'+props.route.params.product._id,

                //             {
                //                 data : body,
                //                 headers: {
                //                     token: token,
                //                     "Content-Type": "multipart/form-data"
                //                 },

                //             })
                .then(r => { return console.log('response : ', r) })
                .catch(e => { return console.log('catch axios :', e) })
        } catch (error) {
            console.log('hasil : ', r)
            console.log('catch final : ', error)
        }
    }
    const ListReview = ({ reviews }) => {


        return (
            <View style={{ flex: 1 }}>
                {/* <Text style={{ fontSize: 16, fontWeight: 'bold' }}> All Reviews</Text> */}
                <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                    <Image source={{ uri: reviews.user.profile_image }} style={{ width: 40, height: 40, marginLeft: '3%' }} />
                    <View style={{alignContent: 'space-between'}}>
                        <Text style={{ marginLeft: '5%', marginTop: '3.5%' }}>{reviews.user.full_name}</Text>
                        <Text>
                            <View style={{ flexDirection: 'row' }}>
                                {[...Array(5)].map((star, i) => {
                                    return (
                                        <View>
                                            <Image style={{ width: 25, height: 25 }}
                                                source={i + 1 <= reviews.rating ? starfilledImage : staremptyImage} />
                                        </View>)
                                })}
                            </View>
                        </Text>
                    </View>
                </View>

                <View style={styles.comment}>
                    <Text>{reviews.review}</Text>
                </View>
            </View>


        )
    }
    const handleAddToCart = async () => {
        //alert('proses')
        console.log('produk id :', props.route.params.product._id)
        console.log(' token : ', token)

        try {
            const r = await Axios({
                method: "POST",
                url: "https://pacific-oasis-23064.herokuapp.com/cart/add/" + props.route.params.product._id,
                headers: {
                    token: token
                }
            })
                .then(r => { return console.log('response : ', r) })
                .catch(e => { return console.log('catch axios :', e) })
        } catch (error) {
            //console.log('response error : ', r)
            console.log('catch error : ', error)
        }
        
        getTotalQty(token, url_cartData) 
        
    }


    console.log('total qty dalam cart data : ',totalQty)   
    console.log('total qty dari my cart: ',props.route.params.qty)   
    return (
        <View>
            <ScrollView style={{ width: '100%', height: '90%' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Main')}
                        style={{ marginTop: 15, marginLeft: '5%' }}>
                        <Image source={require('../Sample/img/back.png')} style={{ width: 20, height: 20, marginRight: '5%' }} />
                    </TouchableOpacity>

                    <Searchbar
                        icon={require('../Sample/img/loupe.png')}
                        placeholder="Search Products.."

                        onChangeText={onChangeSearch}
                        style={{ width: '70%' }}
                        value={searchQuery}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('MyCart',{qty:totalQty})
                        }}
                        style={{ position: 'relative', marginTop: 10, marginLeft: '5%' }}>
                        <Image source={require('../Sample/img/cart.png')} style={{ width: 30, height: 30, tintColor: '#367874', marginRight: 40 }} />
                        <Text style={{ right: 60, position: 'absolute', textAlign: 'center', 
                        fontSize: 20, color: 'white', borderRadius: 20, backgroundColor: 'green', width: 30, height: 30 }}>
                            {
                            props.route.params.qty >= 0 ? props.route.params.qty : totalQty
                            }</Text>
                    </TouchableOpacity>
                </View>
                <ImageBackground style={{}}>

                    <Image source={{ uri: props.route.params.product.product_image }} style={{ width: '100%', height: 200 }} />
                </ImageBackground>

                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', width: 230 }}>
                        {props.route.params.product.product_name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {[...Array(5)].map((star, i) => {
                            return (
                                <View>
                                    <Image style={{ width: 30, height: 30 }}
                                        source={i + 1 <= averageRating ? starfilledImage : staremptyImage} />
                                </View>)
                        })}
                    </View>
                </View>

                <ImageBackground style={{ backgroundColor: '#bdc3c7', width: '90%', height: 90, alignSelf: 'center', borderRadius: 8, padding: 10 }}>
                    <Text style={{ fontSize: 16, textDecorationLine: 'line-through' }}>RP. {props.route.params.product.price}</Text>
                    <Text style={{ fontSize: 30, color: '#DE884A' }}>Rp. {props.route.params.product.actualPrice}.-</Text>
                </ImageBackground>

                <ImageBackground style={{ width: '100%', height: '3%', backgroundColor: '#F7F6ED', marginTop: '3%', marginBottom: '2%' }} />


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >

                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ marginTop: '20%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    {[...Array(5)].map((star, i) => {
                                        return (
                                            <TouchableOpacity onPress={() => {
                                                setRating(i + 1)
                                            }} >
                                                <Image style={{ width: 60, height: 60 }}
                                                    source={i + 1 <= rating ? starfilledImage : staremptyImage} />
                                            </TouchableOpacity>)
                                    })}
                                </View>

                            </View>
                            <View style={{ width: '105%', height: '40%', borderWidth: 1, marginTop: '5%', borderRadius: 20 }}>
                                <TextInput
                                    placeholder="Add your review.."
                                    placeholderTextColor='black'
                                    multiline={true}
                                    maxLength={240}
                                    onChangeText={(value) => setReview(value)}
                                />
                            </View>
                            <TouchableHighlight
                                style={{ ...styles.openButton2, backgroundColor: "#2196F3" }}
                                onPress={() => {

                                    setModalVisible(!modalVisible);
                           
                                    HandleSubmitReview()
                                }}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        setModalVisible(true);
                    }}
                >

                    <Text style={styles.textStyle}>Review this product</Text>
                </TouchableHighlight>

                <FlatList
                    data={allReview}

                    keyExtractor={(key) => key._id}
                    renderItem={({ item }) =>

                        <ListReview reviews={item} />
                    } />

            </ScrollView>
            <View>
                <View style={{ marginLeft: '7%', marginTop: '5%', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleAddToCart()
                            Alert.alert(props.route.params.product.product_name + ' has been added to your cart')
                        }}
                        style={{ backgroundColor: '#BBE4D8', flexDirection: 'row', padding: 10, marginRight: '10%', borderRadius: 5, width: '45%' }}>
                        <Image source={require('../Sample/img/cart.png')} style={{ width: 20, height: 20, tintColor: '#367874', marginRight: 20 }} />
                        <Text style={{ color: '#367874' }}>ADD TO CART</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: '100%',
        height: '107%',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#e67e22",
        borderRadius: 8,
        padding: 10,
        elevation: 2,
        width: '50%',
        alignSelf: 'center',
    },

    openButton2: {
        backgroundColor: "#e67e22",
        borderRadius: 8,
        padding: 10,
        elevation: 2,
        width: '50%',
        alignSelf: 'center',
        marginTop: '50%',
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    comment: {
        width: '80%',
        height: '40%',
        backgroundColor: '#bdc3c7',
        marginLeft: '15%',
        marginBottom: '20%',
        padding: 5,
        borderRadius: 5
    },
});
