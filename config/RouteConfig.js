import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { LoginScreen } from '../screens/Login';
import { EventsScreen } from '../screens/Events';
import { HomeScreen } from '../screens/Home';

export const MainTabNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeScreen } ,
        Events: { screen: EventsScreen },
        Login: { screen: LoginScreen }
    }
)

export const RootStack = createStackNavigator(
    {
        Login: LoginScreen,
        Main: { screen: MainTabNavigator },
        //LoginSuccess: {screen: LoginSuccess}
    },
    {
        initialRouteName: 'Login',
    }
)
