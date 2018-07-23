import React from 'react';
import { AuthProvider } from './AuthContext';
import { RootStack } from './config/RouteConfig.js';

export default class App extends React.Component {
    render() {
        return (
            <AuthProvider>
                <RootStack/>
            </AuthProvider>
        )
    }
}
