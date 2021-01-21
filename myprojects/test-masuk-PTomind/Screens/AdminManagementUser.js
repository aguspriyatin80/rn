import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Searchbar, FlatList, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Axios from 'axios'
const url_Users = 'https://pacific-oasis-23064.herokuapp.com/admin/user'
import { useSelector, useDispatch } from 'react-redux'

export default function AdminManagementUser(props) {

  const [data, setData] = useState([])

  useEffect(() => {
    getDataUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNheWFAZ21haWwuY29tIiwiX2lkIjoiNWY4YzJlYjQ5YzlhMWIwMDE3OWQzNWYwIiwiaWF0IjoxNjA1MTg1NDAzfQ.Kb8H9MyJYS5MyWNYAJSeBLmETrYUa2nd_04C3xZhYGE', url_Users)

  }, [])

  const getDataUsers = (key, url) => {
    Axios.get(url, {
      headers: { token: key }
    })
      .then(r => setData(r.data.data))
  }



  console.log('data user : ', data)

  const ListUserComponent = ({ user }) => {
    return (



      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%', marginLeft: '8%', marginRight: '8%' }}  >
        <View>
          <Text >{user.full_name}</Text>
        </View>
        <View>
          <Text>{user.email}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View>
      <View style={{ backgroundColor: '#F7F6ED', width: '100%', height: '100%' }}>
        <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: '7%' }}>
          <TouchableOpacity style={{ marginLeft: '3%', marginTop: 10 }}>
            <Image source={require('../Sample/img/back.png')} style={{ height: 20, width: 25, }} />
          </TouchableOpacity>
          <Text style={{ marginLeft: '20%', fontSize: 18, marginTop: 10 }}>Management User</Text>
          <TouchableOpacity>
            <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: '47%', height: 20, width: 20, marginTop: 10 }} />
          </TouchableOpacity>
        </View>
        <View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%', marginLeft: '10%', marginRight: '10%' }}>
              <Text>Name</Text>
              <Text>Email</Text>
              <Text>Action</Text>
            </View>
            <FlatList
              data={data}
              style={{ height: '85%' }}
              keyExtractor={(key) => key._id}
              renderItem={({ item }) =>
                <ListUserComponent user={item} />
              } />
          </View>
        </View>
      </View>
    </View>

  )
}
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
    margin: 5,
    justifyContent: 'center',
  },
  card: {
    position: 'relative',
    backgroundColor: '#DDDDDD',
    height: 400,
    width: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  itemImage: {
    position: 'absolute',
    top: 10,
    left: 10,
    justifyContent: 'center',
    height: 290,
    width: 180,
  },
  itemTitle: {
    top: 304,
    left: 0,
    height: 24,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
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
  }
})

