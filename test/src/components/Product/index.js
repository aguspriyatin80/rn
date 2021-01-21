import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import product from '../../assets/images/product.jpg';
const Product = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.wrapper}>
        <Image source={product} style={styles.productImage} />
        <Text style={styles.productName}>Apple MacBook</Text>
        <Text style={styles.productPrice}>Harga : Rp. 15.000.000,-</Text>
        {/* <Button title="Add To Cart" style={styles.btnAddToCart}/> */}
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.btnAddToCart}>
            <Text style={styles.teks}>Add To Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  productPrice: {
    marginBottom: 10,
  },
  teks: {
    color: 'white',
  },
  wrapper: {
    backgroundColor: '#edebe4',
    width: 200,
    height: 'auto',
    alignItems: 'center',
    borderRadius: 10,
    paddingBottom: 10,
  },
  productImage: {
    width: 170,
    height: 130,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  card: {
    alignItems: 'center',
    padding: 5,
  },
  btnAddToCart: {
    padding: 5,
    backgroundColor: 'black',
  },
});
