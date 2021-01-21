import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Layout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box_header}>
        <Text>HEADER</Text>
      </View>
      <View style={styles.box_content}>
        <View style={styles.box_sidebar}>
          <Text>SIDEBAR</Text>
        </View>
        <View style={styles.box_main}>
          <Text>MAIN</Text>
        </View>
      </View>

      <View style={styles.box_footer}>
        <Text>FOOTER</Text>
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'yellow',
    height: windowHeight,
    width: windowWidth,
  },
  box_header: {
    // flex: 1,
    backgroundColor: 'red',
    height: 50,
  },
  box_content: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  box_sidebar: {
    flex: 1,
    backgroundColor: 'purple',
  },
  box_main: {
    flex: 2,
    backgroundColor: 'white',
  },
  box_footer: {
    // flex: 1,
    backgroundColor: 'brown',
    height: 100,
  },
});
