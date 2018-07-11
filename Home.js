import React from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
