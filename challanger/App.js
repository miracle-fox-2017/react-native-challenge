import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';

import Human from './screens/HomePage'

const http = axios.create({
  baseURL: 'https://swapi.co/api/'
})

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentWillMount () {
    http.get('/people')
    .then(({data}) => {
      console.log('data yang didapat', data)
      this.setState({
        people: data.results
      })
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput />
        <TouchableHighlight>
          <Text>Allow This Text Right?</Text>
          <Text>{JSON.stringify(this.state.people)}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
