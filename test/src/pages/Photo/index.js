import React from 'react';
import {Image} from 'react-native';
const Photo = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/80/80/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default Photo;
