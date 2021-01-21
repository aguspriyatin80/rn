import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TextInput,
  Button,
} from 'react-native';

export default function LoginState() {
  // initize the state hook
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  // Whenever the textinput value changes
  const txtName = (value) => setName(value);
  const txtPass = (value) => setPass(value);

  // when the OK button is pressed
  const btnHandler = () => {
    // do whatever you like with the name typed into the text field
    alert(name + ' ' + pass);

    // dismiss the Keybaord
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            padding: 10,
            flexGrow: 1,
            borderBottomColor: '#d0d4d9',
            borderBottomWidth: 2,
          }}>
          <Text style={styles.titleLogin}>Login</Text>
        </View>
        <View style={{width: '80%', justifyContent: 'center', marginLeft: 40}}>
          <View style={{marginTop: 140}}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                justifyContent: 'center',
                textAlign: 'right',
                color: 'purple',
              }}>
              Code Challenge
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'right',
                color: 'purple',
              }}>
              Binar x Glints
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold', marginHorizontal: 5}}>
              Username/Email
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan nama"
              value={name}
              onChangeText={txtName}
            />
            <Text style={{fontWeight: 'bold', marginHorizontal: 5}}>
              Password
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan password"
              value={pass}
              onChangeText={txtPass}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Button title="LOGIN" onPress={btnHandler} />
          </View>
        </View>
      </View>
    </View>
  );
}

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  titleLogin: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    padding: 5,
    marginVertical: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    height: 50,
    borderColor: '#d0d4d9',
    borderRadius: 20,
  },
});
