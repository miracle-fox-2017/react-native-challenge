import React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import Details from './Details'

class HomeScreen extends React.Component {
  constructor () {
    super ()
    this.state = {
      news: []
    }
  }

  componentWillMount () {
    axios.get('http://beta.newsapi.org/v2/everything?q=apple&from=2017-12-13&to=2017-12-13&sortBy=popularity&apiKey=6cbcfa7b1a324dd9907486a7bfcb51c7')
    .then(({data}) => {
      this.setState({news: data.articles})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
      <Text>Berikut Daftar List News : </Text>
      {this.state.news.map((d, index) => {
        return(
          <View key={index}>
            <Text>{ d.title }</Text>
            <Image style={{width: 100, height: 100}} source={{ uri: d.urlToImage }}></Image>
            <Text>{ d.description }</Text>
            <Button title="Details" onPress={() => navigate('Details', {data: d })}></Button>
          </View>
        )
      })}
      </ScrollView>
    )
  }
}



const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
     headerTitle: 'Home',
   },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator
