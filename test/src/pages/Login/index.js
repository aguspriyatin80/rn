import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const txtName = (value) => setName(value);
  const txtPass = (value) => setPass(value);

  const btnLogin = () => {
    if (name === '' || pass === '') {
      alert('username dan password harus diisi');
    } else {
      alert(name + ' ' + pass);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box_header}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
      </View>
      <View style={styles.box_content}>
        <Text style={styles.code_challenge}>Code Challenge</Text>
        <Text style={styles.binar_glints}>Binar x Glints</Text>
        <View style={styles.box_login}>
          <Text>Username</Text>
          <TextInput
            placeholder="Masukkan username"
            style={styles.input}
            value={name}
            onChangeText={txtName}
          />
          <Text>Password</Text>
          <TextInput
            placeholder="Masukkan password"
            style={styles.input}
            value={pass}
            onChangeText={txtPass}
          />
          <View style={styles.btn_login}>
            <Button title="Login" onPress={btnLogin} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#c9c6bb',
    height: windowHeight,
    width: windowWidth,
  },
  box_header: {
    // flex: 1,
    backgroundColor: 'purple',
    height: 50,
    padding: 15,
  },
  box_content: {
    flexGrow: 1,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_login: {
    width: 310,
    height: 200,
  },
  code_challenge: {
    fontSize: 45,
    color: 'purple',
    fontWeight: 'bold',
  },
  binar_glints: {
    fontSize: 20,
    color: 'purple',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    right: 50,
    marginBottom: 20,
  },
  btn_login: {
    marginTop: 40,
  },
  input: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
