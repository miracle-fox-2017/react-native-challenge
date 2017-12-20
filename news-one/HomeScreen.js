import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import TitleItem from './components/TitleItem'
import ArticleRow from './components/ArticleRow'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newsList: [],
      isLoading: false
    }
  }

  onPressButton() {
    alert("Hello")
  }

  fetchNewsAPI() {
    const url = 'http://wptavern.com/wp-json/wp/v2/posts?_embed'
    this.setState({
      isLoading: true
    })

    axios.get(url)
      .then(({data}) => {
        this.setState({
          newsList: data,
          isLoading: false
        })
        
      }).catch(err => console.log({ message: 'Something wrong fetching news', error: err.message }));
  }

  componentWillMount() {
    this.fetchNewsAPI()
  }

  render() {
    const { navigate } = this.props.navigation
    const styles = StyleSheet.create({
      title: {
        fontSize: 20,
        fontWeight: 'bold'
      },

      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    }); 

    return (
      <View style={styles.container}>
        {this.state.isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        <FlatList
          data={this.state.newsList}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => {
            return(
              <TouchableOpacity onPress={() => navigate('Details', { article: item })}>
                <ArticleRow article={item}/>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
}