import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: "Index",
      headerStyle: { 
        marginTop: 24 
      }
    },
  },
  Details: {
    screen: DetailScreen,
    navigationOptions: {
      headerTitle: "Detail",
      headerStyle: {
        marginTop: 24
      }
    },
  },
})


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
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
