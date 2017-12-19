import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: []
    }
  }

  render() {
    const { navigate, state } = this.props.navigation
    console.log("DETAIL: ", state.params.photo.previewURL)
    return (
      
      <View>
        <Text>Detail Screen</Text>
        <Text>{JSON.stringify(state.params.photo)}</Text>
      </View>
    )
  }
}