import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import axios from 'axios'

class UserScreen extends Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
    this.getFromGiphy = this.getFromGiphy.bind(this)
  }

  getFromGiphy() {
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=sKMWhStnyc6mWswAtjtKfKxS4x5sisKL&limit=10&rating=G')
    .then(({ data }) => {
      this.setState({
        images: data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentWillMount(){
    this.getFromGiphy()
  }

  render() {
    return (
      <View>
        <Text>{ JSON.stringify(this.state.images) }</Text>
        <Text> this is user screen </Text>

        <Button
          title='go to Home' onPress={ () => navigate('Home')} />
      </View>
    )
  }
}

export default UserScreen
