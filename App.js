import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';



export default function App() {
  //Iniziallize firebase...
  if (!firebase.apps.length){firebase.initializeApp(ApiKeys.FirebaseConfig);}
  
  return (
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
