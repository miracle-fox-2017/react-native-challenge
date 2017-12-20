import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview'

export default class DetailScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: []
    }
  }

  render() {
    const styles = StyleSheet.create({
      title: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold'
      },

      content: {
        padding: 10
      }
    }); 

    const { navigate, state } = this.props.navigation
    const article = state.params.article;
    const content = article.content.rendered;

    return (
      <ScrollView>
        <Text style={styles.title}>{article.title.rendered}</Text>
        <HTMLView
          style={styles.content}
          value={`<i>${content}</i>`}
        />
        
        {/* <Image style={styles.image} source={{ uri: state.params.photo.previewURL }} />
        <Text>Photo By: {state.params.photo.user}</Text>
        <Text>Tag: {state.params.photo.tags}</Text> */}
      </ScrollView>
    )
  }
}