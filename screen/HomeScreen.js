import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import axios from 'axios'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HomeScreen',
    headerMode: 'none'
  }

  constructor(props) {
    super()

    this.state = {
      headers: "An application for change your mood",
      mood: ''
    }

    this.getMoodFromGiphy()
    this.getMoodFromGiphy = this.getMoodFromGiphy.bind(this)
  }

  getMoodFromGiphy(){
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=sKMWhStnyc6mWswAtjtKfKxS4x5sisKL&tag=&rating=G')
    .then(({ data }) => {
      this.setState({
        mood: data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={{ margin: 'auto' }}>
          <Image
              style={{width: 200, height: 200}}
              source={{uri: this.state.mood.image_url}}
          />
        </View>
        <Text>{this.state.mood.image_url}</Text>

        <Button
          title='re-roll' onPress={this.getMoodFromGiphy} />
      </View>
    )
  }
}

export default HomeScreen
