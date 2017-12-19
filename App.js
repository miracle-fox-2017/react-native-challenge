import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BBC from './BBC'
import Techcrunch from './Techcrunch'
import Home from './Home'
import BBCDetail from './BBCDetail'
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    const Navigasi = StackNavigator({
      Home: {screen: Home},
      BBC: {screen: BBC},
      Techcrunch: {screen: Techcrunch},
      BBCDetail: {screen: BBCDetail}
    })

    const MenuAja = StackNavigator({
      BBCDetail: {screen: BBCDetail}
    })
    return (
      <Navigasi />
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
