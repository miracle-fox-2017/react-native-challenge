import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home'

class Details extends React.Component {
  constructor () {
    super ()
  }

  render () {
    const {state, goBack} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {state.params.data.title}</Text>
        <Image style={{width: 100, height: 100}} source={{ uri: state.params.data.urlToImage }}></Image>
        <Text>Description: {state.params.data.description}</Text>
        <Text>Author: {state.params.data.author}</Text>
        <Button onPress={() => goBack()} title="Back Home"></Button>
      </View>
    )
  }

}

export default Details
