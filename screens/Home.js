import React from 'react';
import { AppRegistry, Button, View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class HomeScreen extends React.Component {

    render() {

        const {navigation} = this.props;
        const name = navigation.getParam('name', 'name_not_found');
        const email = navigation.getParam('email', 'email_not_found');

        return (
          <View style={styles.inputsContainer}>
            <TouchableOpacity style={styles.fullWidthButton} onPress={this.buttonPressed}>
              <Text style={styles.fullWidthButtonText}>Check In</Text>
            </TouchableOpacity>
            <ScrollView style={styles.eventsContainer}>
              <View style={styles.event}>
                <Text> {email} </Text>
              </View>
              <View style={styles.event}>
                <Text> this is a test event </Text>
              </View>
              <View style={styles.event}>
                <Text> this is a test event </Text>
              </View>
              <View style={styles.event}>
                <Text> this is a test event </Text>
              </View>
              <View style={styles.event}>
                <Text> this is a test event </Text>
              </View>
            </ScrollView>
          </View>

        );
    }
}
const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '10%',
    borderColor: 'red',
    borderWidth: 2
  },
  fullWidthButton: {
    height:50,
    width: '90%',
    borderRadius: 3,
    backgroundColor: '#3B5998',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullWidthButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eventsContainer: {
    width: '90%',
    height: '90%',
    borderColor: 'blue',
    borderWidth: 2,
  },
  event: {
    marginTop: '5%',
    height: '75%',
    borderColor: 'green',
    borderWidth: 2,
  }

});

{/*
  render() {

      const {navigation} = this.props;
      const name = navigation.getParam('name', 'name_not_found');
      const email = navigation.getParam('email', 'email_not_found');

      return (
          <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
                borderColor: 'red',
                borderStyle: 'solid',
                borderWidth: 1,
          }}>
              <Button title="test" color="#841584"/>
              <Text>We have successfully logged in with facebook</Text>
              <Text>{name}</Text>
              <Text>{email}</Text>
          </View>
      );
  }


  */}
