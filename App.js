import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { LoginScreen } from './Login';
import { HomeScreen } from './Home';
import { AuthContext } from './AuthContext';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <AuthContext.Provider>
        <RootStack />
      </AuthContext.Provider>
    );
  }
}
