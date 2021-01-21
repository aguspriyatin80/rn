import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { GET_PRODUCTS_URL } from "../Redux/constants/general";
const url_diets = 'https://pacific-oasis-23064.herokuapp.com/products/filter/diets'
const url_vegetables = 'https://pacific-oasis-23064.herokuapp.com/products/filter/vegetables'
const url_fruits = 'https://pacific-oasis-23064.herokuapp.com/products/filter/fruits'
const url_findProducts = 'https://pacific-oasis-23064.herokuapp.com/products/find/'



const HomeScreen = (props) => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => {
    setSearchQuery(query);
    findProducts(url_findProducts, query)

  }
  const [data, setData] = useState([])

  const findProducts = (url, string) => {
    Axios.post(url + string)
      .then(r => setData(r.data.found))
    console.log('data search : ', data)
  }
  const getProducts = (url) => {
    Axios.get(url)
      .then(r => setData(r.data.posts))
  }
  const getProductsByFruits = (url) => {
    Axios.get(url)
      .then(r => setData(r.data.fruits))
  }
  const getProductsByDiets = (url) => {
    Axios.get(url)
      .then(r => setData(r.data.diets))
  }
  const getProductsByVegetables = (url) => {
    Axios.get(url)
      .then(r => setData(r.data.vegetable))
  }


  useEffect(() => {

    getProducts(GET_PRODUCTS_URL)
  }, [])


  const ListProduct = ({ product }) => {
    return (


      <View style={styles.itemContainer} >
        <View
          style={styles.card}>
           <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductDetails')}>
          <Image
            source={{ uri: product.product_image }}
            style={styles.itemImage} />
         
            <Text style={styles.itemTitle}>{product.product_name}</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', color: '#DE884A', fontSize: 18, marginTop: '4%' }}>Rp {product.price},-</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MyCart')}>
            <View style={{ flexDirection: 'row', backgroundColor: '#BBE4D8', width: '70%', height: '35%', padding: 5, borderRadius: 5, alignSelf: 'center' }}>
              <Image source={require('../Sample/img/cart.png')} style={{ width: 20, height: 20, tintColor: '#367874' }} />
              <Text style={{ color: '#367874' }}> ADD TO CART</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
  const ListOffer = ({ product }) => {
    return (


      <View style={styles.itemContainer} >
        <View
          style={styles.cardOffer}>
          <TouchableOpacity style={{ backgroundColor: 'white', height: '80%', width: '40%', marginLeft: '5%' }}>
            <View>
              <View style={{ width: '100%', height: '9%', backgroundColor: '#FBE7C9', marginBottom: '10%' }}>
                <Text style={{ color: '#DE884A', textAlign: 'center' }}>{product.discount} % Off!</Text>
              </View>
              <Image source={{ uri: product.product_image }} style={{ width: 130, height: 110}} />
              <View style={{ padding: 10 }}>
                <Text style={{ width: 150 }}>{product.product_name}</Text>
                <Text style={{ color: '#C4C4C4', textDecorationLine: 'line-through', fontSize: 18, width: 180 }}>Rp. {product.actualPrice}</Text>
                <Text style={{ color: '#DE884A', fontSize: 20, width: 190 }}>Rp. {product.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  return (
    <View>
      <ScrollView>
        <View style={{ backgroundColor: '#F7F6ED', width: '100%', height: '100%' }}>

          <ImageBackground style={{ backgroundColor: 'white', width: '100%', height: '8%', padding: 5, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>

              <Image source={require('../Sample/img/Vector.png')} style={{ width: 32, height: 30, marginRight: '7%', margin: 5 }} />

              <Searchbar
                icon={require('../Sample/img/loupe.png')}
                placeholder="Search Products.."
                onChangeText={onChangeSearch}
                style={{ width: '70%', height: '90%' }}
                value={searchQuery}
              />

              <TouchableOpacity style={{ marginTop: 10, marginLeft: '5%' }}>
                <Image source={require('../Sample/img/menu.png')} style={{ width: 25, height: 25 }} />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View>
            <ImageBackground style={{ width: '100%', height: 290, justifyContent: 'center', backgroundColor: '#96A545' }}>
              <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ marginLeft: '2%', padding: 5 }}>
                  <Text style={{ color: '#305711', fontSize: 35 }}>Special</Text>
                  <Text style={{ color: '#305711', fontSize: 35 }}>Offers!</Text>
                  <TouchableOpacity style={{ padding: 5, width: '100%', borderRadius: 10, backgroundColor: 'white', opacity: 0.5 }}>
                    <Text style={{ alignSelf: 'center', fontSize: 18, color: '#618841', fontWeight: 'bold' }}>SEE ALL OFFERS</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={data}

                  keyExtractor={(key) => key._id}
                  renderItem={({ item }) =>
                    <ListOffer product={item} />
                  } />
              </View>
            </ImageBackground>
          </View>

          <View style={{ padding: 10, flexDirection: 'row', marginTop: '2%' }}>
            <View style={styles.Category}>
              <TouchableOpacity
                onPress={() => getProducts(GET_PRODUCTS_URL)}
              >
                <Text style={{ textAlign: 'center', color: '#DE884A' }}>All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Category}>
              <TouchableOpacity
                onPress={() => getProductsByFruits(url_fruits)}
              >
                <Text style={{ textAlign: 'center', color: '#DE884A' }}>Fruits</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Category2}>
              <TouchableOpacity
                onPress={() => getProductsByVegetables(url_vegetables)}
              >
                <Text style={{ textAlign: 'center', color: '#DE884A',  }}>Vegetables</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Category2}>
              <TouchableOpacity
                onPress={() => getProductsByDiets(url_diets)}
              >
                <Text style={{ textAlign: 'center', color: '#DE884A' }}>Diets</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#F7F6ED', borderRadius: 30, padding: 10 }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={data}

                  keyExtractor={(key) => key._id}
                  renderItem={({ item }) =>
                    <ListProduct product={item} />
                  } />
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  allignFooterImage: {
    flexDirection: 'row'
  },
  commentImage: {
    marginRight: 10,
    top: 324,
    left: 10,
    width: 40,
    height: 40,
  },
  sumOfComment: {
    top: 324,
    left: 10,
    marginTop: 5,
    marginRight: 65,
    height: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  shareImage: {
    top: 324,
    left: 0,
    width: 40,
    height: 40,
  },
  itemContainer: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  card: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    height: 280,
    width: 200,
    borderRadius: 30,
    padding: 10
  },

  cardOffer: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    height: 250,
    width: 180,
    borderRadius: 10,
    padding: 5
  },
  
  itemImage: {
    alignSelf: 'center',
    height: 150,
    width: 170,
    borderRadius: 15,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    width: 190
  },
  itemYear: {
    top: 280,
    left: 0,
    height: 24,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  line: {
    top: 314,
    left: 10,
    width: 180,
    height: 0,
    borderBottomWidth: 1,
  },

  Category: {
    borderWidth: 1,
    borderColor: '#EEC99D',
    width: '15%',
    borderRadius: 3,
    backgroundColor: 'white',
    marginRight: '2%'
  },

  Category2: {
    borderWidth: 1,
    borderColor: '#EEC99D',
    width: '20%',
    borderRadius: 3,
    backgroundColor: 'white',
    marginRight: '2%'
  },
})




