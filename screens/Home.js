import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import fastXmlParser from 'fast-xml-parser'

import Cards from '../component/Cards'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      games: []
    }
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: { marginTop: 24 }
  }

  componentWillMount() {
    axios.get('https://www.giantbomb.com/api/games/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&limit=20')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameList = jsonObj.response.results.game
      this.setState({
        games: gameList
      })
    })
  }


  render() {
    return (
      <View style={styles.container}>
        {
          this.state.games.length <= 0 ? <ActivityIndicator size="large" color="#0000ff"/>
          :
          <FlatList
            style={styles}
            data={this.state.games}
            keyExtractor={(item => item.id)}
            renderItem={({item}) =>
              <View style={styles.card}>
                <Image source={{uri: item.image.medium_url}} style={styles.cardImage}/>
                <View style={styles.description}>
                  <Text style={styles.titleText}>{item.name}</Text>
                  <Text>{item.deck}</Text>
                </View>
                <Button onPress={() => {this.props.navigation.navigate('detail', {id: item.guid})}} title='Read More'/>
              </View>
            }
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 0.1,
    borderRadius: 2,
    borderColor: '#000',
    height: 250,
    flex: 2,
    marginVertical: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10
  },
  cardImage: {
    flex: 1
  },
  description: {
    padding: 10,
  },
  titleText: {
    fontWeight: '900',
    marginTop: 10,
    marginBottom: 5,
  },
  touch: {
    height: 80,
    backgroundColor: 'blue',
  }
})

export default Home
