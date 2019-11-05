import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import ChatScreen from '../screens/ChatScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ChatStack = createStackNavigator(
  {
    Chat: ChatScreen,
  },
  config
);

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
/*   tabBarIcon: ({ focused }) => (
    <i class="fas fa-address-card"></i>
  ), */
};

ChatStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ChatStack,
});

tabNavigator.path = '';

export default tabNavigator;