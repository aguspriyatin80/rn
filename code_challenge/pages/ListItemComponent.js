import React, {useState} from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from "react-native";
import data from './data.json';
const numColumns = 3;
const WIDTH = Dimensions.get('window').width;

export const ListItemComponent = (props) => {
    const currencyFormat = (num) => {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    };
    return (
        <View>
            <Image
                source={{ uri: props.item.gambaruri }}
                style={styles.gambar}
            /> 
            <Text style={styles.itemNama}>{props.item.nama}</Text>
            <Text style={styles.itemPrice}>{currencyFormat(parseInt(props.item.harga))}</Text>
            <Text style={styles.itemStock}>Sisa stok: {props.item.stock}</Text>
            <TouchableOpacity style={styles.btnBeli}                         
            onPress={()=> {                                     
                            let h= parseInt(props.item.harga)
                            let id=props.item.id
                            props.onPressBeli(h,id)
                        } 
               
            }>
            <Text style={styles.textBeli}>BELI</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
  
  itemStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    flex: 1,
    width: WIDTH / numColumns,
    paddingVertical: 10,
    margin: 5,
  },
  itemNama: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemPrice: {
    textAlign: 'center',
  },
  itemStock: {
    textAlign: 'center',
  },
  gambar : {
    width: 110,
    height: 110,
    alignSelf: 'center',
  },
  btnBeli: {
    width: WIDTH / 3,
    height: 30,
    backgroundColor: 'blue',
    padding: 5,
    alignSelf: 'center',
  },
  textBeli: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  
})