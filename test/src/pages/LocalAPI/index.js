import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const List = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri: 'http://placeimg.com/80/80/people'}}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <View>
        <Text style={styles.delete} onPress={onDelete}>
          X
        </Text>
      </View>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then((res) => {
      console.log('res :', res);
      setUsers(res.data);
    });
  };
  const deleteItem = (item) => {
    console.log(item);
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then((res) =>
      console.log('res ', res),
    );
    getData();
  };
  const selectItem = (item) => {
    console.log(item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };
  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    console.log('data before send ', data);
    if (button === 'Simpan') {
      Axios.post('http://10.0.2.2:3004/users', data).then((res) =>
        console.log('res ', res),
      );
      setName('');
      setEmail('');
      setBidang('');
      getData();
    } else {
      Axios.put(
        `http://10.0.2.2:3004/users/${selectedUser.id}`,
        data,
      ).then((res) => console.log('res ', res));
      setName('');
      setEmail('');
      setBidang('');
      setButton('Simpan');
      getData();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON) Server</Text>
      <Text>Masukan Anggota Kabayan Koding</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.textInput}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.textInput}
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <Button title={button} style={styles.btnSimpan} onPress={submit} />
      <View style={styles.line} />
      <View>
        {users.map((user) => {
          return (
            <List
              key={user.id}
              name={user.name}
              email={user.email}
              bidang={user.bidang}
              onPress={() => selectItem(user)}
              onDelete={() =>
                Alert.alert('Warning', 'Are you sure?', [
                  {
                    text: 'No',
                    // onPress: () => console.log('button NO')
                    onPress: () => getData(),
                  },
                  {
                    text: 'Yes',
                    onPress: () => deleteItem(user),
                  },
                ])
              }
            />
          );
        })}
      </View>
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    flex: 1,
    backgroundColor: 'grey',
    padding: 10,
  },
  textTitle: {
    fontWeight: 'bold',
  },
  textInput: {
    marginHorizontal: 20,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  line: {
    marginVertical: 20,
    borderWidth: 2,
    borderColor: 'blue',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  desc: {
    marginHorizontal: 10,
    flex: 1,
  },
  descName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descEmail: {
    color: 'blue',
    fontWeight: 'bold',
  },
  descBidang: {
    fontWeight: 'bold',
  },
  delete: {
    fontWeight: 'bold',
    color: 'red',
  },
});
