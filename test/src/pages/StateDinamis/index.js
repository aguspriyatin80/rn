import React, {useState, Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

// class CounterClass extends Component {
//   state = {
//     number: 0,
//   };
//   render() {
//     return (
//       <View>
//         <Text>{this.state.number}</Text>
//         <Button
//           title="Tambah"
//           onPress={() => this.setState({number: this.state.number + 1})}
//         />
//       </View>
//     );
//   }
// }

const StateDinamis = () => {
  return (
    <View>
      <Text style={styles.setText}>Materi Komponen Dinamis dengan State</Text>
      <Counter />
      {/* <CounterClass /> */}
    </View>
  );
};
export default StateDinamis;

const styles = StyleSheet.create({
  setText: {
    textAlign: 'center',
    fontSize: 14,
  },
  setTombol: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
