import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIAxios = () => {
  const [dataProducts, setDataProducts] = useState({
    product_image: '',
    product_name: '',
    price: '',
  });

  const [Product, setProduct] = useState({
    first_name: '',
    last_name: '',
    
  });

  const postData = () => {
    const dataForAPI = {
      first_name: 'agus',
      last_name: 'priyatin',
    };    
    
    Axios.post('https://reqres.in/api/users', dataForAPI)
    .then((result) => {
      setProduct(result.data);   
      console.log('post');     
    })
    .catch((error) => console.log('err: ', error));
  };
  const getData = () => {
    Axios.get('https://pacific-oasis-23064.herokuapp.com/products/5f9bddcb774f1f1300e8d32e')
      .then((result) => {
        setDataProducts(result.data.products);
      })
      .catch((err) => console.log('err: ', err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Call API dengan Sayurhub</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET Data</Text>
      <Image style={styles.image} source={{uri: dataProducts.product_image}} />
      <Text>{`${dataProducts.product_name}`}</Text>
      <Text>{`${dataProducts.price}`}</Text>
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST Data</Text>
      <Text>{Product.first_name}</Text>
      <Text>{Product.last_name}</Text>      
      <View style={styles.line} />
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
  },
  line: {
    width: 2,
    color: 'red',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
