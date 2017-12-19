import React from 'react';
import { StyleSheet, Text, View, Button, ListView, Image, Linking, ScrollView } from 'react-native';
import axios from 'axios'

class NewsList extends React.Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  componentWillMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=f4dddfa962244898940d9ef5157889db')
      .then((response) => {
        console.log("Halooooooooooooooooo", response.data)
        this.setState({
          news: response.data.articles
        })
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
        <View>
          <Text style={style.header}>
            News List
        </Text>
          {this.state.news.map((berita, index) => {
            return (
              <View key={index}>
                <Text style={style.item} >
                  {berita.title}
                </Text>
                <Image source={{ uri: berita.urlToImage }} style={style.image} />
                <Text style={style.detail}
                  onPress={() => navigate('NewsDetail', { data: berita })}>
                  See More
                </Text>

              </View>
            )
          })}

        </View>
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  item: {
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },
  header: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: 80,
    height: 50,
  },
  detail: {
    textAlign: 'center',
    color: '#0099cc',
    fontSize: 13,
    fontWeight: 'bold'
  }
})
export default NewsList