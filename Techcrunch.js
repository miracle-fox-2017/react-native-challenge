import React from 'react';
import { StyleSheet, Text, View, ListView, Image, ScrollView, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import TechcrunchDetail from './TechcrunchDetail'

class Techcrunch extends React.Component {

  constructor () {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5981474fde55432a9656bea68c9267bd')
         .then(({data}) => {
           this.setState({articles: data.articles})
           console.log(this.state.articles)
         })
         .catch((err) => {
           console.log(err)
         })
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <ScrollView>
        {this.state.articles.map((article, index) => {
          return(
            <View key={index}>
              <Text>{article.description}</Text>
              <Image style={{width: 150, height: 100}} source={{uri:article.urlToImage}}/>
              <Button title="Detail" onPress={() => navigate('BBCDetail', {title:article.title, description: article.description, urlToImage: article.urlToImage})}/>
            </View>
          )
        })}
      </ScrollView>
    );
  }
}

export default Techcrunch
