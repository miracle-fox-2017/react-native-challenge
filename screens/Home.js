import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
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
    let content
    if(this.state.games.length) {
      content = <ScrollView>
                  { this.state.games.map(game => {
                    return <Cards game={game} key={game.guid} navigation={this.props.navigation}/>
                  })}
                </ScrollView>
    } else {
      content = <ActivityIndicator size="large" color="#0000ff"/>
    }
    return (
      <View style={[styles.container, styles.horizontal]}>
      {content}
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
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

export default Home