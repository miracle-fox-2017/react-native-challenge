import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import BBC from './BBC'
import Techcrunch from './Techcrunch'
import Home from './Home'
import BBCDetail from './BBCDetail'
import TechcrunchDetail from './TechcrunchDetail'
import { StackNavigator, TabNavigator } from 'react-navigation';
import {Provider} from 'react-redux'
import store from './store/store'

export default class App extends React.Component {
  render() {
    const Navigasi = StackNavigator({
      Home: {screen: Home},
      BBC: {screen: BBC},
      Techcrunch: {screen: Techcrunch},
      BBCDetail: {screen: BBCDetail},
      TechcrunchDetail: {screen: TechcrunchDetail}
    })

    const MenuAja = StackNavigator({
      BBCDetail: {screen: BBCDetail}
    })
    return (
      <Provider store={store}>
      <Navigasi />
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
});
