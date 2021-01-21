import React, { useState }  from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import data from './data.json';
import { ListItemComponent } from './ListItemComponent';

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;
const HomeScreen = ({route}) =>  {
  // const [selectedId, setSelectedId] = useState();
  const [totalPrice, setTotalPrice] = useState(0)
  const [products] = useState(data["produk"])
  const [filteredProducts, setFilteredProducts] = useState(data["produk"]);
  const currencyFormat = (num) => {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };
  
  const formatData = (products, numColumns) => {
    const totalRows = Math.floor(products.length / numColumns);
    let totalLastRow = products.length - (totalRows * numColumns);
    while(totalLastRow !== 0 && totalLastRow !== numColumns) {
      products.push({nama: 'blank', empty: true});
      totalLastRow++;
    }
    return products;
  }  
  const handleOnPressBeli= (harga,idklik) => {
    const findProduct = products.find( product => product.id == idklik)
    if(findProduct.stock > 0){
      findProduct.stock--
      setTotalPrice(totalPrice+harga) 
    } else {
      findProduct.stock = 0; 
    } 
  
  }
  const handleOnChangeText= (s) => {
    if(s == ''){
        setFilteredProducts(products);
    }else{
        const filtered = products.filter( product => product.nama.toLowerCase().includes(s.toLowerCase()));
        setFilteredProducts(filtered);
    }
}
    console.log(route)
    
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
        <Text style={{flex:1, marginLeft:10, marginTop: 10}}>Hai {route.params.data.name},{'\n'}Selamat Berbelanja!</Text>
        <Text style={{flex:1, textAlign:'right', marginRight:10, marginTop:10}}>Total Belanja{'\n'}
            <Text style={styles.textTotal}>{ currencyFormat(totalPrice)}</Text>
        </Text>
        </View>
        <View style={styles.searchBox}>
          <TextInput onChangeText={handleOnChangeText} placeholder="Search product ... ">

          </TextInput>
        </View>
        <FlatList
                numColumns={numColumns}
                keyExtractor={ key => key.id }
                data={formatData(filteredProducts, numColumns)}
                renderItem={ ({item}) => {
                  if(item.empty) {
                    return <View style={[styles.itemStyle, styles.itemInvisible]}>
                      </View>
                  }
                  return <View style={[styles.itemStyle]}>
                  <ListItemComponent onPressBeli={handleOnPressBeli} item={item}/>
                  </View>
                }
                  
              }
            
                
        />
      </View>
    )
  
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 10,
    // backgroundColor:'yellowgreen',
  },
  textTotal: {
    fontSize: 20,
    fontWeight:'bold',
  },
  searchBox :{
    backgroundColor:'#fff',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  itemStyle: {
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    height: 'auto',
    flex: 1,
    width: WIDTH / numColumns,
    paddingVertical: 10,
    margin: 5,
    textAlign: 'center',
    
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemNama: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  gambar : {
    width: 110,
    height: 110,
  },
  btnBeli: {
    width: WIDTH / 3,
    height: 30,
    backgroundColor: 'blue',
    padding: 5,
    textAlign: 'center',
  },
  textBeli: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
},
})