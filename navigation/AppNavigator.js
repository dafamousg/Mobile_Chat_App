import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import AuthNavigator from './AuthNavigator';
import MainNvigator from './MainNavigator';
import LoadingScreen from '../screens/LoadingScreen';


export default createAppContainer(
    createSwitchNavigator({
        Loading: LoadingScreen,
        Auth: AuthNavigator,
        Main: MainNvigator,
    },
    {
        initialRouteName: 'Loading',
    }
));