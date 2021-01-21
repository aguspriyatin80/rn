import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableNativeFeedbackComponent } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { set, stopClock } from 'react-native-reanimated'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import { CREATE_PRODUCTS_URL } from "../Redux/constants/general";
import { useSelector } from 'react-redux';
import Axios from 'axios'
import star from '../Sample/img/star.png'
import ImagePicker from 'react-native-image-picker'


export default function CreateProductScreen(props) {
    const [product_name, setProduct_Name] = useState(null)
    const [category, setCategory] = useState(null)
    const [price, setPrice] = useState(null)
    const [stock, setStock] = useState(null)
    const [description, setDescription] = useState(null)
    const [discount, setDiscount] = useState(10)
    const [weight, setWeight] = useState(10)
    const [uri, setUri] = useState(null)
    const [type, setType] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [nutrition, setNutrition] = useState(null)
    const [farmersupplier, setFarmerSupplier] = useState(null)

    const handleUploadImage = () => {
        let options = {
            title: 'Select Avatar',
            cameraType: 'front',
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            }
            setUri(response.uri)
            setFileName(response.fileName)
            setType(response.type)
            console.log('URI :', uri + ' FILE_NAME : '
                + fileName + '  TYPE : ' + type)
            return response
        })


    };

    const token = useSelector((state) => state.UserAuthReducers.token)

    const handleCreateProduct = async () => {

        try {

            const form = new FormData()
            console.log('type Image : ', type)
            console.log('uri image : ', uri)
            console.log('FileName Image : ', uri)

            form.append('product_name', product_name)
            form.append('description', description)
            form.append('category', category)
            form.append('stock', parseInt(stock))
            form.append('price', parseInt(price))
            form.append('discount', parseInt(discount))
            form.append('weight', parseInt(weight))
            form.append('nutrition', nutrition)
            form.append('farmer_supllier', farmersupplier)
            form.append("product_image", {
                name: fileName, type: type, uri: uri
            })

            console.log('data form : ', form)
            console.log('token user id : ', token)
            const r = await Axios.post
                ('https://pacific-oasis-23064.herokuapp.com/admin/product/create',
                    form,
                    {
                        headers: {
                            token: token,
                            "Content-Type": "multipart/form-data"
                        },

                    })
                .then(r => { return console.log('response : ', r) })
                .catch(e => { return console.log('catch axios :', e) })

        } catch (error) {
            console.log('hasil : ', r)
            console.log('catch final : ', error)
        }


    }


    return (

        <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: '#F7F6ED' }}>
            <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: '6%' }}>
                <Image source={require('../Sample/img/Vector.png')} style={{ marginLeft: 10, height: 25, width: 30, marginTop: 7 }} />
                <Text style={{ marginLeft: 110, fontSize: 18, marginTop: 5 }}>Create Product</Text>
                <TouchableOpacity>
                    <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: 90, height: 20, width: 20, marginTop: 10 }} />
                </TouchableOpacity>
            </View>

            <View style={{ height: '2%' }} />

            <View style={{ height: '92%', backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'row', height: '30%' }}>
                    <Image source={
                        uri !== null ? { uri: uri } : require('../Sample/img/menu.png')}
                        style={styles.toUploaded} />
                    <TouchableOpacity
                        onPress={handleUploadImage}
                        style={{ alignSelf: 'flex-end' }}>
                        <Text style={styles.toUpload}>Upload Image</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ height: '71%', marginTop: '2%' }} >
                        <Text style={{ marginLeft: '5%' }}>Product Name</Text>
                        <TextInput
                            value={product_name}
                            onChangeText={product_name => setProduct_Name(product_name)}
                            style={styles.txtInput} />

                        <Text style={{ marginLeft: '5%' }}>Category</Text>
                        <TextInput
                            value={category}
                            onChangeText={category => setCategory(category)}
                            style={styles.txtInput} />

                        <Text style={{ marginLeft: '5%' }}>Price</Text>
                        <TextInput
                            value={price}
                            onChangeText={price => setPrice(price)}
                            style={styles.txtInput} />

                        <Text style={{ marginLeft: '5%' }}>Stock</Text>
                        <TextInput
                            value={stock}
                            onChangeText={stock => setStock(stock)}
                            style={styles.txtInput} />

                        <Text style={{ marginLeft: '5%' }}>Discount</Text>
                        <TextInput
                            value={discount}
                            onChangeText={discount => setDiscount(discount)}
                            style={styles.txtInput} />

                        <Text style={{ marginLeft: '5%' }}>Weight</Text>
                        <TextInput
                            value={weight}
                            onChangeText={weight => setWeight(weight)}
                            style={styles.txtInput} />

                        <Text style={{ marginLeft: '5%' }}>Farmer Supplier</Text>
                        <TextInput
                            value={farmersupplier}
                            onChangeText={farmersupplier => setFarmerSupplier(farmersupplier)}
                            style={styles.txtInput} />

                        <Text style={{ marginLeft: '5%' }}>Nutrition</Text>
                        <TextInput
                            value={nutrition}
                            onChangeText={nutrition => setNutrition(nutrition)}
                            multiline={true}
                            style={styles.txtNut} />

                        <Text style={{ marginLeft: '5%' }}>Product Description</Text>
                        <TextInput
                            value={description}
                            multiline={true}
                            onChangeText={description => setDescription(description)}
                            style={styles.txtDesc} />
                    </View>
                </ScrollView>

                <View style={{ height: '10%', marginTop: '5%' }}>
                    <TouchableOpacity
                        onPress={handleCreateProduct}
                        style={styles.buttonSave}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Create</Text>
                    </TouchableOpacity>
                </View>
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
        width: '40%',
        height: '60%',
        marginTop: '10%',
        marginLeft: '5%'
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
        height: '20%',
        marginBottom: '15%'
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
        backgroundColor: '#367874',
        padding: 10,
        marginBottom: '10%',
        height: 40,
        width: '90%',
        borderRadius: 5,
        textAlign: 'center'
    },
})