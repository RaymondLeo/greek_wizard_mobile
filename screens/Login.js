import React from 'react';
import {
    AppRegistry,
    Button,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {Auth, LoginContext, RenderButton} from '../Auth';
import {AuthContext} from '../AuthContext';

export class LoginScreen extends React.Component {

  state = {
      userData: null,
  };

  _getFakeData = async () => {
    try {
      console.log('does this get called');
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );

      let responseJson = await response.json();
      //console.log(typeof(responseJson.title));
      //console.log(Object.keys(responseJson.title));
      this.setState({userData: responseJson});
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  }

    render() {
        console.log('here');
        return (

                <View
                    style={{
                        borderColor: 'red',
                        borderStyle: 'solid',
                        flex: 1,
                        paddingTop: '140%',
                        borderWidth: 1,
                    }}>

                    <Text>{this.state.userData}</Text>

                    <AuthContext.Consumer>
                        {(context) =>
                            <RenderButton navigator={this.props.navigation}
                                          buttonText={context.isLoggedIn ? "Log Out" : "Log In"}/>
                        }
                    </AuthContext.Consumer>
                </View>

        )
    }
}
