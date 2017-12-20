import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home'

class Details extends React.Component {
  constructor () {
    super ()
  }

  render () {
    const {state, goBack} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00ffff'}}>
        <View>
          <Text style={styles.baseText}>Title: {state.params.data.title}</Text>
        </View>
          <Image style={{width: 100, height: 100}} source={{ uri: state.params.data.urlToImage }}></Image>
          <Text style={styles.baseText}>Description: {state.params.data.description}</Text>
          <Text style={styles.baseText}>Author: {state.params.data.author}</Text>
          <Button onPress={() => goBack()} title="Back Home"></Button>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Details
