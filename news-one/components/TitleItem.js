import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default class TitleItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const styles = StyleSheet.create({
      title: {
        fontSize: 20,
        fontWeight: 'bold'
      },
    }); 
    // console.log("PROPS ", this.props.photo)
    return(
      <Text style={styles.title}>{JSON.stringify(this.props.photo)}</Text>
    )
  }
}