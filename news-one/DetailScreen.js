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
    return (
      <View>
        <Text>Detail Screen</Text>
      </View>
    )
  }
}