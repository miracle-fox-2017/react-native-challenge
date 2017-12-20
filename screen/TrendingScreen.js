import React, { Component } from 'react'
import { Text,
  View,
  Button,
  Image,
  FlatList } from 'react-native'
import axios from 'axios'

class TrendingScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Trending Gif',
    headerStyle: { marginTop: 24 },
  }

  constructor() {
    super()
    this.state = {
      images: []
    }
    this.getFromGiphy = this.getFromGiphy.bind(this)
  }

  getFromGiphy() {
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=sKMWhStnyc6mWswAtjtKfKxS4x5sisKL&limit=30&rating=G')
    .then(({ data }) => {
      this.setState({
        images: data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount(){
    this.getFromGiphy()
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <FlatList
          data={this.state.images}
          renderItem={({item}) => {
            return (
              <View style={{
                marginBottom: 5,
                flexDirection: 'row'
              }}>
                <Image
                    style={{width: 30, height: 30}}
                    source={{uri: item.images.fixed_width_small_still.url}}
                />
                <Text>{item.slug}</Text>
              </View>
            )}
          }
        />
      </View>
    )
  }
}

export default TrendingScreen
