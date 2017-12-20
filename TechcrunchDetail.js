import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'

class TechcrunchDetail extends React.Component {

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
        <View style={{backgroundColor: "#006cba"}}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>{state.params.title}</Text>
        </View>
        <Image style={{width: 400, height: 300, marginBottom: 20}} source={{uri:state.params.urlToImage}}/>
        <Text style={{marginLeft: 10}}>{state.params.description}</Text>
      </ScrollView>
    );
  }
}

export default TechcrunchDetail
