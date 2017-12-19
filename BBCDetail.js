import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'

class BBCDetail extends React.Component {

  constructor () {
    super()
    this.state = {
      articles: []
    }
  }

  render() {
    const {state} = this.props.navigation
    return (
      <ScrollView>
        <Text>{state.params.title}</Text>
        <Image style={{width: 150, height: 100}} source={{uri:state.params.urlToImage}}/>
        <Text>{state.params.description}</Text>
      </ScrollView>
    );
  }
}

export default BBCDetail
