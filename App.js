import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen'
import HeroesScreen from './screen/HeroesScreen'
import HeroScreen from './screen/HeroScreen'
import { Provider } from 'react-redux'
import store from './store'


const Navigator = StackNavigator({
  Home: { 
    screen : HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        // marginTop: 25
      }
    },
  },
  Heroes: { 
    screen : HeroesScreen,
    navigationOptions: {
      headerTitle: 'Heroes',
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,        
      }      
    },
  },
  Hero: { 
    screen : HeroScreen,
  }  
},{
  initialRouteName : 'Home'
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
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
  h1: {
    fontSize: 10,
  },
  box: {
    width: 100,
    height: 100,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 50,
  }
});
