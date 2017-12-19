import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import {StackNavigator} from 'react-navigator';

class Human extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      {JSON.stringify(this.props)}
    )
  }

}

export default Human