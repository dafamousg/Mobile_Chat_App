import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';


const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });
  
  const LoginStack = createStackNavigator(
    {
      Login: LoginScreen,
    },
    config
  );
  
  LoginStack.navigationOptions = {
    tabBarLabel: 'Login',
/*     tabBarIcon: ({ focused }) => (
        <i class="fas fa-address-card"></i>
    ), */
  };
  
  LoginStack.path = '';

  const SignupStack = createStackNavigator(
    {
      Signup: SignupScreen,
    },
    config
  );
  
  SignupStack.navigationOptions = {
    tabBarLabel: 'Signup',
    /* tabBarIcon: ({ focused }) => (
        <i class="fas fa-address-card"></i>
    ), */
  };
  
  SignupStack.path = '';
  
  const tabNavigator = createBottomTabNavigator({
    LoginStack,
    SignupStack,
  });
  
  tabNavigator.path = '';
  
  export default tabNavigator;