import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });
  useEffect(() => {
    // menggunakan jsonplaceholder.typicode.com atau reqres.in
    // Call API Method GET
    // fetch('https://reqres.in/api/users/2')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // Call API Method POST
    // const dataForAPI = {
    //     name: "morpheus",
    //     job: "leader"
    // }
    // console.log("data ForAPI :", dataForAPI)
    // console.log("data JSON stringify :", JSON.stringify(dataForAPI))
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
    // })
  }, []);
  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('post response', json);
        setDataJob(json);
      });
  };
  const getData = () => {
    fetch('https://reqres.in/api/users/1')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Call API dengan VanillaJS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET Data</Text>
      <Image style={styles.avatar} source={{uri: dataUser.avatar}} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST Data</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default CallAPIVanilla;

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
