/*
link berguna :
placeimg.com
flatuicolors.com

// MEMBUAT COMPONENT MENGGUNAKAN FUNCTIONAL COMPONENT
*/
import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Aplikasi Pertamaku</Text>
      <Agus />
      <Photo />
      <Priyatin />
      <StylingReactNativeComponent />
    </View>
  );
};

const Agus = () => {
  return <Text>Agus</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/80/80/tech'}}
      style={{width: 100, height: 100, borderWidth: 1, borderColor: 'red'}}
    />;
  );
};

// MEMBUAT COMPONENT MENGGUNAKAN CLASS COMPONENT

class Priyatin extends Component {
  render() {
    return <Text>Priyatin</Text>;
  }
}

// MEMBUAT STYLING
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 20,
  },
});
// kemudian panggil di komponen di atasnya
const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View>
        style=
        {{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          borderWidth: 2,
          borderColor: 'black',
          marginTop: 20,
          marginLeft: 20,
        }}
      </View>
    </View>
  );
};

// SCROLLVIEW agar dapat discrol di dalam View kita bungkus ScrollView
<View>
  <ScrollView>
    <Text></Text>
  </ScrollView>
</View>;

// LAYOUTING DENGAN FLEXBOX

// POSITIONING
/*
position: absolute

// SUPPORT GAMBAR SVG
1) install :
npm install react-native-svg
npm install --dev react-native-svg-transformer

2) Ubah file metro.config.js menjadi seperti di bawah ini:

const {getDefaultConfig} = require('metro-config');
module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer')
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();

3) Buat folder ReactNativeSvg dan buat file index.js di dalamnya
contoh script di index.js
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReactNativeSvg = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textFile}>
                Menggunakan SVG di dalam React Native
            </Text>
            <IllustrationMyApp width={244} height={200} />
        </View>
    )
}

export default ReactNativeSvg

const styles = StyleSheet.create({
    container:{padding:20},
    textTitle:{textAlign:'center'}
}

4) Tambahkan di file index.js folder ReactNativeSvg :
<IllustrationMyApp width={244} height={200} />

5) Download gambar di undraw.co, kemudian simpan di file assets/images/file.svg
import di file index.js ReactNativeSvg
import NamaFileSvg from '../../assets/images/file.svg';

REFERENSI FAKE API
kata kunci google: fake api

PEMANGGILAN API MENGGUNAKAN VANILLA JS (TANPA LIBRARY THIRD PARTY)
tambahkan kode ini di dalam fungsi CallAPIVanilla

https://github.com/typicode/json-server/blob/master/db.json

// KONFIGURASI ESLINT
sudo npm install -g eslint

*/

