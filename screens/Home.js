import React from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class HomeScreen extends React.Component {

    render() {

        const {navigation} = this.props;
        const name = navigation.getParam('name', 'name_not_found');
        const email = navigation.getParam('email', 'email_not_found');

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>We have successfully logged in with facebook</Text>
                <Text>{name}</Text>
                <Text>{email}</Text>
            </View>
        );
    }
}
