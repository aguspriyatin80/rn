import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';

import iconHome from './icon/home.png';
import iconOrder from './icon/order.png';
import iconHelp from './icon/help.png';
import iconInbox from './icon/inbox.png';
import iconAccount from './icon/account.png';
import iconPromo from './icon/promo.png';
import iconSearch from './icon/search.png';
import iconMore from './icon/more.png';
import iconTopUp from './icon/topup.png';
import iconNearBy from './icon/nearby.png';
import iconPay from './icon/pay.png';
import logoGopay from './icon/gopay.png';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:1, backgroundColor:'pink'}}>
          <View>
            <View>
              <TextInput value="What do you want to eat?" style={{borderWidth:1, borderColor:'#E8E8E8', borderRadius:25, backgroundColor:'white', paddingLeft:45,}} />
            </View>
            <View>
            <Image style={{width: 26, height: 26}} source = {require('./icon/home-active.png')} />
            </View>
          </View>
        </View> 
        <View style={{height: 54, flexDirection:'row', backgroundColor:'white'}}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Image style={{width: 26, height: 26}} source = {require('./icon/home-active.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop:4, color:'#43AB4A'}}>Home</Text>
          </View>
          <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Image style={{width: 26, height: 26}} source = {require('./icon/order.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop:4, color:'#43AB4A'}}>Orders</Text>
          </View>
          <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Image style={{width: 26, height: 26}} source = {require('./icon/help.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop:4, color:'#43AB4A'}}>Help</Text>
          </View>        
          <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Image style={{width: 26, height: 26}} source = {require('./icon/inbox.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop:4, color:'#43AB4A'}}>Inbox</Text>
          </View>        
          <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Image style={{width: 26, height: 26}} source = {require('./icon/account.png')} />
            <Text style={{fontSize: 10, color: '#545454', marginTop:4, color:'#43AB4A'}}>Account</Text>
          </View>                  
        </View> 
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   bottomNavigation: {
//     height: 54,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
// });
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//   },
//   content: {
//     flex: 1,
//     backgroundColor: 'blue',
//     height: 200,
//   },
//   bottomNavigation: {
//     // flexDirection: 'row',
//     flex: 1,
//     height: 54,
//     backgroundColor: 'yellow',
//   },
//   welcome: {
//     textAlign: 'center',
//     fontSize: 20,
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
