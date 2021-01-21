import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Position = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.wadah}>
        <Image
          source={{uri: 'http://placeimg.com/80/80/nature'}}
          style={styles.imgPos}
        />
        <Text style={styles.teks}>10</Text>
        <Text style={styles.teksKeranjang}>Keranjang Belanja</Text>
      </View>
    </View>
  );
};

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
    color: 'white',
  },
  teks: {
    position: 'absolute',
    color: 'red',
    right: 12,
    top: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    color: 'white',
  },
});

export default Position;
