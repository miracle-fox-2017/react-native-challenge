import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios'
import fastXmlParser from 'fast-xml-parser'
import { RkCard } from 'react-native-ui-kitten'
import HTMLView from 'react-native-htmlview';

class Detail extends Component {
  constructor() {
    super()
    this.state = {
      gameDetail: '',
    }
  }

  static navigationOptions = {
    title: 'Detail',
    headerStyle: { marginTop: 24 }
  }

  componentWillMount() {
    axios.get(`https://www.giantbomb.com/api/game/${this.props.navigation.state.params.id}/?api_key=81b142b95e0dc166df9f0ddc886621c0ec8a3254`)
    .then(({data}) => {
      let jsonObj = fastXmlParser.parse(data)
      let gameDetail = jsonObj.response.results
      this.setState({
        gameDetail: gameDetail,
      })
    })
  }

  render() {
    let contentDesc = this.state.gameDetail.description
    if(this.state.gameDetail) {
      content = <ScrollView>
                  <RkCard style={{flex:1}}>
                    <View rkCardHeader>
                      <Text>{this.state.gameDetail.name}</Text>
                    </View>
                    <View rkCardContent>
                      <HTMLView
                        value={contentDesc}
                      />
                    </View>
                    <View rkCardFooter>
                      <Text>Footer</Text>
                    </View>
                  </RkCard>
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
  },
  horizontal: {
    justifyContent: 'space-around',
  }
})

export default Detail
