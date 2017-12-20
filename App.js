import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

const http = axios.create({
  baseURL: 'https://swapi.co/api'
})
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentWillMount ( {
    http.get('/people')
      .then(({data})=> {
        console.log('data yang masuk ', data.results);
        this.setState({
          people: data.results
        })
      })
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.people)}</Text>
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
  },
});
