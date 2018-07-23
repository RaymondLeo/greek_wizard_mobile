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
    render() {
        return (
            <TouchableOpacity>
                <View
                    style={{
                        borderColor: 'red',
                        borderStyle: 'solid',
                        marginTop: '85%',
                        borderWidth: 1,
                    }}>
                    <AuthContext.Consumer>
                        {(context) =>
                            <RenderButton navigator={this.props.navigation}
                                          buttonText={context.isLoggedIn ? "Log Out" : "Log In"}/>
                        }
                    </AuthContext.Consumer>
                </View>
            </TouchableOpacity>
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
