import React from 'react';
import {View, Text} from 'react-native';

const Story = (props) => {
  return (
    <View>
      <Text>{props.judul}</Text>
    </View>
  );
};

const PropsStory = () => {
  return (
    <View>
      <Story judul="Props Story : Judul Pertamaku" />
    </View>
  );
};

export default PropsStory;
