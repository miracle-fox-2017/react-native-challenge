import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'

import Home from './screens/Home'
import Detail from './screens/Detail'

const AppNavigator = StackNavigator({
  home: { screen: Home },
  detail: { screen: Detail },
},
{
  initialRouteName: 'home',
})

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );  
  }  
} 
