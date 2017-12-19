import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: []
    }
  }

  render() {
    const styles = StyleSheet.create({
      image: {
        width: 100,
        height: 100
      },
    }); 

    const { navigate, state } = this.props.navigation
    console.log("DETAIL: ", state.params.photo.previewHeight)
    return (
      
      <View>
        <Text>Detail Photo</Text>
        <Image style={styles.image} source={{ uri: state.params.photo.previewURL }} />
        <Text>Photo By: {state.params.photo.user}</Text>
        <Text>Tag: {state.params.photo.tags}</Text>
      </View>
    )
  }
}