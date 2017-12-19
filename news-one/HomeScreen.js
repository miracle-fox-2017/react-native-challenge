import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import TitleItem from './components/TitleItem'

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
        // console.log(" data.hits---------------", data)

        this.setState({
          photos: data.hits
        })

      }).catch(err => console.log({ message: 'Something wrong fetching photos', error: err.message }));
  }

  render() {
    const { navigate } = this.props.navigation
    const styles = StyleSheet.create({
      title: {
        fontSize: 20,
        fontWeight: 'bold'
      },
    }); 

    return (
      <View>

        
          {/* <Text style={styles.title}>{this.state.photos.length > 0 ? this.state.photos[0].tags : 'Belum Load'}</Text> */}
        {
          this.state.photos.map((photo, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => navigate('Details', { photo: photo })}>
               <TitleItem photo={photo.tags}/>
              </TouchableOpacity>
            )
          })
        }

      </View>
    )
  }
}