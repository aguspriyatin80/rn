import React, {useState} from 'react';
import {View, Text} from 'react-native';
const DonaturScreen = async (props) => {  
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
}

export default DonaturScreen;