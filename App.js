import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import store from './store'
import { Provider } from 'react-redux'

import HomeScreen from './screens/HomeScreen'
import ReadArticleScreen from './screens/ReadArticleScreen'
import Search from './screens/Search'

const Navigator = StackNavigator({
  home: { screen: HomeScreen },
  read: {screen: ReadArticleScreen},
  search: {screen: Search }
})

const tabNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  search: {screen: Search }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Navigator />
      </Provider>
    );
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
}




