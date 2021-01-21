import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const Product = () => {
  return (
    <View style={styles.card}>
      <View style={styles.wrapper}>
        source=
        {{
          uri:
            'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/7/8/2799509/2799509_78dfc91c-429f-4307-b27e-0b2bc195f943_554_554.jpg',
        }}
        style={styles.productImage}
        />
        <Text style={styles.productName}>Apple MacBook</Text>
        <Text style={styles.productPrice}>Harga : Rp. 15.000.000,-</Text>
        <Button title="Add To Cart" style={styles.btnAddToCart} />
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
});
