import React from 'react';

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
  }
  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const AuthConsumer = AuthContext.Consumer;
