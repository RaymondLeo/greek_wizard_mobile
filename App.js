import React from 'react';
import { AuthProvider } from './AuthContext';
import { RootStack } from './config/RouteConfig';
import { HomeScreen } from './screens/Home';

export default class App extends React.Component {
    render() {
        return (
            <AuthProvider>
                <RootStack/>
            </AuthProvider>
        )
    }
}


{/*n
  EAAZAFSZCd6E5MBAHHncEsrzGjHl6Kx7c3CJxm7OjCvgQ4qZBMeAiMVLKpaAPy9HLcZC6YmZCVLDGqxZCp2W73jwGZA0Pf02CmfvOaU3GwuU5rjdogvZAPgQWJtJQkXWlOGQYt4HcZBiSZBKZCZAZCc7xnX2t1YRSZCjCIV1P8ZD
  */}
