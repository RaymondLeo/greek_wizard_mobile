import React from 'react';
import { AppRegistry, Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Auth, LoginContext } from './Auth';
import { AuthContext } from './AuthContext';

export class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <AuthContext.Consumer>
        {(context) =>
          <Text>{context.isLoggedIn.toString()}</Text>
        }
        </AuthContext.Consumer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   //justifyContent: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: '#ecf0f1',
  // },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
