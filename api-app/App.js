import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator
} from 'react-navigation'
import Home from './screens/Home'
import NewsList from './screens/NewsList'
import NewsDetail from './screens/NewsDetail'

const NavigationBase = StackNavigator({
  Home: { screen: Home },
  News: { screen: NewsList },
  NewsDetail: {screen: NewsDetail}
})

export default class App extends React.Component {
  render() {
    return (
      <NavigationBase />
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
