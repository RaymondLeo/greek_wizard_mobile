import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    ScrollView,
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import Expo, {Constants} from 'expo';

export class Auth extends Component {
    renderValue = value => (
        <Text key={value} style={styles.paragraph}>{value}</Text>
    );
}

callGraph = async token => {
    const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
    );
    const responseJSON = await response.json();
    return responseJSON;
};

login = async (props) => {
    const {
        type,
        token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync('1765042437100435', {
        permissions: ['public_profile', 'email', 'user_friends'],
    });

    if (type === 'success') {
        const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
        );

        const responseJSON = await response.json();

        props.navigator.navigate('Home', {
            name: responseJSON.name,
            email: responseJSON.email
        });
    }
};

// passToken = async token => {
//     const JSONResponse = this.callGraph(token);
//     Alert.alert(JSONResponse.email);
// }

export const LoginSuccess = (props) => (
    <AuthContext.Consumer>
        {(context) =>
            context.changeLogInState()
        }
    </AuthContext.Consumer>
)

export const RenderButton = (props) => (
    <TouchableOpacity onPress={() => this.login(props)}>
        <View
            style={{
                width: '30%',
                alignSelf: 'center',
                borderRadius: 3,
                padding: 12,
                backgroundColor: '#3B5998',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
                {props.buttonText}
            </Text>
        </View>
    </TouchableOpacity>
);
