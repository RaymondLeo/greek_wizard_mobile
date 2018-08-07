import React from 'react';
import { ActivityIndicator, Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';

export class MapScreen extends React.Component {

  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {

    const loc = this.state.location;

    if(loc) {
      return (
        <View style={{borderColor: 'red', borderStyle: 'solid', borderWidth: 1, flex: 1}}>
          <MapView
            style={{ flex: 1, marginBottom: 100}}
            initialRegion={{
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              provider: 'google',
            }}>
            <MapView.Circle
               key = { (loc.coords.latitude + loc.coords.longitude).toString() }
               center = {{latitude: loc.coords.latitude,
                   longitude: loc.coords.longitude} }
               radius = { 1000 }
               strokeWidth = { 1 }
               strokeColor = { '#1a66ff' }


           />
          </MapView>
          <Text style={{marginBottom: 50}}>{JSON.stringify(this.state.location)}</Text>
        </View>
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }

  }
}


{/*
  import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export class MapScreen extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
*/}
