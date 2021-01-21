import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: '#2196f3',
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Codeinsia
        </Text>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="New Task"
            onPress={() => console.log('notes tapped!')}>
            <Icon
              name="md-create"
              style={{fontSize: 20, height: 22, color: 'white'}}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Notifications"
            onPress={() => {}}>
            <Icon
              name="md-notifications-off"
              style={{fontSize: 20, height: 22, color: 'white'}}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="All Tasks"
            onPress={() => {}}>
            <Icon
              name="md-done-all"
              style={{fontSize: 20, height: 22, color: 'white'}}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}