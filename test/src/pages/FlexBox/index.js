import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

class MateriFlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('====> constructor');
  }
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'grey',
          }}>
          <View style={{width: 60, height: 60, backgroundColor: 'yellow'}} />
          <View style={{width: 60, height: 60, backgroundColor: 'red'}} />
          <View style={{width: 60, height: 60, backgroundColor: 'blue'}} />
          <View style={{width: 60, height: 60, backgroundColor: 'green'}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 14,
          }}>
          <Text>MENU 1</Text>
          <Text>MENU 2</Text>
          <Text>MENU 3</Text>
          <Text>MENU 4</Text>
          <Text>MENU 5</Text>
          <Text>MENU 6</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: 'http://placeimg.com/80/80/tech'}}
            style={{
              width: 80,
              height: 80,
              marginTop: 15,
              borderRadius: 50,
              marginLeft: 14,
              marginRight: 14,
            }}
          />
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Agus Priyatin
            </Text>
            <Text>1 Juta Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

// const MateriFlexBox = () =>{
//         return <View>
//           <View
//           style={{
//             flexDirection:'row',
//             justifyContent:'space-between',
//             backgroundColor:'grey'
//             }} >
//             <View style={{width:60, height:60, backgroundColor:'yellow'}} />
//             <View style={{width:60, height:60, backgroundColor:'red'}} />
//             <View style={{width:60, height:60, backgroundColor:'blue'}} />
//             <View style={{width:60, height:60, backgroundColor:'green'}} />
//           </View>
//           <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:14}}>
//           <Text>MENU 1</Text>
//           <Text>MENU 2</Text>
//           <Text>MENU 3</Text>
//           <Text>MENU 4</Text>
//           <Text>MENU 5</Text>
//           <Text>MENU 6</Text>
//           </View>
//           <View style={{flexDirection:'row', alignItems:'center'}}>
//           <Image source={{uri:'http://placeimg.com/80/80/tech'}}
//           style={{width:80, height:80, marginTop:15, borderRadius:50, marginLeft:14, marginRight:14}}
//           />
//           <View>
//           <Text style={{fontSize:16, fontWeight:'bold'}}>Agus Priyatin</Text>
//           <Text>1 Juta Subscriber</Text>
//           </View>
//         </View>
//         </View>

//     }

export default MateriFlexBox;
