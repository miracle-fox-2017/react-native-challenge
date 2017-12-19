import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Container } from 'native-base'

import Home from './screens/Home'
import About from './screens/About'

const AppNavigator = StackNavigator({
  home: { screen: Home },
  about: { screen: About }
})

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      fontLoaded: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({fontLoaded: true})
  }

  render() {
    return (
      <Container>
        {
          this.state.fontLoaded ? (
            <AppNavigator/>  
          ) : null
        }
      </Container>
    );  
  }  
} 
