import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    first_name: '',
    email: '',
  });

  const postData = () => {
    const dataForAPI = {
      first_name: 'agus',
      email: 'agus@mail.com',
    };
    console.log(dataForAPI);
    return;
    // MENGGUNAKAN VANILLA JS
    // fetch('https://reqres.in/api/users', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type' : 'application/json',
    //     },
    //     body: JSON.stringify(dataForAPI)
    // })
    // .then(response => response.json())
    // .then(json => {
    //     console.log('post response', json)
    //     setDataJob(json)
    // })
    
    // MENGGUNAKAN AXIOS
    // Axios.post('https://reqres.in/api/users', dataForAPI)
    //   .then((result) => {
    //     setDataJob(result.data);
    //   })
    //   .catch((error) => console.log('err: ', error));
      Axios.post('https://reqres.in/api/users', dataForAPI)
      .then((result) => {
        setDataJob(result.data);   
        console.log('post');     
      })
      .catch((error) => console.log('err: ', error));
  };
  const getData = () => {
    // MENGGUNAKAN VANILLA JS
    // fetch('https://reqres.in/api/users/2')
    // .then(response => response.json())
    // .then(json => {
    //     console.log(json)
    //     setDataUser(json.data)
    // })
    
    // MENGGUNAKAN AXIOS
    Axios.get('https://reqres.in/api/users/2')
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => console.log('err: ', err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Call API dengan Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET Data</Text>
      <Image style={styles.avatar} source={{uri: dataUser.avatar}} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST Data</Text>
      <Text>{dataJob.first_name}</Text>
      <Text>{dataJob.email}</Text>
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
