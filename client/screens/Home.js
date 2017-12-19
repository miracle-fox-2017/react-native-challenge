import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'

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
      console.log('isi NEWS', data)
      this.setState({news: data.articles})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text>Berikut Daftar List News : </Text>
      {this.state.news.map((d, index) => {
        return(
          <Text key={index}>{d.title}</Text>
        )
      })}
        <Button title="Details" onPress={() => navigate('Details')}></Button>
      </View>
    )
  }
}

const DetailsScreen = ({goBack}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button onPress={() => goBack()} title="Back To Home"></Button>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
     headerTitle: 'Home',
   },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator
