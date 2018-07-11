import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import Expo, { Constants } from 'expo';

export class Auth extends Component {
  state = {
    responseJSON: null,
  };
  callGraph = async token => {
    /// Look at the fields... I don't have an `about` on my profile but everything else should get returned.
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
    );
    const responseJSON = await response.json();
    this.setState({ responseJSON });
  };

  login = async () => {
    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync('1765042437100435', {
      permissions: ['public_profile', 'email', 'user_friends'],
    });

    if (type === 'success') {
      this.callGraph(token);

      const isLoggedIn = true;
      this.setState({ isLoggedIn });
      // Alert.alert(
      //
      //   `Hi ${this.state.responseJSON}`);
      //this.firebaseLogin(token);
    }
  };

  // Sign in with credential from the Facebook user.
  firebaseLogin = token => {
    // firebase.auth().signInWithCredential(token).catch((error) => {
    //     // Handle Errors here.
    //     console.warn("Add Error for login", error)
    //   });
  };

  renderButton = buttonText => (
    <TouchableOpacity onPress={() => this.login()}>
      <View
        style={{
          width: '50%',
          alignSelf: 'center',
          borderRadius: 4,
          padding: 24,
          backgroundColor: '#3B5998',
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );

  renderValue = value => (
    <Text key={value} style={styles.paragraph}>{value}</Text>
  );
}
