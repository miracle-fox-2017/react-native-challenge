import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: []
    }
  }

  onPressButton() {
    alert("Hello")
  }

  componentWillMount() {
    console.log("componentWillMount---------------")
    const apiUrl = 'https://pixabay.com/api/?key=4479062-e35b5172203266797d6336036&q=sports-car&image_type=photo&pretty=true';

    axios.get(apiUrl, { headers: { 'Content-Type': 'application/json' } })
      .then(({data}) => {
        console.log(" data.hits---------------", data)

        this.setState({
          photos: data.hits
        })

      }).catch(err => console.log({ message: 'Something wrong fetching photos', error: err.message }));

    /* var self = this
    fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      self.setState({
        photos: json.hits
      })
    }).catch((error) => {
      console.error(error);
    }); */
  }

  render() {
    const { navigate } = this.props.navigation
    // var obj = typeof this.state.photos !== 'undefined' ? JSON.parse(this.state.photos) : [];
    // console.log("RENDERED---------------------------", this.state.photos[0])
    console.log(this.state.photos[0])
    return (
      <View>

        <TouchableOpacity onPress={() => navigate('Details')}>
          <Text>{JSON.stringify(this.state.photos[0])}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}