import React from 'react';

export const AuthContext = React.createContext({
    isLoggedIn: false,
});

export class AuthProvider extends React.Component {
    state = {
        isLoggedIn: false,
        changeLogInState: () => {
            this.setState({isLoggedIn: true})
        }
    }

    render() {
        return <AuthContext.Provider value={this.state}>
            {this.props.children}
        </AuthContext.Provider>
    }
}
