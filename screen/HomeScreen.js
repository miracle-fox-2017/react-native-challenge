import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HomeScreen'
  }

  constructor() {
    super()

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>this is Home screen</Text>
        <Text>this is Home screen</Text>
        <Text>this is Home screen</Text>
        <Text>this is Home screen</Text>
        <Text>this is Home screen</Text>
        <Button
          title='go to user' onPress={ () => navigate('User')} />
      </View>
    )
  }
}

export default HomeScreen
