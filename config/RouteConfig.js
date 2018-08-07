import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { LoginScreen } from '../screens/Login';
import { EventsScreen } from '../screens/Events';
import { HomeScreen } from '../screens/Home';
import { MapScreen } from '../screens/Map'

export const MainTabNavigator = createBottomTabNavigator(
    {
        Map: {
          screen: MapScreen,
        },
        Home: {
          screen: HomeScreen,
          navigationOptions: {
            title: 'Test',
            gesturesEnabled: false,
            headerLeft: null,
          },
        } ,
        Events: { screen: EventsScreen },
        Login: { screen: LoginScreen }
    }
)

export const RootStack = createStackNavigator(
    {
        Login: LoginScreen,
        Main: {
          screen: MainTabNavigator,
          navigationOptions: {
            headerLeft: null,
            gesturesEnabled: false,
          }
         },
        //LoginSuccess: {screen: LoginSuccess}
    },
    {
        initialRouteName: 'Login',
    }
)
