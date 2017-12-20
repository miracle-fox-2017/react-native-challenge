import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import store from './store'

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: "News One",
      headerStyle: { 
        marginTop: 24 
      }
    },
  },
  Details: {
    screen: DetailScreen
  },
})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  navbar: {
    marginTop: 30
  }
});
