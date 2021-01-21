import React, {Component} from 'react';
import {StyleSheet, Text, View, Flatlist, Dimensions} from 'react-native';

const dataList = [{key: '1'}, {key: '2'},{key: '3'},{key: '4'},{key: '5'},];

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;
export default class App extends Component {
  _renderItem = ({item, index}) => {
    let {itemStyle, itemText} = styles 
    return (
      <View style={itemStyle}>
        <Text style={itemText}>{item.key}</Text>
      </View>
    )
  }
  render() {
    let {container, itemText} = styles 
    return (
      <View style={container}>
        <FlatList 
          data={dataList}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  itemStyle: {
    backgroundColor: '#3232ff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    flex: 1
  },
  itemText: {
    color: '#fff',
    fontSize: 30,
  }
})