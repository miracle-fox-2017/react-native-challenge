import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen'
import TrendingScreen from './screen/TrendingScreen'
import { Provider } from 'react-redux'
import store from './store'

import {
  StackNavigator,
} from 'react-navigation';

const Apps = StackNavigator({
  Home: { screen: HomeScreen },
  Trending: { screen: TrendingScreen }
});

export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Provider store={store}>
        <Apps />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
