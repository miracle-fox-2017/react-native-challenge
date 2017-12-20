import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

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

      wrap: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },

      image: {
        width: 100,
        height: 100
      },
    }); 
    // console.log("PROPS ", this.props.photo)
    return(
      <View style={styles.wrap}>
        <Image style={styles.image} source={{ uri: this.props.photo.previewURL }} />
      </View>
    )
  }
}