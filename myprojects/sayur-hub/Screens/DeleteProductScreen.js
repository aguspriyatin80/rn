import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function DeleteProductScreen(props) {
    return (
        <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: '#F7F6ED' }}>
            <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: '6%' }}>
                <TouchableOpacity>
                    <Image source={require('../Sample/img/back.png')} style={{ marginLeft: 10, height: 25, width: 25, marginTop: 7 }} />
                </TouchableOpacity>
                <Text style={{ marginLeft: 110, fontSize: 18, marginTop: 5 }}>Delete Product</Text>
                <TouchableOpacity>
                    <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: '45%', height: 20, width: 20, marginTop: 10 }} />
                </TouchableOpacity>
            </View>

            <View style={{ height: '2%' }} />

            <View style={{ height: '82%', backgroundColor: '#FFFFFF' }}>

                <View style={{ flexDirection: 'row', height: '25%' }}>
                    <View style={{ borderWidth: 1, width: '40%', marginLeft: '5%', marginTop: '2%' }}>
                        <Image source={{ uri: props.route.params.product.product_image }} style={styles.toUploaded} />
                    </View>
                    <TouchableOpacity
                        style={{ alignSelf: 'flex-end' }}>
                        <Text style={styles.toUpload}>Upload Image</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ height: '72%', marginTop: '2%' }} >
                        <Text style={{ marginLeft: '5%' }}>Product Name</Text>
                        <TextInput style={styles.txtInput} >{props.route.params.product.product_name}</TextInput>

                        <Text style={{ marginLeft: '5%' }}>Category</Text>
                        <TextInput style={styles.txtInput} >{props.route.params.product.category}</TextInput>

                        <Text style={{ marginLeft: '5%' }}>Price</Text>
                        <TextInput style={styles.txtInput} >Rp. {props.route.params.product.price},-</TextInput>

                        <Text style={{ marginLeft: '5%' }}>Discount</Text>
                        <TextInput style={styles.txtInput} >50%</TextInput>

                        <Text style={{ marginLeft: '5%' }}>Stock</Text>
                        <TextInput style={styles.txtInput} >{props.route.params.product.stock}</TextInput>

                        <Text style={{ marginLeft: '5%' }}>Weight</Text>
                        <TextInput style={styles.txtInput} >{props.route.params.product.weight} Kg</TextInput>

                        <Text style={{ marginLeft: '5%' }}>Farmer Supplier</Text>
                        <TextInput style={styles.txtInput} >{props.route.params.product.farmer_supllier}</TextInput>

                        <Text style={{ marginLeft: '5%' }}>Nutrition</Text>
                        <TextInput multiline={true} style={styles.txtNut} >{props.route.params.product.nutrition}</TextInput>

                        <Text style={{ marginLeft: '5%' }}>Description</Text>
                        <TextInput multiline={true} style={styles.txtDesc} >{props.route.params.product.description}</TextInput>
                    </View>

                </ScrollView>
            </View>

            <View style={{height: '10%'}}>
            <TouchableOpacity
                style={styles.buttonSave}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Delete Product</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    toUpload: {
        alignSelf: 'center',
        padding: 10,
        height: 40,
        width: 150,
        borderRadius: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#367874',
        color: '#367874',
        marginTop: '50%',
        marginLeft: '12%'
    },

    toUploaded: {
        width: '50%',
        height: '70%',
        marginTop: '10%',
        marginLeft: '20%',
    },

    txtInput: {
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 5,
        color: 'black',
        borderColor: 'black',
        width: '90%',
        alignSelf: 'center',
        height: 40
    },

    txtDesc: {
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 5,
        color: 'black',
        borderColor: 'black',
        width: '90%',
        alignSelf: 'center',
        height: 120,
    },

    txtNut: {
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 5,
        color: 'black',
        borderColor: 'black',
        width: '90%',
        alignSelf: 'center',
        height: 80,
    },

    buttonSave: {
        alignSelf: 'center',
        backgroundColor: '#D65445',
        padding: 7,
        marginTop: '5%',
        width: '90%',
        borderRadius: 5,
        textAlign: 'center'
    }
})
