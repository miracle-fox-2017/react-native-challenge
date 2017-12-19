import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Content, Card } from 'native-base'
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
    title: 'Home'
  }

  componentWillMount() {
    axios.get('https://www.giantbomb.com/api/games/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254&limit=20')
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameList = jsonObj.response.results.game
      console.log(gameList)
      this.setState({
        games: gameList
      })
    })
  }


  render() {
    let content
    if(this.state.games.length) {
      content = <View>
                      { this.state.games.map((game, i) => {
                        return <Cards game={game} key={i} navigation={this.props.navigation}/>
                      })}
                </View>
    } else {
      content = <Text>Loading...</Text>
    }
    return (
      <ScrollView>
        {content}
      </ScrollView>
    )
  }
}

export default Home