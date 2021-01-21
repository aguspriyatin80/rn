import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../../assets/icons/cart.jpg';

const Cart = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.wadah}>
        <Image source={cart} style={styles.imgPos} />
        <Text style={styles.teks}>{props.quantity}</Text>
        <Text style={styles.teksKeranjang}>Keranjang Belanja</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  wadah: {
    marginTop: 10,
    alignItems: 'center',
    // flex: 1,
    backgroundColor: 'green',
    width: 120,
  },
  imgPos: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  teksKeranjang: {
    color: 'yellow',
    marginBottom: 5,
  },
  teks: {
    position: 'absolute',
    color: 'red',
    right: 5,
    top: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    color: 'white',
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 10,
    width: 25,
    textAlign: 'center',
  },
});
