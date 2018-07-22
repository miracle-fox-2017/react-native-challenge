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
        <View style={{backgroundColor: "#006cba"}}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>{state.params.title}</Text>
        </View>
        <Image style={{width: 400, height: 300}} source={{uri:state.params.urlToImage}}/>
        <Text>{state.params.description}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
})

export default BBCDetail
