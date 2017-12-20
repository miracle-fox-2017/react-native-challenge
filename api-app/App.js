import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import {
  StackNavigator
} from 'react-navigation'
import Home from './screens/Home'
import NewsList from './screens/NewsList'
import NewsDetail from './screens/NewsDetail'


const NavigationBase = StackNavigator({
  Home: { screen: Home },
  News: { screen: NewsList },
  NewsDetail: { screen: NewsDetail }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationBase style={styles.container}/>
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
