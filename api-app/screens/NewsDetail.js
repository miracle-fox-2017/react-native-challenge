import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


class NewsDetail extends React.Component {

  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      image: ''
    }
  }

  render() {
    const { state } = this.props.navigation
    console.log(state.params)
    return (
      <View>
        <Text style={style.header}>
          {state.params.data.title}
        </Text>
        <Text>
          {state.params.data.description}
        </Text>
        <Image source={{ uri: state.params.data.urlToImage }} style={style.image} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  header: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 75,
  }
})
export default NewsDetail