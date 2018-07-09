import React from 'react'
import { StackNavigator } from 'react-navigation';
import Home from './Home'
import Details from './Details'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
     headerTitle: 'Home',
   },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator
