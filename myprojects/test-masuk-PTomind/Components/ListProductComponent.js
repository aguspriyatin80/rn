import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GET_PRODUCTS_URL } from "../Redux/constants/general";

const ListProductComponent =(props) =>{
    return(
        <View>
        <ImageBackground style={styles.bigContainer} >
            <View style={styles.smallContainer}>
                <Image source={{ uri: props.product.product_image }} style={{ width: 70, height: 70}} />
                <View>
                    <Text style={{ fontSize: 20, color: 'black' }}>{props.product.product_name}</Text>
                    <Text style={{ fontSize: 17, color: '#DE884A' }}>{props.product.price}-</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ backgroundColor: '#F9E0C2', width: '150%', padding: 5, marginLeft: '20%' }}>
                    <Image source={require('../Sample/img/edit.png')} style={styles.picLogo} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#D65445', width: '90%', padding: 5, marginLeft: '40%' }}>
                    <Image source={require('../Sample/img/delete.png')} style={styles.picLogo} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({

    bigContainer: {
        width: '100%',
        height: '88%',
        backgroundColor: '#F7F6ED'
    },

    smallContainer: {
        width: '90%',
        height: '15%',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10
    },
    picLogo: {
        width: 30,
        height: 30,
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
export default ListProductComponent