import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import AuthNavigator from './AuthNavigator';
import MainNvigator from './MainNavigator';


export default createAppContainer(
    createSwitchNavigator({
        Auth: AuthNavigator,
        Main: MainNvigator,
    },
    {
        initialRouteName: 'Auth',
    }
));