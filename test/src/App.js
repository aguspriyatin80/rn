import React, {Component} from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import MateriFlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsStory from './pages/PropsStory';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import Product from './pages/Product';
import Photo from './pages/Photo';
import ReactNativeSvg from './pages/ReactNativeSvg';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import CallAPISayurhub from './pages/CallAPISayurhub';
import LocalAPI from './pages/LocalAPI';
import LoginState from './pages/LoginState';
import Inputs from './pages/Login';
import Testing from './pages/Testing';
import Layout from './pages/Layout';
import Login from './pages/Login';
// import Register from './pages/Register';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <Text>Hello!</Text>
    <Text>Agus Priyatin!</Text>     */}
        {/* <Photo />     */}
        {/* <TextInput style={{borderWidth:1, borderColor:'red'}} />
    <Gambar />  */}
        {/* <MateriFlexBox /> */}
        {/* <Position /> */}
        {/* <PropsStory /> */}
        {/* <StateDinamis /> */}
        {/* <Product /> */}
        {/* <Communication />
    <ReactNativeSvg /> */}
        {/* <CallAPIVanilla /> */}
        {/* <CallAPIAxios /> */}
        {/* <LocalAPI /> */}
        <CallAPISayurhub />
        {/* <StateLogin /> */}
        {/* <Inputs /> */}
        {/* <Testing /> */}
        {/* <Layout /> */}
        {/* <Register /> */}
        {/* <LoginState /> */}
        {/* <Login /> */}
      </ScrollView>
    </View>
  );
};

class Gambar extends Component {
  render() {
    return (
      <Image
        source={{uri: 'http://placeimg.com/80/80/nature'}}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
    );
  }
}

export default App;
