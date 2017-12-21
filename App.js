import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './store';

import HomePage from './screens/MainPage';
import DetailPage from './screens/DetailPage';

export default class App extends React.Component {
  constructor () {
    super();
  };

  render() {
    const Navigatitor = StackNavigator({
      Home: { screen: HomePage },
      Detail: { screen: DetailPage }
    })
    return (
      <Provider store={store}>
       <Navigatitor />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
